
import router from '@/router'
import store from '@/store'
import api from '@/utils/api'
import storage from 'store'
import Vue from 'vue'

const namespaced = true

const S_TOKEN = '_mp_token'
const S_USER = '_mp_user'
const S_MENUS = '_mp_menus'
const S_PERMISSIONS = '_mp_permissions'

const state = {
    token: null,
    user: null,
    menus: null,
    permissions: null,
    currentMenu: '',
    captchaUrl: ''
}

// 刷新验证码
let refreshCaptcha = function () {
    return Vue.http.options.root + 'captcha?' + Math.random()*10000000
}

const getters = {
    token(state) {
        let ret = null
        if (ret = state.token) {
            return ret
        }
        if (ret = storage.get(S_TOKEN)) {
            store.commit('auth/setToken', ret)
            return ret
        }
        return null
    },
    user(state) {
        let ret = null
        if (ret = state.user) {
            return ret
        }
        if (ret = storage.get(S_USER)) {
            store.commit('auth/setUser', ret)
            return ret
        }
        return null
    },
    menus(state) {
        let ret = null
        if (ret = state.menus) {
            return ret
        }
        if (ret = storage.get(S_MENUS)) {
            store.commit('auth/setMenus', ret)
            return ret
        }
        return null
    },
    permissions(state) {
        let ret = null
        if (ret = state.permissions) {
            return ret
        }
        if (ret = storage.get(S_PERMISSIONS)) {
            store.commit('auth/setPermissions', ret)
            return ret
        }
        return null
    },
    currentMenu: state => state.currentMenu,
    captchaUrl: state => state.captchaUrl,
}

const mutations = {
    setToken(state, payload) {
        if (null === payload) {
            storage.remove(S_TOKEN)
        } else {
            storage.set(S_TOKEN, payload)
        }
        state.token = payload
    },
    setUser(state, payload) {
        if (null === payload) {
            storage.remove(S_USER)
        } else {
            storage.set(S_USER, payload)
        }
        state.user = payload
    },
    setMenus(state, payload) {
        if (null === payload) {
            storage.remove(S_MENUS)
        } else {
            storage.set(S_MENUS, payload)
        }
        state.menus = payload
    },
    setPermissions(state, payload) {
        if (null === payload) {
            storage.remove(S_PERMISSIONS)
        } else {
            storage.set(S_PERMISSIONS, payload)
        }
        state.permissions = payload
    },
    setCurrentMenu(state, payload) {
        state.currentMenu = payload
    },
    refreshCaptcha(state) {
        state.captchaUrl = refreshCaptcha()
    },
}

const actions = {

    async login({commit, dispatch}, request) {
        return api.post('auth/token', request).then(res => {
            let token = res.data.access_token
            commit('setToken', token)

            dispatch('user').then(() => {
                router.push({name: 'dashboard.index'})
            })

            return res
        })
    },

    logout({commit}) {
        commit('setToken', null)
        commit('setUser', null)
        commit('setMenus', null)
        commit('setPermissions', null)

        router.push({name: 'login'})
    },

    async logoutRemote({dispatch}) {
        return api.post('auth/logout').then(() => {
            dispatch('logout')
        })
    },

    // 获取当前登录用户信息
    async user({commit}) {
        return api.get('auth/user').then(res => {
            // 当前用户信息
            let {id, name, email, phone} = res.body.data
            let userInfo = {id, name, email, phone}
            commit('setUser', userInfo)

            // 当前用户菜单
            let arr = undefined === res.body.data.menu ? [] : [].concat(res.body.data.menu)
            arr = traversePermissions(arr)
            commit('setMenus', arr)

            // 当前用户权限
            commit('setPermissions', res.body.data.permissions)

            return res
        })
    },
}

// 递归菜单，重组数据
let traversePermissions = function (data) {
    return data.map(function (x) {
        let {id, name, alias_name, icon, children} = x
        alias_name = '#' === alias_name ? null : alias_name
        let obj = {id, name, route: alias_name, icon, children}
        if (children.length > 0) {
            obj.children = traversePermissions(children)
        }
        return obj
    })
}

export default {namespaced, state, getters, mutations, actions}