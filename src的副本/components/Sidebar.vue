<template>
  <div class="sidebar">
    <div class="title">布局设置</div>
    <span class="sub-title">预置布局</span>
    <Layout></Layout>
    <span class="sub-title">自定义布局</span>
    <CustomLayout></CustomLayout>
    <draggable
      :list="layouts"
      @change="log"
      :group="{ name: 'containerGp', pull: 'clone', put: false }"
      class="list-group-item"
    >
      <div class="container-item" v-for="layout in layouts" :key="layout.id">
        {{ layout.name }}
      </div>
    </draggable>
    <h3>普通组件</h3>
    <NormalComponent></NormalComponent>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import Layout from './layouts';
import CustomLayout from './CustomLayouts';
import NormalComponent from './NormalComponent';
export default {
  name: 'Sidebar',
  components: {
    draggable,
    NormalComponent,
    Layout,
    CustomLayout
  },
  props: [],
  data() {
    return {
      layouts: [
        {
          id: 'TCell-Id-100',
          name: 'Container',
          attribute: 'COMPONENT',
          componentName: 'TCell',
          flexList: [
            {
              widthRatio: 1,
              childrenList: []
            },
            {
              widthRatio: 1,
              childrenList: []
            }
          ]
        }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: 'Juan' });
    },
    replace: function() {
      this.list = [{ name: 'Edgard' }];
    },
    clone: function(el) {
      return {
        name: el.name + ' cloned'
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
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
