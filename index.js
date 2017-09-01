const rippleComponent = require('./ripple.vue')

const VueRipple = {
    install: (Vue) => {
        Vue.component('ripple', rippleComponent)
    } 
}  

module.exports = VueRipple