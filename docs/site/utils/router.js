import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConf from '../config'

import page from '../../../README.md'
Vue.use(VueRouter)

const map = {}
const context = require.context('../../../src', true, /README\.md$/)
context.keys().forEach(key => {
  map[key] = context(key);
});

const routes = routerConf.map(r => {
  const path = r.path
  const module = map[`.${path}/README.md`]
  r.component = module.default
  return r
});

routes.push({
  path: '/',
  component: page
});

const router = new VueRouter({
  routes
})

export default router