<template>
  <div class="Tcell flex-contain">
    <div
      class="Tcell-con"
      v-for="(item, index) in flexList"
      :key="index"
      :style="{ width: getFlexWid(item.widthRatio, flexList) }"
    >
      <draggable
        :list="item.childrenList"
        @change="log"
        group="containerGp"
        class="drag-con"
        handle=".handle"
        @choose="chooseCurrent"
      >
        <div
          class="Tcell-item"
          v-for="subFlex in item.childrenList"
          :key="subFlex.id"
        >
          <div class="header">
            <span>{{ subFlex.name }}</span>
            <div class="">
              <Tooltip class="handle" content="拖动" placement="top">
                <Button
                  shape="circle"
                  icon="ios-hand-outline"
                  type="text"
                ></Button>
              </Tooltip>
              <Tooltip content="属性" placement="top">
                <Button
                  shape="circle"
                  icon="ios-cog-outline"
                  type="text"
                  @click="showEleInfo"
                ></Button>
              </Tooltip>
              <Tooltip content="删除" placement="top">
                <Button
                  shape="circle"
                  icon="ios-trash-outline"
                  type="text"
                  @click="deleteEle(subFlex.id)"
                ></Button>
              </Tooltip>
            </div>
          </div>
          <component v-bind:is="subFlex.componentName"></component>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import draggable from 'vuedraggable';

import TButton from './TButton';

const TCellProps = Vue.extend({
  props: {
    flexListProp: {
      type: Array,
    },
  },
});

@Component({
  components: {
    draggable,
    TButton,
  },
})
export default class TCell extends TCellProps {
  get flexList() {
    return this.flexListProp;
  }

  data() {
    return {
      cmpList: [],
    };
  }

  showEleInfo() {
    this.$store.commit('showEleInfo');
  }

  log(evt) {
    window.console.log('Current Cell', evt);
    console.log('zhangying->Tcontainers', this.cmpList);
  }

  getFlexWid(widthRatio, flexList) {
    let sum = 0;
    for (const item of flexList) {
      sum += item.widthRatio;
    }
    const widPercent = (widthRatio / sum) * 100 + '%';
    return `calc(${widPercent} - 5px)`;
    // return (widthRatio / sum) * 100 + '%';
  }

  chooseCurrent(evt) {
    console.log('zhangying->111111', evt);
  }

  deleteEle(elementId) {
    const buildings = this.$store.state.buildings;
    const deleteEle = {
      elementId,
      parentFlex: buildings,
    };
    this.$store.commit('deleteEle', deleteEle);
  }
}
</script>

<style lang="less" scoped>
.Tcell {
  width: 100%;
  height: 100%;
  // background-color: darkmagenta;
}

.flex-contain {
  // background-color: darksalmon;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drag-con {
  width: 100%;
  min-height: 40px;
  // margin: 0 10px;
  background-color: darksalmon;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Tcell-item {
}
</style>
