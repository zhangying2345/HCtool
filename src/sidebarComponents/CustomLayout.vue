<template>
  <div class="cus-layout">
    <Input
      v-model="value"
      @on-blur="blur"
      placeholder="布局比例：1-2-1"
      style="width: 300px"
    />
    <!-- <Button type="primary" shape="circle" icon="ios-hand">拖动</Button> -->

    <draggable
      :list="layouts"
      @change="log"
      :group="{ name: 'containerGp', pull: 'clone', put: false }"
      class="list-group-item"
    >
      <div class="container-item" v-for="layout in layouts" :key="layout.id">
        <Button type="primary" shape="circle" icon="ios-hand">拖动</Button>
      </div>
    </draggable>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import draggable from 'vuedraggable';
import { FlexIfs, BuildingIfs } from '@ifs/entity';

@Component({
  components: {
    draggable,
  },
})
export default class CustomLayout extends Vue {
  public value = '';
  public layouts: BuildingIfs[] = [];

  public blur() {
    const flexes = this.value.split('-');
    const layout: BuildingIfs = {
      id: 'Tcell-Id-199',
      name: 'Cell',
      attribute: 'LAYOUT',
      componentName: 'TCell',
      styleInfo: {
        name: 'test',
        style: {},
      },
      flexList: [],
      modifyAttrCtl: {},
    };
    for (const item of flexes) {
      const flexListItem: FlexIfs = {
        widthRatio: +item,
        childrenList: [],
      };
      layout.flexList.push(flexListItem);
    }
    this.layouts.push(layout);
  }
  public log(evt: any) {
    window.console.log(evt);
  }
}
</script>

<style lang="less" scoped>
.cus-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
