import Vue from 'vue';
import 'assets/css/base.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/styles/atom-one-light.css'
import './index.less'
import App from './index.vue'

import router from '../utils/router.js'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})