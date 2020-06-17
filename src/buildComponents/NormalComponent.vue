// 普通组件
<template>
  <div>
    <draggable
      :list="componentsList"
      :group="{ name: 'containerGp', pull: 'clone', put: false }"
      :clone="cloneFun"
      class="list-group-item"
    >
      <div class="component-item" v-for="ele in componentsList" :key="ele.id">
        {{ ele.name }}
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as Shortid from 'shortid';
import * as _ from 'lodash';
import Component from 'vue-class-component';
import draggable from 'vuedraggable';
import { BuildingIfs } from '@ifs/entity';

@Component({
  components: {
    draggable,
  },
})
export default class NormalComponents extends Vue {
  componentsList: BuildingIfs[] = [
    {
      id: Shortid.generate(),
      name: 'Button',
      attribute: 'COMPONENT',
      componentName: 'TButton',
      styleInfo: {
        name: 'test',
        style: {},
      },
      flexList: []
    },
    {
      id: Shortid.generate(),
      name: 'Span',
      attribute: 'COMPONENT',
      componentName: 'TText',
      styleInfo: {
        name: 'test',
        style: {},
      },
      flexList: []
    },
  ];

  cloneFun(el: BuildingIfs) {
    const tempId = Shortid.generate();
    const cloneEl = _.cloneDeep({
      // css class name不能以数字开头
      id: `t${tempId}`,
      name: el.name,
      attribute: el.attribute,
      componentName: el.componentName,
      flexList: el.flexList,
      styleInfo: el.styleInfo
    });
    return cloneEl;
  }
}
</script>

<style>
.component-item {
  cursor: pointer;
}
</style>
