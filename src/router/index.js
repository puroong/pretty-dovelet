import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/Login.vue'
import Stair from '@/components/stair/Stair.vue'

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
