// 普通组件
<template>
  <div>
    <draggable
      :list="componentsList"
      :group="{ name: 'containerGp', pull: 'clone', put: false }"
      class="list-group-item"
    >
      <div class="list-group-item" v-for="ele in componentsList" :key="ele.id">
        {{ ele.name }}
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import draggable from 'vuedraggable';
import { BuildingIfs } from '@ifs/entity';
import * as Shortid from 'shortid';

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
    },
  ];
}
</script>

<style></style>
