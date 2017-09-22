import { APIv1 } from '@/commons/api.js'

export const Stair = {
  namespaced: true,
  state: {
    problems: []
  },
  getters: {
    problems: function (state) {
      return state.problems
    }
  },
  mutations: {
    problems: function (state, items) {
      state.problems = items
    }
  },
  actions: {
    fetchProblems: function ({ commit }, stairNum) {
      commit('problems', [])

      APIv1.get(`stair/${stairNum}`)
      .then(response => {
        commit('problems', response.data.stair)
      })
    }
  }
}
