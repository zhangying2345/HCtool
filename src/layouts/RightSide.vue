/* eslint-disable vue/no-parsing-error */
<template>
  <div class="right-side" v-if="showFlag">
    <a class="close-btn">
      <Icon class="close" type="ios-close" @click="close" />
    </a>
    <Divider orientation="center">元素属性</Divider>

    <Form ref="formCustom" :model="formCustom" :label-width="80">
      <FormItem v-if="modifyAttrCtl.canModifyFlex" label="flexDirection" prop="flex-direction">
        <Select v-model="formCustom['flex-direction']" placeholder="Select flexDirection">
          <Option value="row">row</Option>
          <Option value="column">column</Option>
          <Option value="row-reverse">row-reverse</Option>
          <Option value="column-reverse">column-reverse</Option>
        </Select>
      </FormItem>
      <FormItem v-if="modifyAttrCtl.canModifyFlex" label="FxLayoutAlign">
        <Row>
          <Col span="11">
            <FormItem prop="justify-content">
              <Select
                v-model="formCustom['justify-content']"
                placeholder="Select mainAxis"
              >
                <Option value="start">start</Option>
                <Option value="center">center</Option>
                <Option value="end">end</Option>
                <Option value="space-around">space-around</Option>
                <Option value="space-between">space-between</Option>
                <Option value="space-evenly">space-evenly</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <FormItem prop="align-items">
              <Select
                v-model="formCustom['align-items']"
                placeholder="Select crossAxis"
              >
                <Option value="start">start</Option>
                <Option value="center">center</Option>
                <Option value="end">end</Option>
                <Option value="stretch">stretch</Option>
                <Option value="space-between">space-between</Option>
                <Option value="space-around">space-around</Option>
                <Option value="baseline">baseline</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="FontSize" prop="font-size">
        <Input type="text" v-model="formCustom['font-size']"></Input>
      </FormItem>
      <FormItem label="Color" prop="color">
        <Input type="text" v-model="formCustom.color"></Input>
      </FormItem>
      <FormItem label="Background" prop="background">
        <Input type="text" v-model="formCustom.background"></Input>
      </FormItem>
      <FormItem label="Width" prop="width">
        <Input type="text" v-model="formCustom.width"></Input>
      </FormItem>
      <FormItem label="Height" prop="height">
        <Input type="text" v-model="formCustom.height"></Input>
      </FormItem>
      <FormItem label="Margin" prop="margin">
        <Input type="text" v-model="formCustom.margin"></Input>
      </FormItem>
      <FormItem label="Padding" prop="padding">
        <Input type="text" v-model="formCustom.padding"></Input>
      </FormItem>
      <FormItem label="Border" prop="border">
        <Input type="text" v-model="formCustom.border"></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import * as _ from 'lodash';
import Tool from '../tools/common';
import { BuildingIfs } from '../store/Entity';

@Component({
  watch: {
    formCustom: {
      handler(newValue: any) {
        const selectedEleInfo = this.$store.state.selectedEleInfo;
        const buildings: BuildingIfs[] = this.$store.state.buildings;

        selectedEleInfo.styleInfo.style = newValue;
        Tool.getEleById(selectedEleInfo.id, buildings, newValue);
      },
      deep: true
    }
  }
})
export default class RigthSide extends Vue {

  formCustom = this.initFormCustom;
  modifyAttrCtl = {
    canModifyFlex: false
  };

  get showFlag() {
    const flag = this.$store.state.showEleInfo;
    if (flag) {
      this.formCustom = this.$store.state.selectedEleInfo.styleInfo.style;
      this.modifyAttrCtl = this.$store.state.selectedEleInfo.modifyAttrCtl || {
        canModifyFlex: false
      };

    }
    return flag;
  }

  close() {
    console.log(JSON.stringify(this.$store.state.buildings));
    this.$store.commit('hideEleInfo');
  }

  get initFormCustom() {
    return {
      display: 'flex',
      ['flex-direction']: '',
      ['justify-content']: '',
      ['align-items']: '',

      ['font-size']: '',
      color: '',
      background: '',
      width: '',
      height: '',
      margin: '',
      padding: '',
      border: '',
    };
  }
}
</script>

<style lang="less" scoped>
.right-side {
  position: absolute;
  z-index: 902;
  right: 0;
  top: 0;
  width: 400px;
  height: 100%;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  position: absolute;
  overflow: auto;
  border: 0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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

.close-btn {
  z-index: 1;
  font-size: 12px;
  position: absolute;
  right: 8px;
  top: 8px;
  overflow: hidden;
  cursor: pointer;
}

.close {
  font-size: 31px;
  color: #999;
  transition: color 0.2s ease;
  position: relative;
  top: 1px;
}
</style>
