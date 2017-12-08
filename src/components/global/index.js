
export default {
    install(Vue) {
        Vue.component('my-back', require('./back.vue'))
        Vue.component('my-icon', require('./icon.vue'))
    }
}
