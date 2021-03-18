<template>
  <div class="labels">
    <span v-for="label in labelList" :key="label" class="label">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { labelList } from '@/datas/profile'

export default defineComponent({
  setup() {
    return {
      labelList: [...labelList]
    }
  }
})
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
    background-color: seashell;
    border-radius: 20px;
    padding: 2px 8px 1px;
    margin: 15px 5px 0;
    white-space: nowrap;
    box-shadow: 0 0 2px black inset;
  }
}
</style>
