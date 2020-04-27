/* eslint-disable vue/no-parsing-error */
<template>
  <div class="right-side" v-if="showFlag">
    <a class="close-btn">
      <Icon class="close" type="ios-close" @click="close" />
    </a>
    <Divider orientation="center">元素属性</Divider>

    <Form ref="formCustom" :model="formCustom" :label-width="80">
      <FormItem label="fxLayout" prop="fxLayout">
        <Select v-model="formCustom.fxLayout" placeholder="Select fxLayout">
          <Option value="row">row</Option>
          <Option value="column">column</Option>
          <Option value="row-reverse">row-reverse</Option>
          <Option value="column-reverse">column-reverse</Option>
        </Select>
      </FormItem>
      <FormItem label="FxLayoutAlign">
        <Row>
          <Col span="11">
            <FormItem prop="mainAxis">
              <Select
                v-model="formCustom.mainAxis"
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
            <FormItem prop="crossAxis">
              <Select
                v-model="formCustom.crossAxis"
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
      <FormItem label="FontSize" prop="fontSize">
        <Input type="text" v-model="formCustom.fontSize"></Input>
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

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import * as _ from 'lodash';

@Component({
  watch: {
    formCustom: {
      handler: function(newValue) {
        this.$store.state.selectedEleInfo
        currentEleInfo = _.cloneDeep(newValue);
        console.log('selectedEleInfo', this.$store.state.selectedEleInfo);
        console.log('selectedEleInfo watch buildings', this.$store.state.buildings);
        // 根据Id，递归树 替换元素
        const currentId = currentEleInfo.id;
        const buidlings = this.$store.state.buildings;
        for (let item of buidlings) {
          if (item.id === currentId) {
            item = currentEleInfo;
          }
        }
      },
      deep: true
    }
  }
})
export default class RigthSide extends Vue {

  data() {
    return {
      formCustom: {
        fxLayout: '',
        mainAxis: '',
        crossAxis: '',

        fontSize: '',
        color: '',
        background: '',
        width: '',
        height: '',
        margin: '',
        padding: '',
        border: '',
      },
    };
  }

  get showFlag() {
    return this.$store.state.showEleInfo;
  }

  get selectedEleInfo() {
    return this.$store.state.selectedEleInfo;
  }

  close() {
    this.$store.commit('hideEleInfo');
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
