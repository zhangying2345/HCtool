<template>
  <div class="header">
    <div class="wraper">
      <a class="logo-con">
        <img class="logo" src="../assets/mylogo.svg" alt="" />
        <h4>HC-tool</h4>
      </a>
      <div class="header-nav-list">
        <a class="nav-item">编辑</a>
        <a class="nav-item">开发</a>
        <a class="nav-item">预览</a>
        <a class="nav-item">下载</a>
        <a class="nav-item">清空</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-header'
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  line-height: 65px;
  z-index: 901;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  background: #fff;
  color: #515a6e;
  font-size: 14px;
  box-sizing: border-box;

  .wraper {
    width: 95%;
    height: 65px;
    margin: 0 auto;
    .logo-con {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 35px;
      margin-top: 12px;
      float: left;

      h4 {
        font-size: 24px;
        margin-left: 6px;
      }
      .logo {
        width: 35px;
        height: 35px;
      }
    }

    .header-nav-list {
      height: inherit;
      float: right;

      .nav-item {
        height: inherit;
        line-height: inherit;
        border-bottom: 2px solid transparent;
        color: #515a6e;
        float: left;
        padding: 0 20px;
        position: relative;
        cursor: pointer;
        z-index: 3;
        transition: all 0.2s ease-in-out;
      }
    }
  }
}
</style>
