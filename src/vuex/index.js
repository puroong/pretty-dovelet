import Vue from 'vue'
import Vuex from 'vuex'
import { Stair } from './stair.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    stair: Stair
  }
})
