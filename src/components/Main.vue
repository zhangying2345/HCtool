<template>
  <div class="main">
    <Header class="header">tools</Header>
    <div class="main-body">
      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <Building class="content"></Building>
    </div>
    <test></test>
  </div>
</template>

<script>
import Header from './Header';
import Test from './test/TestDrag';
// import Inner from './test/Inner';
import Sidebar from './Sidebar';
import Building from './Buildiing';

export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    // Demo,
    Test,
    // Inner,
    Header,
    Sidebar,
    Building
    // TwoList
  }
};
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
      background-color: whitesmoke;
    }
    .content {
      flex: 1;
      background-color: white;
    }
  }
}
</style>
