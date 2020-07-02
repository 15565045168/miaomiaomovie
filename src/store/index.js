import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isshow:true,
    data:'北京',
    isloading:true,
  },
  mutations: {
    hello(state,data){
     state.isshow=data

    },
    huan(state,data){
      state.data=data
    },
    gailoading(state,data){
      state.isloading=data
    }
  },
  actions: {
  },
  modules: {
  }
})
