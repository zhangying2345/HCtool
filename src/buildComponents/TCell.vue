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
                  @click="showEleInfo(subFlex)"
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
          <component
          :is="subFlex.componentName"
          :flexListProp="subFlex.flexList"></component>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import draggable from 'vuedraggable';
import { BuildingIfs, FlexIfs } from '@ifs/entity';

import TButton from './TButton.vue';
import TText from './TText.vue';

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
    TText
  },
})
export default class TCell extends TCellProps {
  cmpList = [];

  get flexList() {
    return this.flexListProp;
  }

  showEleInfo(elementInfo: BuildingIfs) {
    this.$store.commit('showEleInfo', elementInfo);
  }

  log(evt: any) {
    window.console.log('Current Cell', evt);
  }

  getFlexWid(widthRatio: number, flexList: FlexIfs[]) {
    let sum = 0;
    for (const item of flexList) {
      sum += item.widthRatio;
    }
    const widPercent = (widthRatio / sum) * 100 + '%';
    return `calc(${widPercent} - 5px)`;
    // return (widthRatio / sum) * 100 + '%';
  }

  chooseCurrent(evt: any) {
    console.log('zhangying->111111', evt);
  }

  deleteEle(elementId: string) {
    const buildings: BuildingIfs[] = this.$store.state.buildings;
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
  background: white;
  border: 1px solid #eee;
}

.Tcell-item:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
  border-color: transparent;
}
</style>
