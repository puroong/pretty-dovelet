import { APIv1 } from '@/util/api.js'

export default {
  namespaced: true,
  state: {
    problems: []
  },
  getters: {
    problems (state) {
      return state.problems
    }
  },
  mutations: {
    problems (state, items) {
      state.problems = items
    }
  },
  actions: {
    fetchProblems ({commit}, stairNum) {
      APIv1.get(`v1/stair/${stairNum}`)
      .then(response => {
        commit('problems', response.data.problems)
      })
      .catch(error => {
        console.error(error)
      })
    }
  }
}
