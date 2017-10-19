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

# 说明
没有多少代码，主要是环境搭建

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

56 directories, 203 files
```
