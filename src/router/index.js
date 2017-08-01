import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'

import projects from './modules/projects'
import layout from './modules/layout'

Vue.use(Router)

let arr = [
    ...projects,
    ...layout,
]
let groups = {}


let children = []

for (let i in arr) {
    if(arr[i].meta.parent=='' || arr[i].meta.parent == undefined){
        children.push(arr[i])
    }
}
let routes = [
    {
        path: '/',
        component: require('@/components/layout/base.vue'),
        children
    }
]
const router = new Router({routes})

router.afterEach(route => {
    let currentMenu = undefined === route.meta.menuRoute ? route.name : route.meta.menuRoute
})

export default router
