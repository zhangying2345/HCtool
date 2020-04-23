<template>
  <div class="building-board">
    <draggable
      :list="buildings"
      @change="log"
      group="containerGp"
      class="drag-con"
      handle=".handle"
    >
      <div
        class="building-item"
        v-for="container in buildings"
        :key="container.id"
      >
        <div class="header">
          <div>{{ container.name }}</div>
          <div>
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
                @click="showEleInfo(container)"
              ></Button>
            </Tooltip>
            <Tooltip content="删除" placement="top">
              <Button
                shape="circle"
                icon="ios-trash-outline"
                type="text"
                @click="deleteEle(container.id)"
              ></Button>
            </Tooltip>
          </div>
        </div>

        <component
          style="height: 100%"
          :is="container.componentName"
          :flexListProp="container.flexList"
        ></component>
      </div>
      <RigthSide></RigthSide>
    </draggable>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import draggable from 'vuedraggable';

import RigthSide from './RightSide';
import TButton from '../buildComponents/TButton';
import TCell from '../buildComponents/TCell';

@Component({
  components: {
    draggable,
    TButton,
    TCell,
    RigthSide,
  },
})
export default class Building extends Vue {
  get buildings() {
    console.log('buidings', this.$store.state.buildings);
    return this.$store.state.buildings;
  }

  set buildings(value) {
    console.log('add value', value);
    this.$store.commit('addBuilding', value);
  }

  deleteEle(elementId) {
    const buildings = this.$store.state.buildings;
    const deleteEle = {
      elementId,
      parentFlex: buildings,
    };
    this.$store.commit('deleteEle', deleteEle);
  }

  showEleInfo(elementInfo) {
    this.$store.commit('showEleInfo', elementInfo);
  }

  log(evt) {
    window.console.log(evt);
    console.log('zhangying->buildings', this.buildings);
  }
}
</script>

<style scoped lang="less">
.building-board {
  background-color: wheat;
  height: 100vh;
}

.drag-con {
  height: 100%;
}

.building-item {
  position: relative;
  border: 1px solid #eee;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  margin: 10px;
  min-height: 20px;
  // padding: 5px 10px;
}

.building-item:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
  border-color: transparent;
}

.handle {
  // border: solid 1px cornflowerblue;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
