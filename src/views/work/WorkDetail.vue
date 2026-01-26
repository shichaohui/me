<!-- 作品详情 -->
<script setup lang="ts">
import device from '@/utils/device'

defineProps<{
  /** 作品 */
  work: Work.Work
}>()

// 是否移动端
const isMobile = device.isMobile()
</script>

<template>
  <div class="flex items-center flex-wrap gap-x-2">
    <div class="text-lg font-bold">{{ work.name }}</div>
    <div class="flex items-center gap-1">
      <el-tag v-for="item in work.types" :key="item" size="small">
        {{ item }}
      </el-tag>
    </div>
  </div>
  <div class="mt-2 whitespace-pre-line">{{ work.desc }}</div>
  <ul class="mt-2 ml-4 list-disc">
    <li v-for="item in work.features" :key="item">{{ item }}</li>
  </ul>
  <el-space class="mt-2" spacer="|">
    <el-link type="primary" target="_blank" :href="work.codeUrl" :disabled="!work.codeUrl">
      查看源码
    </el-link>
    <el-link type="primary" target="_blank" :href="work.url" :disabled="!work.url">
      我要试用
    </el-link>
  </el-space>
  <div class="workTitle">使用技术：</div>
  <el-space wrap>
    <el-tag v-for="technology in work.technologyList">
      {{ technology }}
    </el-tag>
  </el-space>
  <div class="workTitle">作品截图：</div>
  <div class="overflow-auto -m-2 mt-2">
    <el-image
      v-for="(screenshot, index) in work.screenshotList"
      class="border border-(--el-border-color) bg-(--el-bg-color-page)/35 rounded-sm shadow-2xs"
      :class="isMobile ? 'w-full min-h-20' : 'float-left m-2 min-w-20 h-66'"
      :key="screenshot"
      :src="screenshot"
      lazy
      :preview-src-list="work.screenshotList"
      :initial-index="index"
    >
      <template #placeholder>
        <div class="flex items-center justify-center w-full h-full">loading...</div>
      </template>
    </el-image>
  </div>
</template>

<style scoped>
.workTitle {
  position: relative;
  padding: 0 0 2px 2px;
  margin: 20px 0 10px;
  font-size: var(--el-font-size-base);
  font-weight: 600;
}

.workTitle::before {
  position: absolute;
  bottom: 0;
  left: -2px;
  display: block;
  width: 100px;
  height: 2px;
  content: '';
  background: linear-gradient(to right, var(--el-color-primary), transparent);
}
</style>
