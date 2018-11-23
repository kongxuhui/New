import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store.js'
import http from './untils/http'
import animate from 'animate.css'
import './mixins'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./assets/lang/zh'),
    'en': require('./assets/lang/en')
  }
})

Vue.use(animate)
Vue.config.productionTip = false

Vue.prototype.$http = http;

new Vue({
  router,
  i18n,
  // components: { App },
  store,//使用store
  render: h => h(App)
}).$mount('#app')
