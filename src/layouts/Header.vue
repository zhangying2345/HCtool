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
          <MenuItem name="3" @click.native="preview">
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
          <MenuItem name="5" @click.native="clear">
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
      <div><textarea ref="textAreaRef" class="textArea" v-model="allCode"></textarea></div>
    </Modal>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import * as format from 'xml-formatter';
import { BuildingIfs } from '../store/Entity';
import { renderHtml } from '../store/templates';

interface TempStyles {
  id: string;
  style: any;
}

@Component
export default class Header extends Vue {

  showCode = false;
  htmlCode = '';
  cssCode = '';

  get allCode() {
    return this.htmlCode + '\n' + this.cssCode;
  }

  ok() {
    const input = this.$refs.textAreaRef as HTMLInputElement;
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      console.log('复制成功');
    }
    this.$Message.info('已复制到剪切板');
  }

  getH5Code() {
    this.showCode = true;
    const sourceCodeObj: BuildingIfs[] = this.$store.state.buildings;
    console.log(JSON.stringify(this.$store.state.buildings));
    const generateCode = renderHtml(sourceCodeObj);
    const formattedXml = format(`<div>${generateCode}</div>`);
    console.log('formattedXml\n', formattedXml);
    this.htmlCode = formattedXml;
    // console.log('generateCode', generateCode);
    this.getCssCode();
  }

  getCssCode() {
    const sourceCodeObj: BuildingIfs[] = this.$store.state.buildings;
    const styleInfoArray: TempStyles[] = [];
    this.cssCode = this.flatMap(sourceCodeObj, styleInfoArray);
    console.log('zhangying->css\n', this.cssCode);
  }

  // 解析数据信息，打平样式
  flatMap(buildings: BuildingIfs[], styleInfoArray: TempStyles[]): string {
    for (const item of buildings) {
      // 提取容器的styleInfo样式
      if (!this.isEmptyObject(item.styleInfo.style)) {
        const styleInfo = {
          id: item.id,
          style: item.styleInfo.style
        };
        styleInfoArray.push(styleInfo);
      }
      /**
       * 如果容器中有>=2个子元素
       * 提取容器的flexList布局，给每一项赋flex样式
       * 其中样式的id是 item.id-${当前flexList的index}
       */
      if (item.flexList.length > 1) {
        for (let i = 0, len = item.flexList.length; i < len; i++) {
          const subItem = item.flexList[i];
          const subFlexStyle = {
            id: `${item.id}_${i}`,
            style: {
              flex: `${subItem.widthRatio} 0 auto`
            }
          };
          styleInfoArray.push(subFlexStyle);
        }
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
  formatCss(styleInfoArray: TempStyles[]): string {
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
  CSSdecode(code: string): string {
    code = code.replace(/,/ig, ';');
    code = code.replace(/"/ig, '');

    code = code.replace(/(\s){2,}/ig, '$1');
    code = code.replace(/(\S)\s*\{/ig, '$1 {');
    code = code.replace(/\*\/(.[^}{]*)}/ig, '*/\n$1}');
    code = code.replace(/\/\*/ig, '\n/*');
    code = code.replace(/;\s*(\S)/ig, ';\n\t$1');
    code = code.replace(/\}\s*(\S)/ig, '}\n$1');
    code = code.replace(/\n\s*\}/ig, '\n}');
    code = code.replace(/\{\s*(\S)/ig, '{\n\t$1');
    code = code.replace(/(\S)\s*\*\//ig, '$1*/');
    code = code.replace(/\*\/\s*([^}{]\S)/ig, '*/\n\t$1');
    code = code.replace(/(\S)\}/ig, '$1\n}');
    code = code.replace(/(\n){2,}/ig, '\n');
    code = code.replace(/:/ig, ':');
    code = code.replace(/  /ig, ' ');
    return code;
  }

  isEmptyObject(obj: any) {
    return JSON.stringify(obj) === '{}';
  }

  // 点击预览
  preview() {
    this.getH5Code();
    this.showCode = false;
    const n = `${this.htmlCode}<style>${this.cssCode}<style/>`;
    if (n) {
      const r = window.open('', '', '');
      if (r) {
        r.opener = null;
        r.document.write(n);
        r.document.close();
      }
    }
  }

  // 清空
  clear() {
    this.$store.commit('clearStore');
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
