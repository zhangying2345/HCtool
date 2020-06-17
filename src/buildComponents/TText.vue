<template>
  <div class="TText">
    这是一行文本
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// 行内文本
@Component
export default class TText extends Vue {}
</script>

<style>
.TText {
  font-size: 14px;
  color: #515a6e;
}
</style>
