import Vue from 'vue'
import Vuex from 'vuex'

import User from '@/store/user.js'
import Stair from '@/store/stair.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: User,
    stair: Stair
  }
})
