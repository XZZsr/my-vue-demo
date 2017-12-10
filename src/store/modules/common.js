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
