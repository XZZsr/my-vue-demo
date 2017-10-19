import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'

import helpFiles from './modules/help-files'

Vue.use(Router)

let arr = [
    ...helpFiles,
]

let children = []

for (let i in arr) {
    children.push(arr[i])
}
let routes = [
    {
        path: '/',
        name: 'index',
        component: require('@/components/layout/base.vue'),
        children
    }
]
const router = new Router({routes})

router.beforeEach((to, from, next) => {  //设置title
    window.scrollTo(0, 0)

    document.title = undefined === to.meta.title ? '默认信息' : to.meta.title

    next()
})

export default router
