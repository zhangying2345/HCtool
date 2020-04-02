<template>
  <div class="right-side" v-if="showFlag">
    <Icon class="close" type="ios-close" @click="close"/>
    <div class="header">ATTRUIBUTE</div>
  </div>
</template>

<script>
export default {
  name: 'RigthSide',
  props: {
    showFlag: Boolean,
  },
  data() {
    return {
    }
  },
  methods: {
    close() {
      this.showFlag = false;
    }
  }
}
</script>

<style lang="less" scoped>
.right-side {
  position: absolute;
  right: 0;
  width: 300px;
  height: calc(100% - 51px);
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  position: absolute;
  overflow: auto;
  border: solid 1px red;
}

.header {
  width: 100%;
  height: 40px;
  display: table;
  white-space: nowrap;
  text-align: center;
  background: 0 0;
  font-weight: 500;
  color: #17233d;
  font-size: 16px;
  margin: 16px 0;
}
.close {
  float: right;
}
</style>