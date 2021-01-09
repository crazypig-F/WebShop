import { createStore } from 'vuex'

export default createStore({
  state: {
    select_goods: {},
    select_category: ""
  },
  mutations: {
    set_select_goods(state, goods){
      state.select_goods = goods
    },
    set_select_category(state, category){
      state.select_category = category
    }
  },
  actions: {
  },
  modules: {
  }
})
