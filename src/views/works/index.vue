<template>
  <el-container>
    <el-aside :width="isMobile ? '64px' : '200px'">
      <el-menu
        class="h-full"
        :default-active="activeWorks.value.id"
        :collapse="isMobile"
        @select="handleSelectMenuItem"
      >
        <el-menu-item v-for="works in worksList" :index="works.id">
          <img class="w-6 h-6 rounded-full border border-(--el-border-color)" :src="works.logo" />
          <span class="ml-2">{{ works.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main ref="workContent">
      <div class="flex items-center flex-wrap gap-x-2">
        <div class="text-lg font-bold">{{ activeWorks.value.name }}</div>
        <div class="flex items-center gap-1">
          <el-tag v-for="item in activeWorks.value.types" :key="item" size="small">
            {{ item }}
          </el-tag>
        </div>
      </div>
      <div class="mt-2 whitespace-pre-line">{{ activeWorks.value.desc }}</div>
      <ul class="mt-2 ml-4 list-disc">
        <li v-for="item in activeWorks.value.features" :key="item">{{ item }}</li>
      </ul>
      <el-space class="mt-2" spacer="|">
        <el-link
          type="primary"
          target="_blank"
          :href="activeWorks.value.codeUrl"
          :disabled="!activeWorks.value.codeUrl"
        >
          查看源码
        </el-link>
        <el-link
          type="primary"
          target="_blank"
          :href="activeWorks.value.url"
          :disabled="!activeWorks.value.url"
        >
          我要试用
        </el-link>
      </el-space>
      <div class="worksTitle">使用技术：</div>
      <el-space wrap>
        <el-tag v-for="technology in activeWorks.value.technologyList">
          {{ technology }}
        </el-tag>
      </el-space>
      <div class="worksTitle">作品截图：</div>
      <div class="overflow-auto -m-2 mt-2">
        <el-image
          v-for="(screenshot, index) in activeWorks.value.screenshotList"
          class="border border-(--el-border-color) bg-(--el-bg-color-page)/35 rounded-sm shadow-2xs"
          :class="isMobile ? 'w-full min-h-20' : 'float-left m-2 min-w-20 h-66'"
          :key="screenshot"
          :src="screenshot"
          lazy
          :preview-src-list="activeWorks.value.screenshotList"
          :initial-index="index"
        >
          <template #placeholder>
            <div class="flex items-center justify-center w-full h-full">loading...</div>
          </template>
        </el-image>
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { worksList } from '@/datas/works'
import device from '@/utils/device'

// 解析路由参数
const router = useRouter()
const { id } = router.currentRoute.value.query

// 是否移动端
const isMobile = ref(device.isMobile())

// 选择的菜单
const activeWorks = reactive({
  value: worksList.find((i) => i.id === id) || worksList[0],
})

// 作品内容节点
const workContent = ref()

// 更新选中的菜单项
function handleSelectMenuItem(id: string) {
  const item = worksList.find((item) => item.id === id)
  if (!item) {
    return
  }
  activeWorks.value = item
  workContent.value.$el.scrollTop = 0
}
</script>

<style scoped>
.worksTitle {
  position: relative;
  padding: 0 0 2px 2px;
  margin: 20px 0 10px;
  font-size: var(--el-font-size-base);
  font-weight: 600;
}

.worksTitle::before {
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
