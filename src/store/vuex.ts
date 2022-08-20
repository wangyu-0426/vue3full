import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'vuex name'
  },
  mutations: {
    changeName(state, name) {
      state.name = name
    }
  },
  actions: {
  },
  modules: {
  }
})