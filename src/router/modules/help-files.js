const PATH = 'help-files' //路径

export default [
    {
        path: '/' + PATH,
        name: PATH + '.index',
        component: require('@/components/' + PATH + '/index.vue'),
        meta: {
            title: '测试帮助页面'
        }
    },
    {
        path: '/' + PATH + '/detail',
        name: PATH + '.detail',
        component: require('@/components/' + PATH + '/detail.vue'),
        meta: {
            title: '测试帮助页面详情'
        }
    },
]
