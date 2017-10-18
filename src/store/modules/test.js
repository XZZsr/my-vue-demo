import api from '@/utils/api'

const PATH = 'users'  //url前缀

const namespaced = true

let resetItem = function () {
  return{
    id: '',
  }
}

const state = {
    list: [],
    meta: {},
    item: resetItem(),
}

const getters = {
  list: state => state.list,
  item: state => state.item,
  meta: state => state.meta,
  token(state) {
    return ''
  },
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
