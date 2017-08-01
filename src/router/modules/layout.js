import project from './projects'
import permissions from './permissions'

let children = [
    {
        path: '/project/detail',
        name: 'project.detail',
        component: require('@/components/projects/detail.vue'),
        meta: {
            title: '项目简介'
        },
    }
]
children.concat(permissions)

console.log(children)
export default [
    {
        path: '/project',
        name: 'project.index',
        component: require('@/components/layout/project.vue'),
        meta: {
            title: '项目列表'
        },
        children
    },
]