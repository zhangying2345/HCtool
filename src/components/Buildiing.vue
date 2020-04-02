<template>
  <div class="building-board">
    <draggable
      :list="containers"
      @change="log"
      group="containerGp"
      class="drag-con"
      handle=".handle"
    >
      <div
        class="building-item"
        v-for="container in containers"
        :key="container.id"
      >
        <div class="header">
          <div>{{ container.name }}</div>
          <div>
            <!-- <span class="handle"> 拖动</span>
            <span class=""> 拖动</span>
            <span class=""> 拖动</span> -->
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
              ></Button>
            </Tooltip>
            <Tooltip content="删除" placement="top">
              <Button
                shape="circle"
                icon="ios-trash-outline"
                type="text"
              ></Button>
            </Tooltip>
          </div>
        </div>

        <component
          style="height: 100%"
          :is="container.componentName"
          :flexList="container.flexList"
        ></component>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

import TButton from '../widget/TButton';
import TCell from '../widget/TCell';

export default {
  name: 'building-board',
  components: {
    draggable,

    TButton,
    TCell
  },
  // props: ['containers'],
  data() {
    return {
      containers: []
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
      console.log('zhangying->containers', this.containers);
    }
  }
};
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
