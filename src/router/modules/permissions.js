const PATH = 'permissions'

export default [
    {
        path: '/' + PATH,
        name: PATH + '.index',
        component: require('@/components/' + PATH + '/index.vue'),
        meta: {
            title: '菜单管理'
        }
    },
]