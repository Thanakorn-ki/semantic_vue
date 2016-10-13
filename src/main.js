import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import disabled from './components/disabled'
import store from './vuex'
import '../node_modules/semantic-ui/dist/semantic.min.css'
import 'semantic'
import VueRouter from 'vue-router'
Vue.use(require('vue-resource'))

Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    { path: '/', component: Hello },
    { path: '/disabled', component: disabled }
  ]
})
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
