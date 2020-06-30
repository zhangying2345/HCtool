<template>
  <div class="main">
    <Header class="header">tools</Header>
    <div class="main-body">
      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <Building class="content"></Building>
    </div>
    <!-- <test></test> -->
  </div>
</template>

<script>
// https://juejin.im/post/5e8e8d5a6fb9a03c6d3d9f42#heading-11
// https://uniapp.dcloud.net.cn/README
import Vue from 'vue';
import Component from 'vue-class-component';

import Header from '../layouts/Header';
// import Test from '../test/TestDrag';
import Sidebar from '../layouts/Sidebar';
import Building from '../layouts/Buildiing';

@Component({
  components: {
    Header,
    // Test,
    Sidebar,
    Building,
  },
})
export default class Home extends Vue {

}
</script>

<style scoped lang="less">
.main {
  // border: solid 1px red;
  .main-body {
    display: flex;
    justify-content: flex-start;
    height: calc(100vh - 30px);
    margin-top: 65px;

    .sidebar {
      width: 30vw;
      background-color: white;
    }
    .content {
      flex: 1;
      background: linear-gradient(-90deg,rgba(0,0,0,.02) 1px,transparent 0),linear-gradient(rgba(0,0,0,.02) 1px,transparent 0),linear-gradient(-90deg,rgba(0,0,0,.03) 1px,transparent 0),linear-gradient(rgba(0,0,0,.03) 1px,transparent 0),linear-gradient(transparent 4px,#f5f5f5 0,#f5f5f5 97px,transparent 0),linear-gradient(-90deg,#e5e5e5 1px,transparent 0),linear-gradient(-90deg,transparent 4px,#f5f5f5 0,#f5f5f5 97px,transparent 0),linear-gradient(#e5e5e5 1px,transparent 0),#f5f5f5;
    }
  }
}
</style>
