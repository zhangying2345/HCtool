import Vuex from 'vuex'
import Vue from 'vue'

 Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 存放拖放的所有元素
    buildings: []
  },
  mutations: {
    addBuilding (state, addItem) {
      state.buildings.push(addItem);
    }
  }
})

export default store;