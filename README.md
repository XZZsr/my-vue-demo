# vue开发环境

# 前言
我的vue的基本环境搭建

# 技术栈

vue2 + vuex + vue-router + webpack + ES6 + axios + sass

## 项目运行

```
git clone https://github.com/XZZsr/my-vue-demo.git

cd my-vue-demo

npm install

npm run dev
```

# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
│   ├── index.js                                // 配置代理和接口等
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── global                              // 公共组件  不涉及业务
│   │   │   ├── back.vue                        // 试验组件
│   │   │   ├── index.js                        // 导出文件
│   │   ├── layout                              // 布局组件
│   │   └── help-files                          // 演示组件
│   ├── router                                  // 路由
│   │   ├── modules                             // 路由模块
│   │   └── index                               // 路由配置
│   ├── store                                   // 状态管理
│   │   ├── modules                             // 状态管理模块
│   │   └── index                               // 状态管理配置
│   ├── utils                                   // 工具
│   │   ├── api                                 // api配置
│   │   └── filter                              // 过滤器
│   │   └── fn                                  // 操作数据的工具类函数
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── index.html                                  // 入口html文件
.
```

# 代码介绍

### 状态管理

#### 所有涉及数据的地方都经过状态管理


```
import api from '@/utils/api'

const PATH = 'help-files'  //url前缀

const namespaced = true

const state = {
    list: [],
}

const getters = {
  list: state => state.list,
}

const mutations = {
    setList(state, payload) {
        state.list = payload
    },
}

const actions = {
    async get({commit}, request) {
        return api.get(PATH, request).then(res => {
            commit('setList', res.data)
            return res
        })
    },
}

export default {namespaced, state, getters, mutations, actions}

```
### 路由管理

```
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
]
```

## 代码说明

```
状态和路由都是以模块开发，另外两者命名最好一致，例如help-files的文件名以及路由还有状态名都一致，这样便于后续修改
```
