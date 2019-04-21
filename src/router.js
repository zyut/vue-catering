import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/order',
          name: 'order',
          component: () => import(/* webpackChunkName: "about" */ './views/Order.vue')
        },
        {
          path: '/haveorder',
          name: 'haveOrder',
          component: () => import(/* webpackChunkName: "about" */ './views/HaveOrder.vue')
        }
      ]
    }
  ]
})
