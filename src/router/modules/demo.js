const PATH = 'demo' //路径

export default [
    {
        path: '/' + PATH,
        name: PATH + '.demo1',
        component: require('@/components/' + PATH + '/demo1.vue'),
        meta: {
            title: 'demo1页面'
        }
    },
    {
        path: '/' + PATH + '/detail',
        name: PATH + '.demo2',
        component: require('@/components/' + PATH + '/demo2.vue'),
        meta: {
            title: 'demo2页面'
        }
    },
]
