<template>
  <div class="layouts">
    <div class="left">
      <div class="layout">
        <div class="square">1</div>
      </div>
      <div class="layout">
        <div class="square">1</div>
        <div class="square">1</div>
      </div>
      <div class="layout">
        <div class="square">1</div>
        <div class="square">1</div>
        <div class="square">1</div>
      </div>
    </div>
    <div class="right">
      <draggable
        :list="layouts"
        @change="log"
        :group="{ name: 'containerGp', pull: 'clone', put: false }"
        :clone="cloneFun"
        class="list-group-item"
      >
        <div class="container-item" v-for="layout in layouts" :key="layout.id">
          <Button type="primary" shape="circle" icon="ios-hand">拖动</Button>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import draggable from 'vuedraggable';

import * as Shortid from 'shortid';
import * as _ from 'lodash';

@Component({
  components: {
    draggable,
  },
})
export default class PresetLayout extends Vue {
  data() {
    return {
      layouts: [
        {
          id: 'TCell-Id-100',
          name: 'Cell',
          attribute: 'LAYOUT',
          componentName: 'TCell',
          styleInfo: {
            name: 'test',
            style: {
              display: 'flex'
            }
          },
          flexList: [
            {
              widthRatio: 1,
              childrenList: [],
            },
          ],
          modifyAttrCtl: {
            canModifyFlex: true
          }
        },
        {
          id: 'TCell-Id-101',
          name: 'Cell',
          attribute: 'LAYOUT',
          componentName: 'TCell',
          styleInfo: {
            name: 'test',
            style: {
              display: 'flex'
            }
          },
          flexList: [
            {
              widthRatio: 1,
              childrenList: [],
            },
            {
              widthRatio: 1,
              childrenList: [],
            },
          ],
        },
        {
          id: 'TCell-Id-102',
          name: 'Cell',
          attribute: 'LAYOUT',
          componentName: 'TCell',
          styleInfo: {
            name: 'test',
            style: {
              display: 'flex'
            }
          },
          flexList: [
            {
              widthRatio: 1,
              childrenList: [],
            },
            {
              widthRatio: 1,
              childrenList: [],
            },
            {
              widthRatio: 1,
              childrenList: [],
            },
          ],
        },
      ],
    };
  }

  cloneFun(el) {
    const tempId = Shortid.generate();
    const cloneEl = _.cloneDeep({
      id: tempId,
      name: el.name,
      attribute: el.attribute,
      componentName: el.componentName,
      flexList: el.flexList,
      styleInfo: el.styleInfo,
      modifyAttrCtl: el.modifyAttrCtl
    });
    return cloneEl;
  }

  log(evt) {
    window.console.log(evt);
  }
}
</script>

<style lang="less" scoped>
.layouts {
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
  color: #515a16;

  .ivu-btn {
    margin: 5px 0;
  }

  .left {
    width: 70%;
  }

  .layout {
    display: flex;

    justify-content: center;
    align-items: center;
    margin: 6px;
    border: 1px solid #abdcff;
    background-color: #f0faff;
    height: 35px;
  }
  .square {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
    flex: 1;
    background-color: #fbebeb;
    height: calc(100% - 8px);
  }
}
</style>
