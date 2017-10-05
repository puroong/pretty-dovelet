import { APIv1 } from '@/util/api.js'

export default {
  namespaced: true,
  state: {
    isLoggedIn: false
  },
  getters: {
    isLoggedIn (state) {
      return state.isLoggedIn
    }
  },
  mutations: {
    isLoggedIn (state, data) {
      state.isLoggedIn = data
    }
  },
  actions: {
    login ({ commit }, payload) {
      APIv1.post('/v1/login', payload)
      .then(response => {
        var { success, cookies } = response.data

        if (success) {
          localStorage.setItem('PHPSESSID', cookies.PHPSESSID)
          localStorage.setItem('member_id', cookies.member_id)
          localStorage.setItem('member_passwd', cookies.member_passwd)
          localStorage.setItem('member_sid', cookies.member_sid)

          commit('isLoggedIn', true)
        } else {
          commit('isLoggedIn', false)
        }
      })
    },
    logout ({ commit }) {
      APIv1.get('/v1/logout')
      .then(response => {
        commit('isLoggedIn', false)
      })
    }
  }
}
