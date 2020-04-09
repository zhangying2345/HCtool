import Vuex from 'vuex'
import Vue from 'vue'

 Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 右侧显示element info
    showEleInfo: false,
    // 存放拖放的所有元素
    buildings: []
  },
  mutations: {
    showEleInfo(state) {
      console.log('zzzzzzzz');
      state.showEleInfo = true;
    },
    hideEleInfo(state) {
      state.showEleInfo = false;
    },
    addBuilding (state, addItem) {
      state.buildings.push(addItem);
    }
  }
})

export default store;