// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Input from './components/Input'
import Message from './components/Message'
// import router from './router'
import Users from './components/Users'
import Home from './components/Home'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.component('app-input',Input);
Vue.component('app-message',Message);

const routes = [
  { path: '/' , component: Home},
  { path: '/users/:teamId' , component: Users},
];


const router = new VueRouter({mode: 'history',routes});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
