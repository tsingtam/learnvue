// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import fastclick from 'fastclick'

Vue.config.productionTip = false
Vue.use(Vuex)
require('../mock')
fastclick.attach(document.body) //解决移动端点击事件200ms延迟
Vue.prototype.$http=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
