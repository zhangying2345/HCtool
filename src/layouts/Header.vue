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

    <Modal
      v-model="showCode"
      title="生成代码"
      ok-text="复制"
      cancel-text="取消"
      @on-ok="ok">
      <!-- <div>{{htmlCode}}</div> -->
      <div><textarea ref="textAreaRef" class="textArea" v-model="allCode"></textarea></div>
      <!-- <div><textarea class="textArea" v-model="cssCode"></textarea></div> -->
      
      <!-- <textarea v-model="cssCode"></textarea> -->
    </Modal>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import * as format from 'xml-formatter';

import { renderHtml } from '../store/templates';

@Component
export default class Header extends Vue {

  data() {
    return {
      showCode: false,
      htmlCode: '',
      cssCode: '',
    }
  }

  get allCode() {
    return this.htmlCode + '\n' + this.cssCode;
  }

  ok() {
    const input = this.$refs.textAreaRef;
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      console.log('复制成功');
    }
    this.$Message.info('已复制到剪切板');
  }

  getH5Code() {
    this.showCode = true;
    const sourceCodeObj = this.$store.state.buildings;
    const generateCode = renderHtml(sourceCodeObj);
    const formattedXml = format(`<root>${generateCode}</root>`);
    console.log('formattedXml\n', formattedXml);
    this.htmlCode = formattedXml;
    // console.log('generateCode', generateCode);
    this.getCssCode();
  }

  getCssCode() {
    const sourceCodeObj = this.$store.state.buildings;
    let styleInfoArray = [];
    styleInfoArray = this.flatMap(sourceCodeObj, styleInfoArray);
    this.cssCode = styleInfoArray;
    console.log('zhangying->css\n', styleInfoArray);

  }

  // 解析数据信息，打平样式
  flatMap(buildings, styleInfoArray) {
    for(const item of buildings) {
      console.log('eeeeeeee');
      if (!this.isEmptyObject(item.styleInfo.style)) {
        const styleInfo = {
          id: item.id,
          style: item.styleInfo.style
        };
        styleInfoArray.push(styleInfo);
      }
      if (item.flexList.length > 0) {
        for (const flexListItem of item.flexList) {
          if (flexListItem.childrenList.length > 0) {
            this.flatMap(flexListItem.childrenList, styleInfoArray);
          }
        }
      }
    }
    return this.formatCss(styleInfoArray);
  }

  // 格式化css样式
  formatCss(styleInfoArray) {
    let cssResult = '';
    for (const item of styleInfoArray) {
      const style = JSON.stringify(item.style);
      const tempStyleStr = `.${item.id} ${style}`;
      cssResult = cssResult + tempStyleStr;
    }
    cssResult = this.CSSdecode(cssResult);
    return cssResult;
  }

  // https://tool.lanrentuku.com/cssformat/
  CSSdecode(code) {
    // code = code.replace(/,/ig,';');
    // code = code.replace(/"/ig,'');

    code = code.replace(/(\s){2,}/ig,'$1');
    code = code.replace(/(\S)\s*\{/ig,'$1 {');
    code = code.replace(/\*\/(.[^}{]*)}/ig,'*/\n$1}');
    code = code.replace(/\/\*/ig,'\n/*');
    code = code.replace(/;\s*(\S)/ig,';\n\t$1');
    code = code.replace(/\}\s*(\S)/ig,'}\n$1');
    code = code.replace(/\n\s*\}/ig,'\n}');
    code = code.replace(/\{\s*(\S)/ig,'{\n\t$1');
    code = code.replace(/(\S)\s*\*\//ig,'$1*/');
    code = code.replace(/\*\/\s*([^}{]\S)/ig,'*/\n\t$1');
    code = code.replace(/(\S)\}/ig,'$1\n}');
    code = code.replace(/(\n){2,}/ig,'\n');
    code = code.replace(/:/ig,':');
    code = code.replace(/  /ig,' ');
    return code;
  }

  isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}';
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

.textArea {
  color: #515a6e;
  min-height: 440px;
  border: 0;
  resize: none;
  width: 100%;
}
</style>
