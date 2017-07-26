import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'

import projects from './modules/projects'

Vue.use(Router)

let arr = [
    ...projects,
]
let groups = {}

// arr.map(v => {
//     let layout = (undefined ===  v.meta) || (undefined ===  v.meta.layout) ? 'base' : v.meta.layout
//     let data = undefined === groups[layout] ? [] : groups[layout]
//     groups[layout] = data.concat(v)
// })

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
console.log(routes)
const router = new Router({routes})

router.afterEach(route => {
    let currentMenu = undefined === route.meta.menuRoute ? route.name : route.meta.menuRoute
})

export default router
