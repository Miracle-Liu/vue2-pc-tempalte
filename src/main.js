/*
 * @Description: 程序入口
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-24 11:40:20
 * @LastEditTime: 2020-10-28 10:54:57
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/main.js
 */
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/css/main.scss'
import LodashPlugin from '@/plugins/lodash-plugin.js'

import ElementUI from 'element-ui'
import '@/assets/css/element-variables.scss'
import '@/assets/iconfont/iconfont.css'

import WordCloud from 'wordcloud'
window.WordCloud = WordCloud

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VuePerfectScrollbar from 'vue-perfect-scrollbar'
Vue.component('VuePerfectScrollbar', VuePerfectScrollbar)

Vue.use(ElementUI)
Vue.use(LodashPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
