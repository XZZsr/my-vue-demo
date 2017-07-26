import api from '@/utils/api'

const PATH = 'users'

let resetItem = function () {
    return {
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        role_id: '',
        status: 1,
    }
}

const namespaced = true

const state = {
    list: [],
    meta: {},
    item: resetItem(),
}

const getters = {
    list: state => state.list,
    item: state => state.item,
    meta: state => state.meta,
    rules() {
        return {
            name: [
                { required: true, message: '姓名不能为空', trigger: 'blur' },
                { max: 10, message: '姓名10个字符以内', trigger: 'blur' }
            ],
            email: [
                { required: true, message: '邮箱不能为空', trigger: 'blur' },
                { type: 'email', message: '不是有效的邮箱', trigger: 'blur' },
            ],
            phone: [
                { required: true, message: '手机不能为空', trigger: 'blur' },
                { pattern: /^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|7[0-9])\d{8}$/, message: '手机号格式错误', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '密码不能为空', trigger: 'blur' },
                { min: 6, max: 20, message: '密码6~20个字符之间', trigger: 'blur' }
            ],
            password_confirmation: [
                { required: true, message: '密码不能为空', trigger: 'blur' },
            ],
            role_id: [
                { type: 'number', min: 0, required: true, message: '角色不能为空', trigger: 'change' },
            ],
            status: [
                { pattern: /[01]/, required: true, message: '状态错误', trigger: 'change' },
            ],
        }
    },
    search(state, getters, rootState, rootGetters) {
        return [
            {
                label: '姓名',
                type: 'text',
                model: 'name'
            },
            {
                label: '角色',
                type: 'select',
                model: 'role_id',
                data: rootGetters['roles/list']
            },
        ]
    }
}

const mutations = {
    setList(state, payload) {
        state.list = payload
    },
    setItem(state, payload) {
        state.item = payload
    },
    setMeta(state, payload) {
        state.meta = payload
    },
    resetItem(state) {
        state.item = resetItem()
    }
}

const actions = {
    async get({commit}, request) {
        return api.get(PATH, request).then(res => {
            commit('setList', res.body.data)
            commit('setMeta', res.body.meta)
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