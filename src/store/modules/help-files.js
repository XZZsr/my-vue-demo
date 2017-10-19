import api from '@/utils/api'

const PATH = 'help-files'  //url前缀

const namespaced = true

let resetItem = function () {
  return{
    id: '',
  }
}

const state = {
    list: [],
    item: resetItem(),
    token: 'iamatoken'
}

const getters = {
  list: state => state.list,
  item: state => state.item,
  token(state) {
    return state.token
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
        return api.get(PATH, request).then(res => {
            commit('setList', res.data.data)
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
            return res
        })
    },
    async update({commit}, request) {
        return api.put(PATH, request).then(res => {
            return res
        })
    },
    async delete({commit}, request) {
        return api.delete(PATH, request)
    },
}

export default {namespaced, state, getters, mutations, actions}
