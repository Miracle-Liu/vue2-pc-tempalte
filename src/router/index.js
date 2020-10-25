/*
 * @Description: 路由
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 11:49:06
 * @LastEditTime: 2020-10-25 14:57:31
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: {
      name: 'home'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      // 预警中心
      {
        path: '/warningCenter',
        name: 'warningCenter',
        component: () => import('@/views/warningCenter/index.vue')
      },
      // 监管配置
      {
        path: '/regulatoryConfiguration',
        name: 'regulatoryConfiguration',
        component: () => import('@/views/regulatoryConfiguration/index.vue')
      },
      // 监管日志
      {
        path: '/regulatoryLog',
        name: 'regulatoryLog',
        component: () => import('@/views/regulatoryLog/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
