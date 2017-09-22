export const Navigation = {
  namespaced: true,
  state: {
    active: 'stair'
  },
  getters: {
    active: function (state) {
      return state.active
    }
  },
  mutations: {
    active: function (state, data) {
      state.active = data
    }
  }
}
