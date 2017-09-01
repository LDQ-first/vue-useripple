const rippleComponent = require('./ripple.vue')

const VueRipple = {
    install: function (Vue) {
        Vue.component('ripple', rippleComponent)
    } 
}  

