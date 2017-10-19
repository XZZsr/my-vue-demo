import Vue from 'vue'
import Vuex from 'vuex'

import helpFiles from './modules/help-files'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        helpFiles
    }
})
