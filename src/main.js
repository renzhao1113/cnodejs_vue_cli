// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'

import store from './store/state'
import { InfiniteScroll, Button } from 'mint-ui'
import moment from 'moment'
import mavonEditor from 'mavon-editor'
import '../node_modules/mavon-editor/dist/css/index.css'

import 'mint-ui/lib/style.css'
import '../static/css/base.css'
import '../static/css/style.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.component(Button.name, Button)
Vue.use(InfiniteScroll)
Vue.use(mavonEditor)

// 全局过滤器
Vue.filter('timeFormat', function (addTime) { // {{add_time | dateFormat}}
  return moment(addTime).format('YYYY-MM-DD hh:mm:ss')
})

Vue.filter('dateFormat', function (addTime) { // {{add_time | dateFormat}}
  return moment(addTime).format('YYYY-MM-DD')
})

// 通过传入的毫秒值，计算出时多少天以前
Vue.filter('toDay', time => {
  if (time > 2592000000) {
    return Number.parseInt(time / (1000 * 3600 * 24 * 30)) + '个月前'
  }
  if (time < 2592000000 && time >= 86400000) {
    return Number.parseInt(time / (1000 * 3600 * 24)) + '天前'
  }
  if (time < 86400000 && time >= 3600000) {
    return Number.parseInt(time / (1000 * 3600)) + '个小时前'
  }
  if (time < 3600000) {
    return Math.ceil(time / (1000 * 60)) + '分钟前'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
