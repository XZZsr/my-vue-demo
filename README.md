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
如果出现sass错误的话，可以通过淘宝镜像重新安装下
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install node-sass
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
│   │   ├── others                              // 其他页面
│   │   │   ├── 404.vue                         // 404页面
│   │   │   ├── 500.vue                         // 500页面
│   │   ├── demo                                // demo页面
│   │   │   ├── demo1.vue                       
│   │   │   ├── demo1.vue                       
│   │   ├── global                              // 公共组件  不涉及业务
│   │   │   ├── back.vue                        // 试验组件
│   │   │   ├── icon.vue                        // 自定义icon组件
│   │   │   ├── index.js                        // 配置组件
│   │   ├── layout                              // 布局页面
│   │   │   ├── _footer.vue                     // 页面底部
│   │   │   ├── _navbar.vue                     // 页面头部
│   │   │   ├── _slider.vue                     // 页面菜单栏
│   │   │   ├── base.vue                        // 页面布局
│   ├── router                                  // 路由
│   │   ├── modules                             // 路由模块
│   │   │   ├── other.js                        // 其他页面路由模块
│   │   │   ├── demo.js                         // demo页面路由模块
│   │   └── index                               // 路由配置
│   ├── store                                   // 状态管理
│   │   ├── modules                             // 状态管理模块
│   │   │   ├── common.js                       // 通用信息模块
│   │   └── index                               // 状态管理配置
│   ├── utils                                   // 工具
│   │   ├── api                                 // api封装
│   │   └── filter                              // vue过滤器
│   │   └── fn                                  // 操作数据的工具类函数
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── index.html                                  // 入口html文件
.
```

# 代码介绍

### 状态管理

##### 设计到组件通信的接口，请从vuex进行数据调用
##### 具体开发时，可以根据业务逻辑定义不同的模块
```
import api from '@/utils/api'
const namespaced = true

const state = {
    sliderToggle: false,
}

const getters = {
    sliderToggle: state => state.sliderToggle,
}

const mutations = {
    setToggle(state){
        state.sliderToggle = !state.sliderToggle
    }
}
const actions = {

}
export default {namespaced, state, getters, mutations, actions}

```
##### 状态管理开发的规范，一切的数据都从getter获取，同步操作数据走mutations，
##### 异步操作走actions
##### 在store/index里进行引用
```
import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'  //主要放些通用的样式

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common
    }
})

```
##### 组件中使用状态管理
```
import {mapGetters} from 'vuex'   //调用getter时须引用
computed: {     //调用common的getter中的sliderToggle
    ...mapGetters({ //获取vuex的getter
        sliderToggle: 'common/sliderToggle'
    }),
},

this.$store.commit('common/setToggle')  //调用common的mutations

this.$store.dispatch('common/xxx')  //调用common的actions
```

### 路由管理
####路由管理也是通过模块开发，其实就是写一个router的数组对象，导出然后在router/index引用
```
const PATH = 'demo' //保持和components里的文件名一致，方便修改和命名

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
```
####对router的一些基本配置
```
import Vue from 'vue'
import Router from 'vue-router'

import demo from './modules/demo'  //导入demo模块

Vue.use(Router)

let arr = [               //多模块时合并
    ...demo,
]

let children = []  

for (let i in arr) {           //放入children
    children.push(arr[i])
}
let routes = [   //最外层的route
    {
        path: '/',
        name: 'index',
        component: require('@/components/layout/base.vue'),
        children
    }
]
const router = new Router({routes})

router.beforeEach((to, from, next) => {  //路由钩子，
    if(to.matched.length === 0){  //链接匹配不到组件跳到404页面
        next('/common/404');
        return false
    }
    window.scrollTo(0, 0)  //跳转新路由 回到顶部
    document.title = undefined === to.meta.title ? '默认信息' : to.meta.title  //如果meta有title信息则设置title
    next()
})

export default router

```
### api封装
我们是使用axios进行数据请求，定义了全局的钩子，并且使用elementui的loading以及弹窗等对页面的请求进行了一些提示

## 待+