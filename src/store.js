import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    settingModal: false,
    showSelectName: false,
    girls: [],
    boys: [],
    title: ''
  },
  getters: {
  },
  mutations: {
    openSettingModal (state) {
      state.settingModal = true
    },
    closeSettingModal (state) {
      state.settingModal = false
    },
    girls (state, girls) {
      state.girls = girls
    },
    boys (state, boys) {
      state.boys = boys
    },
    title (state, title) {
      state.title = title
    },
    showSelectName (state, showSelectName) {
      state.showSelectName = showSelectName
    }
  },
  actions: {
  }
})
