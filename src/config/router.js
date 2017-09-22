import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/spa/login/index.vue'
import Stair from '@/spa/stair/index.vue'
import About from '@/spa/about/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/stair/:stairNum',
      name: 'stair',
      component: Stair
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
