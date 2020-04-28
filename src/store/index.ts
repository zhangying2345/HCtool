import Vue from 'vue';
import Vuex from 'vuex';
import { StoreIfs, DeleteEleIfs, BuildingIfs, FlexIfs } from './Entity';

Vue.use(Vuex);

const StoreObj: StoreIfs = {
  state: {
    showEleInfo: false,

    buildings: [],

    // 当前选择的元素的信息
    selectedEleInfo: null,
  },

  mutations: {

    // 显示元素信息
    showEleInfo(state: any, elementInfo: BuildingIfs) {
      state.showEleInfo = true;
      state.selectedEleInfo = elementInfo;
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
    deleteEle(state: any, deleteInfo: DeleteEleIfs) {
      const elementId = deleteInfo.elementId;
      const parentFlex = deleteInfo.parentFlex;
      for (let i = 0, len = parentFlex.length; i < len; i++) {
        const item = parentFlex[i];
        if (item.id === elementId) {
          parentFlex.splice(i, 1);
          return;
        }
        for (let j = 0, len2 = item.flexList.length; j < len2; j++) {
          const childItme = item.flexList[j];
          this.commit('deleteEle', {
            elementId,
            parentFlex: childItme.childrenList
          })
        }
      }
    },

  },
  actions: {},
  modules: {},
};

export default new Vuex.Store(StoreObj);
