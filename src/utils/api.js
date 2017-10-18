import Vue from 'vue'
import VueResource from 'vue-resource'
import {Message, MessageBox, Loading} from 'element-ui';

import store from '@/store'
import router from '@/router'

Vue.use(VueResource)

Vue.http.options.root = '/admin_api/'

Vue.http.interceptors.push(function (request, next) {  //请求拦截器
    // Authorization, 注：不能写在外部，store尚未初始化
    Vue.http.headers.common['Authorization'] = 'Bearer ' + store.getters['test/token']; //token验证的添加方式

    // loading
    let loadingInstance = Loading.service({fullscreen: true}) //发送请求的时候 开启elementui的loading
    next(function (response) {
        loadingInstance.close() //请求结束，关闭loading
    });
})

let success = function (response, options = {}) {  //执行成功的时候使用elementui弹出出接口返回message的信息
    let res = response.body
    if (undefined !== options.showSuccessMessage && options.showSuccessMessage) {
        let msg = ''
        if (undefined !== options.message && options.message) {
            msg = '' + options.message
        } else if (undefined !== res.message) {
            msg = res.message
        }
        Message.success(msg)
    }

    return Promise.resolve(response)
}

let error = function (response, options = {}) {   //执行失败的时候使用elementui弹出出接口返回message的信息
    console.log(options)
    if (undefined !== options.showErrorMessage && options.showErrorMessage) {
        let msg = ''
        if (undefined === response.body.errors) {
            msg = response.body.message
        } else {
            msg = Object.values(response.body.errors)[0][0]
        }
        Message.error(msg)
    }

    if (401 === response.status) {
        store.dispatch('auth/logout')
    } else if (403 === response.status) {
        router.push({name: 'errors.403'})
    }

    return Promise.reject(response)
}

let restUri = function (url, request, primary = 'id') {  //重置url的方法，主要用来处理url的格式
    let req = Object.assign({}, request)
    let id = req[primary] || 0
    if (id > 0) {
        url += '/' + id
        delete req[primary]
    }
    return {
        path: url,
        params: req
    }
}

const defaultOptions = {  //参数配置
    primary: 'id',
    message: '',
    showSuccessMessage: true, //成功时，弹窗是否显示
    showErrorMessage: true, //失败时，弹窗是否显示
}

let getOptions = function (options = null) {
    return Object.assign({}, defaultOptions, options)
}

// post/put/patch第二个参数是body，第三个才是options
// get/head/delete/jsonp，只有2个参数，第二个是options
export default {
    get(url, request, options = {}) {
        options.showSuccessMessage = undefined === options.showSuccessMessage ? false : options.showSuccessMessage
        options = getOptions(options)
        return Vue.http.get(url, {params: request}).then(res => success(res, options)).catch(res => error(res, options))
    },
    post(url, request, options = {}) {
        options = getOptions(options)
        return Vue.http.post(url, request).then(res => success(res, options)).catch(res => error(res, options))
    },
    put(url, request, options = {}) {
        options = getOptions(options)
        let {path, params} = restUri(url, request, options.primary)
        return Vue.http.put(path, params).then(res => success(res, options)).catch(res => error(res, options))
    },
    delete(url, request, options = {}) {   //删除加了个弹窗是否
        options.confirmMessage = undefined === options.confirmMessage ? '确认删除么?' : options.confirmMessage
        options = getOptions(options)
        return MessageBox.confirm(options.confirmMessage, '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'error'
        }).then(() => {
            let {path, params} = restUri(url, request, options.primary)
            return Vue.http.delete(path, {params}).then(res => success(res, options)).catch(res => error(res, options))
        }).catch(() => {})

    },
    show(url, request, options = {}) {
        options.showSuccessMessage = undefined === options.showSuccessMessage ? false : options.showSuccessMessage
        options = getOptions(options)
        let {path, params} = restUri(url, request, options.primary)
        return Vue.http.get(path, {params}).then(res => success(res, options)).catch(res => error(res, options))
    },
}
