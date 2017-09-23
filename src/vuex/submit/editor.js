import { APIv1 } from '@/commons/api.js'

export const Editor = {
  namespaced: true,
  state: {
    resultHtml: '',
    showResult: false
  },
  getters: {
    resultHtml: function (state) {
      return state.resultHtml
    },
    showResult: function (state) {
      return state.showResult
    }
  },
  mutations: {
    resultHtml: function (state, data) {
      state.resultHtml = data
    },
    showResult: function (state, data) {
      state.showResult = data
    }
  },
  actions: {
    submit: function ({ commit }, payload) {
      APIv1.post('submit', payload)
      .then(response => {
        commit('resultHtml', response.data.submit)
        commit('showResult', true)
      })
    }
  }
}
