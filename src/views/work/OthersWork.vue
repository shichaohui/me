<!-- 其他作品 -->
<script setup lang="ts">
import { others } from '@/datas/work/others'
</script>

<template>
  <div
    v-for="work in others"
    :key="work.id"
    class="mb-6 bg-(--el-bg-color) border border-(--el-border-color) rounded-lg shadow-2xs p-2"
  >
    <div class="flex items-center flex-wrap gap-x-2">
      <div class="text-base font-bold">{{ work.name }}</div>
      <div class="flex items-center gap-1">
        <el-tag v-for="item in work.types" :key="item" size="small">
          {{ item }}
        </el-tag>
      </div>
    </div>
    <div class="mt-2 whitespace-pre-line">{{ work.desc }}</div>
    <el-space wrap class="mt-2">
      <el-tag v-for="technology in work.technologyList">
        {{ technology }}
      </el-tag>
    </el-space>
  </div>
</template>

<style scoped></style>
