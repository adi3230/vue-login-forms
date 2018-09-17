import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import VeeValidate from 'vee-validate'

import './assets/app.scss'

import { currency } from '@/filters/currency'

Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.filter('currency', currency)

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

  firebase.auth().onAuthStateChanged((user) => {
      if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        })
        if(user) store.dispatch('autoSignIn', user)
      }
  })
