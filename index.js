import rippleComponent from './ripple.vue'

const VueRipple = {
    install:  (Vue) => {
        Vue.component('ripple', rippleComponent)
    } 
}  

export default VueRipple
