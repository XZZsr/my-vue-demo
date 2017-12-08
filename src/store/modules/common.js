import api from '@/utils/api'

const PATH = 'help-files'  //url前缀

const namespaced = true

let resetItem = function () {
    return{
        id: '',
    }
}

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
