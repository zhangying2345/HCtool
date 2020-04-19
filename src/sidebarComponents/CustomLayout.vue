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

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import draggable from 'vuedraggable';

@Component({
  components: {
    draggable,
  },
})
export default class CustomLayout extends Vue {
  data() {
    return {
      value: '',
      layouts: [],
    };
  }

  blur() {
    console.log('qqq', this.value);
    const flexes = this.value.split('-');
    const layout = {
      id: 'Tcell-Id-199',
      name: 'Cell',
      attribute: 'LAYOUT',
      componentName: 'TCell',
      flexList: [],
    };
    for (const item of flexes) {
      const flexListItem = {
        widthRatio: +item,
        childrenList: [],
      };
      layout.flexList.push(flexListItem);
    }
    this.layouts.push(layout);
  }
  log(evt) {
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
