const PATH = 'test' //路径

export default [
    {
        path: '/' + PATH,
        name: PATH + '.index',
        component: require('@/components/' + PATH + '/test.vue'),
        meta: {
            title: '测试页面'
        }
    }
]
