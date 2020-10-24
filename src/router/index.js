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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
