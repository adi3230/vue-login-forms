import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/_global.scss'
import './assets/login.scss'
import './assets/signUp.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
