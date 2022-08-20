import { defineStore } from 'pinia'

const usePiniaStore = defineStore('main', {
  state: () => ({
    name: 'pinia name'
  }),
  getters: {
    doubleCount(state) {
      return state.name + ' double'
    }
  },
  actions: {
    increment() {
      this.name = this.name + 1
    }
  }
})

export default usePiniaStore