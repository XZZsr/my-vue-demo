import Vue from 'vue'
import axios from 'axios'
import {Message, MessageBox, Loading} from 'element-ui';

import store from '@/store'
import router from '@/router'

// Vue.use(axios)
axios.defaults.baseURL = '/admin_api';
// Vue.http.options.root = '/admin_api/'

//请求拦截器
// axios.interceptors.response.use(
// 	response => {
// 		if(response.status==200){
// 			return response;
// 		}
// 	},
// 	error => {
//     if (error.response) {
// 	    if(error.response.status==403){
// 			// window.localStorage.removeItem('isLogin')
// 			// window.location.reload()
// 	    }else{
// 	    	ElementUI.Message.error({
// 	          message: '' +error.response.data[0]
// 	        });
// 	    }
//     }
//     return Promise.reject(error.response.data)   // 返回接口返回的错误信息
// });
// Vue.http.interceptors.push(function (request, next) {
//     // Authorization, 注：不能写在外部，store尚未初始化
//     Vue.http.headers.common['Authorization'] = 'Bearer ' + store.getters['auth/token'];

//     // loading
//     let loadingInstance = Loading.service({fullscreen: true})
//     next(function (response) {
//         loadingInstance.close()
//     });
// })

let success = function (response, options = {}) {
    let res = response
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

let error = function (response, options = {}) {
    return Promise.reject(response)
    if(error.response.status==403){
        // window.localStorage.removeItem('isLogin')
        // window.location.reload()
    }else{
        Message.error({
            message: '' +error.response.data[0]
        });
    }
}

let restUri = function (url, request, primary = 'id') {
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

const defaultOptions = {
    primary: 'id',
    message: '',
    showSuccessMessage: true,
    showErrorMessage: true,
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
        return axios.get(url, {params: request}).then(res => success(res, options)).catch(res => error(res, options))
    },
    post(url, request, options = {}) {
        options = getOptions(options)
        return axios.post(url, request).then(res => success(res, options)).catch(res => error(res, options))
    },
    put(url, request, options = {}) {
        options = getOptions(options)
        let {path, params} = restUri(url, request, options.primary)
        return axios.put(path, params).then(res => success(res, options)).catch(res => error(res, options))
    },
    delete(url, request, options = {}) {
        options.confirmMessage = undefined === options.confirmMessage ? '确认删除么?' : options.confirmMessage
        options = getOptions(options)
        return MessageBox.confirm(options.confirmMessage, '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'error'
        }).then(() => {
            let {path, params} = restUri(url, request, options.primary)
            return axios.delete(path, {params}).then(res => success(res, options)).catch(res => error(res, options))
        }).catch(() => {})

    },
    show(url, request, options = {}) {
        options.showSuccessMessage = undefined === options.showSuccessMessage ? false : options.showSuccessMessage
        options = getOptions(options)
        let {path, params} = restUri(url, request, options.primary)
        return axios.get(path, {params}).then(res => success(res, options)).catch(res => error(res, options))
    },
}