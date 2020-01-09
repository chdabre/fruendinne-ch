import Vue from 'vue'
import Vuex from 'vuex'
import router, { routeTo } from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windows: []
  },
  mutations: {
    addWindow (state, payload) {
      state.windows.push({
        component: payload,
        focused: true
      })
    },
    removeWindow (state, payload) {
      state.windows.splice(payload, 1)
    },
    focusWindow (state, payload) {
      state.windows.forEach(w => { w.focused = false })
      state.windows[payload].focused = true
    }
  },
  actions: {
    openWindow ({ state, commit, dispatch }, options) {
      const existingWindow = state.windows.find(c => c.component === options.to)
      if (existingWindow) {
        const windowIndex = state.windows.indexOf(existingWindow)
        if (typeof options.avoidRouter === 'undefined' && !existingWindow.focused) routeTo(existingWindow.component)
        commit('focusWindow', windowIndex)
        // dispatch('focusWindow', existingWindow.component)
      } else {
        commit('addWindow', options.to)
      }
    },
    closeWindow ({ state, commit }, component) {
      const existingWindow = state.windows.find(c => c.component === component)
      const windowIndex = state.windows.indexOf(existingWindow)
      if (windowIndex > -1) {
        commit('removeWindow', windowIndex)
        if (windowIndex > 1) routeTo(state.windows[0].component)
        else router.push('/')
      }
    }
  },
  modules: {
  }
})
