<template>
  <div class="right-side" v-if="showFlag">
    <Icon class="close" type="ios-close" v-on:click="close"/>
    <div class="header">ATTRUIBUTE</div>
  </div>
</template>

<script>
export default {
  name: 'RigthSide',
  props: {
    // showFlag: Boolean,
  },
  data() {
    return {
    }
  },
  computed: {
    showFlag () {
      console.log('6666', this.$store.state.showEleInfo);
      return this.$store.state.showEleInfo;
    }
  },
  methods: {
    close() {
      this.$state.commit('hideEleInfo');
    }
  }
}
</script>

<style lang="less" scoped>
.right-side {
  position: absolute;
  right: 0;
  top: 0;
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