const PATH = 'others' //路径

export default [
    
    {
        path: '/' + PATH + '/404',
        name: PATH + '.404',
        component: require('@/components/' + PATH + '/404.vue'),
        meta: {
            title: '404-页面丢失'
        }
    },
    {
        path: '/' + PATH + '/500',
        name: PATH + '.500',
        component: require('@/components/' + PATH + '/500.vue'),
        meta: {
            title: '500-数据异常'
        }
    },
]
