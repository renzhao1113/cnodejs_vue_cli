import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myInfo: {}
  },
  mutations: {
    updateMyInfo (state, obj) {
      state.myInfo = obj
    }
  },
  actions: {
    updateMyInfoByAct ({commit}, obj) {
      commit('updateMyInfo', obj)
    }
  },
  getters: {
    getMyInfo (state) {
      return state.myInfo
    }
  }
})
