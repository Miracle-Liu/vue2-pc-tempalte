/*
 * @Description: 程序入口
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-24 11:40:20
 * @LastEditTime: 2020-10-25 15:15:09
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/main.js
 */
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/css/main.scss'
import '@/plugins/lodash-plugin.js'

import ElementUI from 'element-ui'
import '@/assets/css/element-variables.scss'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VuePerfectScrollbar from 'vue-perfect-scrollbar'
Vue.component('VuePerfectScrollbar', VuePerfectScrollbar)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
