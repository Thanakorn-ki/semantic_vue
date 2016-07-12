import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
const state = {
  // When the app starts, count is set to 0
  count: 1
}

const mutations = {
  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  INCREMENT (state, status) {
    state.count = status
  }
}
export default new Vuex.Store({
  state,
  mutations
})
