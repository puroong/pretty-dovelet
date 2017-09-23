import Vue from 'vue'
import Vuex from 'vuex'
import { Stair } from './stair.js'
import { Navigation } from './navigation.js'
import { Submit } from './submit'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    stair: Stair,
    navigation: Navigation,
    submit: Submit
  }
})
