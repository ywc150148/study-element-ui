import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import i18n from './config/i18n'
import element from './element/index'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element)

import axios from './config/axios'
Vue.prototype.$axios = axios;

import {RESTFULAPI} from './config/Api'
Vue.prototype.RESTFULAPI = RESTFULAPI;

import utils from './utils'
Vue.use(utils)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
