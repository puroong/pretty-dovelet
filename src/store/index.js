import Vue from 'vue'
import Vuex from 'vuex'

import User from '@/store/user.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: User
  }
})
