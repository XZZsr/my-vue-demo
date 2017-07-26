import api from '@/utils/api'

const PATH = 'projects'

let resetItem = function () {
    return {
        name: '',
        admin_id: '',
        description: '',
        url: '',
        notify_url: '',
        logo: ''
    }
}

const namespaced = true

const state = {
    list: [],
    item: resetItem(),
}

const getters = {
    list: state => state.list,
    item: state => state.item,
    rules() {
        return {
            name: [
                { required: true, message: '项目名称必须', trigger: 'blur' },
            ],
            admin_id: [
                { type: 'number', required: true, message: '项目管理员必须', trigger: 'change' },
            ],
            url: [
                { required: true, message: '项目URL必须', trigger: 'blur' },
            ],
            notify_url: [
                { required: true, message: '项目接口通知url必须', trigger: 'blur' },
            ],
        }
    },
    admin_roles(){
        return [
            {id: 5, name: '周雪娇'},
            {id: 249, name: '陈诚'},
            {id: 250, name: '徐先明'},
            {id: 251, name: '吴娴'},
        ]
    },
    logo_url(){
        return 'http://qx-api.wanshengweiye.net/'
    } 
}

const mutations = {
    setList(state, payload) {
        state.list = payload
    },
    setItem(state, payload) {
        state.item = payload
    },
    resetItem(state) {
        state.item = resetItem()
    }
}

const actions = {
    async get({commit}, request) {
        return api.get(PATH, request).then(res => {
            commit('setList', res.body.data.data)
            return res
        })
    },
    async show({commit}, request) {
        return api.show(PATH, request).then(res => {
            commit('setItem', res.body.data)
            return res
        })
    },
    async store({commit}, request) {
        return api.post(PATH, request).then(res => {
            commit('resetItem')
            return res
        })
    },
    async update({commit}, request) {
        return api.put(PATH, request).then(res => {
            commit('resetItem')
            return res
        })
    },
    async delete({commit}, request) {
        return api.delete(PATH, request)
    },
}

export default {namespaced, state, getters, mutations, actions}