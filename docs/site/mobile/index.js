import Vue from 'vue'
import VueRouter from 'vue-router'
import 'assets/css/base.css'
import App from './index.vue'
import routerConf from '../config'
import './index.less'
import gant from '../../../src/index.js'
Vue.use(VueRouter)
Vue.use(gant)

const map = {}
const context = require.context('../../../src', true, /demo\/index\.vue$/)
context.keys().forEach(key => {
  map[key] = context(key)
})
const routes = routerConf.map(r => {
  const path = r.path
  r.component = map[`.${path}/demo/index.vue`].default
  return r
})

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})