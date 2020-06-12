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

<script>
import draggable from 'vuedraggable';
import * as Shortid from 'shortid';

export default {
  name: 'NormalComponents',
  components: {
    draggable,
  },
  data() {
    return {
      componentsList: [
        {
          id: Shortid.generate(),
          name: 'Button',
          attribute: 'COMPONENT',
          componentName: 'TButton',
          styleInfo: {
            name: 'test',
            style: {},
          }
        }
      ]
    };
  }
};
</script>

<style></style>
