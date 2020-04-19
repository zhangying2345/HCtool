import Vue from 'vue';
import Vuex from 'vuex';
import { StoreIfs } from './Entity';

Vue.use(Vuex);

const StoreObj: StoreIfs = {
  state: {
    showEleInfo: false,

    buildings: [],
  },
  mutations: {
    // 显示元素信息
    showEleInfo(state: any) {
      console.log(JSON.stringify(state.buildings));
      state.showEleInfo = true;
    },
    // 隐藏元素信息
    hideEleInfo(state: any) {
      state.showEleInfo = false;
    },
    // add 拖进来的容器
    addBuilding(state: any, addItem: any) {
      state.buildings.push(addItem);
    },
    // 根据Id，递归树 删除元素
    deleteEle(state: any, deleteInfo: any) {
      console.log('zhangying->', deleteInfo);
      // const elementId = deleteInfo.elementId;
      // const parentFlex = deleteInfo.parentFlex;
      // for (const item of parentFlex) {
      //   if (item.)
      // }
    },
  },
  actions: {},
  modules: {},
};

export default new Vuex.Store(StoreObj);
