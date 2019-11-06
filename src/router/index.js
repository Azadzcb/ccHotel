import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../views/main.vue'),
    // 子路由
    children: [
      {
        path: 'roomStatus',
        name: 'roomStatus',
        component: () => import(/* webpackChunkName: "roomStatus" */ '../views/roomStatus.vue')
      },
      {
        path: 'guestInfo',
        name: 'guestInfo',
        component: () => import(/* webpackChunkName: "guestInfo" */ '../views/guestInfo.vue')
      },
      
      {
        path: 'guestBill',
        name: 'guestBill',
        component: () => import(/* webpackChunkName: "guestBill" */ '../views/guestBill.vue')
      },
      {
        path: 'vipQuery',
        name: 'vipQuery',
        component: () => import(/* webpackChunkName: "vipQuery" */ '../views/vipQuery.vue')
      },

    ]
  },
  // {
  //   path: '/vipQuery',
  //        name: 'vipQuery',
  //        component: () => import(/* webpackChunkName: "vipQuery" */'../views/vipQuery.vue')
  // }
]

const router = new VueRouter({
  linkActiveClass: 'router-link-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
