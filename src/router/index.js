import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'

import test from './modules/test'

Vue.use(Router)

let arr = [
    ...test,
]

let children = []

for (let i in arr) {
    children.push(arr[i])
}
let routes = [
    {
        path: '/',
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
