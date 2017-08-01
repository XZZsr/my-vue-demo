import Vue from 'vue'
import Vuex from 'vuex'

import projects from './modules/projects'
import permissions from './modules/permissions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        projects,
        permissions
    }
})