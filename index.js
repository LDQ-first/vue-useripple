const rippleComponent = require('./ripple.vue')

const VueRipple = {
    install: (Vue) => {
        Vue.component('VueRipple', rippleComponent)
    } 
}  

module.exports = VueRipple