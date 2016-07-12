import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import disabled from './components/disabled'
import '../node_modules/semantic-ui/dist/semantic.min.css'
import 'semantic'
import VueRouter from 'vue-router'
Vue.use(require('vue-resource'))

Vue.use(VueRouter)
var router = new VueRouter()
/* eslint-disable no-new */
router.map({
  '/': {
    component: Hello
  },
  '/disabled': {
    component: disabled
  }
})
router.start(App, 'app')
