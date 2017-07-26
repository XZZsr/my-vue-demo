// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// reset style
import './assets/css/reset.css'

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//style.css
import './assets/css/style.css'

//global
import MyComponent from './components/global'

Vue.use(ElementUI)
Vue.use(MyComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
