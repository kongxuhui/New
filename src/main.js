
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store.js'
import http from './untils/http'
import animate from 'animate.css'
import './mixins'
import 'babel-polyfill'




//设置cookie

Vue.prototype.setCookie = function(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
};


//获取cookie

Vue.prototype.getCookie = function(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
};



import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'CHS', // 语言标识
    messages: {
        'CHS': require('./assets/lang/CHS'),
        'EN': require('./assets/lang/EN'),
        'ES': require('./assets/lang/ES'),
        'FRA': require('./assets/lang/FRA'),
        'DE': require('./assets/lang/DE'),
        'JP': require('./assets/lang/JP'),
        'RU': require('./assets/lang/RU'),
    }
})

Vue.use(animate)
Vue.config.productionTip = false


Vue.prototype.$http = http;

new Vue({
    router,
    i18n,
    // components: { App },
    store, //使用store
    render: h => h(App)
}).$mount('#app')