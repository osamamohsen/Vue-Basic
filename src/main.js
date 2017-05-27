// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Input from './components/Input'
import Message from './components/Message'
import router from './router'

Vue.config.productionTip = false
Vue.component('app-input',Input);
Vue.component('app-message',Message);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
