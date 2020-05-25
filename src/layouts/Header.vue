<template>
  <div class="header">
    <div class="wraper">
      <a class="logo-con">
        <img class="logo" src="../assets/mylogo.svg" alt="" />
        <h4>HC-tool</h4>
      </a>
      <div class="header-nav-list">
        <Menu mode="horizontal" active-name="1">
          <MenuItem name="1">
            <Icon type="ios-paper" />
            编辑
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-construct" />
            开发
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-eye" />
            预览
          </MenuItem>
          <Submenu name="4">
            <template slot="title">
              <Icon type="md-cloud-download" />
              下载
            </template>
            <MenuItem name="4-1" @click.native="getH5Code">H5</MenuItem>
            <MenuItem name="4-2">小程序</MenuItem>
          </Submenu>
          <MenuItem name="5">
            <Icon type="md-trash" />
            清空
          </MenuItem>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

import { renderHtml } from '../store/templates';

@Component
export default class Header extends Vue {

  getH5Code() {
    const sourceCodeObj = this.$store.state.buildings;
    const generateCode = renderHtml(sourceCodeObj);
    console.log('generateCode', generateCode);
  }
}
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
