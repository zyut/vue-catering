import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/order',
          name: 'order',
          component: () => import(/* webpackChunkName: "about" */ './views/Order.vue')
        },
        {
          path: '/haveOrder',
          name: 'haveOrder',
          component: () => import(/* webpackChunkName: "about" */ './views/HaveOrder.vue')
        }
      ],
    },
      {
          path: '/admin',
          name: 'admin',
          component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue')
      },
      {
        path: '/',
        redirect: '/order'
      }
  ]
})
