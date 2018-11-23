import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
      },
      {
          path: '/aboutcompany',
          name: 'aboutcompany',
          component: () => import(/* webpackChunkName: "about" */ './views/aboutcompany.vue')
      },
      {
          path: '/discount',
          name: 'discount',
          component: () => import(/* webpackChunkName: "about" */ './views/discount.vue')
      },
      {
          path: '/special',
          name: 'special',
          component: () => import(/* webpackChunkName: "about" */ './views/special.vue')
      },
      {
          path: '/goods',
          name: 'goods',
          component: () => import(/* webpackChunkName: "about" */ './views/goods.vue')
      }
  ]
})
