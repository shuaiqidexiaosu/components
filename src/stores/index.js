// import { defineStore } from 'pinia'

// export const userStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     username:''
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2,
//   },
//   actions: {
//     increment() {
//       this.counter++
//     },
//     setAuth(value) {
//       this.isAuth = value
//     },
//   },
// })

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    count: 0,
    tags: [{ name: '主页', type: 'plain', url_name: 'home' }],
  },
  getters: {},
  mutations: {
    setUsername(state, username) {
      state.username = username
    },
    addTags(state, tag_name, url_name) {
      state.tags.push({
        name: tag_name,
        type: 'plain',
        url_name: url_name,
      })
    },
    removeTag(state, name) {
      for (let tag in state.tags) {
        if (tag.name === name) {
          state.tags.splice(state.tags.indexOf(tag), 1)
        }
      }
    },
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
})
