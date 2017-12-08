import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'  //主要放些通用的样式

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common
    }
})
