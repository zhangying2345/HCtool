<template>
  <div class="sidebar">
    <div class="title">布局设置</div>
    <span class="sub-title">预置布局</span>
    <PrsetLayout></PrsetLayout>
    <span class="sub-title">自定义布局</span>
    <CustomLayout></CustomLayout>
    <h3>普通组件</h3>
    <NormalComponent></NormalComponent>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import draggable from 'vuedraggable';

import PrsetLayout from '../sidebarComponents/PrsetLayout';
import CustomLayout from '../sidebarComponents/CustomLayout';
import NormalComponent from '../buildComponents/NormalComponent';

@Component({
  components: {
    draggable,
    NormalComponent,
    PrsetLayout,
    CustomLayout,
  },
})
export default class Sidebar extends Vue {
  data() {
    return {
    };
  }

  add() {
    this.list.push({ name: 'Juan' });
  }
  replace() {
    this.list = [{ name: 'Edgard' }];
  }
  clone(el) {
    return {
      name: el.name + ' cloned',
    };
  }
  log(evt) {
    window.console.log(evt);
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  .title {
    font-size: 16px;
    margin: 8px 0;
    padding-left: 15px;
  }
  .sub-title {
    line-height: 48px;
    font-size: 14px;
    padding-left: 28px;
    color: #999;
  }
}
</style>
