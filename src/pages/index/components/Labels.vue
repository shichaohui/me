<template>
  <div class="labels">
    <span v-for="label in labelList" :key="label" class="label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
// 标签信息
import { labelList } from '@/datas/profile'
</script>

<style scoped lang="scss">
.labels {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .label {
    display: block;
    font-size: 14px;
    line-height: 24px;
    background-color: seashell;
    border-radius: 20px;
    padding: 0 10px;
    margin: 15px 5px 0;
    white-space: nowrap;
    box-shadow: 0 0 2px black inset;
  }
}
</style>
