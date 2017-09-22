import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/spa/login/index.vue'
import Stair from '@/spa/stair/index.vue'

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
    }
  ]
})
