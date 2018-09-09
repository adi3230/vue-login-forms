import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import './assets/app.scss'

Vue.config.productionTip = false

  let app;
  // Initialize Firebase
  // Enter your own created config
  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

  firebase.initializeApp(config)

  firebase.auth().onAuthStateChanged((user => {
    if (!app) {
      app = new Vue({
          el: '#app',
          router,
          render: h => h(App)
      })
}
  }))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
