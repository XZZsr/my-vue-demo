const PATH = 'projects'

export default [
    {
        path: '/' + PATH,
        name: PATH + '.index',
        component: require('@/components/' + PATH + '/index.vue'),
        meta: {
            title: '项目列表'
        }
    },
    {
        path: '/' + PATH + '/create',
        name: PATH + '.create',
        component: require('@/components/' + PATH + '/create.vue'),
        meta: {
            title: '新建项目'
        }
    },
    {
        path: '/' + PATH + '/edit',
        name: PATH + '.edit',
        component: require('@/components/' + PATH + '/edit.vue'),
        meta: {
            title: '编辑项目'
        }
    },
]