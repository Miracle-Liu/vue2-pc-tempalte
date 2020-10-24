/*
 * @Description: 程序入口
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-24 11:40:20
 * @LastEditTime: 2020-10-24 14:55:27
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/main.js
 */
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import '@/plugins/lodash-plugin.js'
import '@/assets/css/main.scss'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
