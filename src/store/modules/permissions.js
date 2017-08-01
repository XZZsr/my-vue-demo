import api from '@/utils/api'

const PATH = 'project_permissions'

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
    defaultProps(){ //级联选择器结构
        return{
            children: 'children',
            label: 'name',
            value: 'id'
        }
    },
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
        let url = 'projects/'+request.id+'/permissions'
        return api.get(url, request).then(res => {
            commit('setList', res.data.data.data)
            return res
        })
    },
    async show({commit}, request) {
        return api.show(PATH, request).then(res => {
            commit('setItem', res.data.data)
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