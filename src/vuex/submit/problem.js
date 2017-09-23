import { APIv1 } from '@/commons/api.js'

export const Problem = {
  namespaced: true,
  state: {
    rawHtml: ''
  },
  getters: {
    rawHtml: function (state) {
      return state.rawHtml
    }
  },
  mutations: {
    rawHtml: function (state, data) {
      state.rawHtml = data
    }
  },
  actions: {
    fetchRawHtml: function ({ commit }, params) {
      APIv1.get('problem', {params: params})
      .then(response => {
        commit('rawHtml', response.data.problem)
      })
    }
  }
}
