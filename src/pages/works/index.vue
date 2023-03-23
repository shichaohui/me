<template>
  <el-container>
    <el-aside :width="isMobile ? '64px' : '200px'">
      <el-menu
        class="menu"
        :default-active="activeWorks.value.id"
        :collapse="isMobile"
        @select="handleSelectMenuItem"
      >
        <el-menu-item v-for="works in worksList" :index="works.id">
          <img class="worksLogo" :src="works.logo" />
          <span>{{ works.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main ref="worksContent">
      <div class="title">作品名称：</div>
      <div class="desc">{{ activeWorks.value.name }}</div>
      <div class="title">作品类型：</div>
      <div class="desc">{{ activeWorks.value.types.join('、') }}</div>
      <div class="title">作品简述：</div>
      <div class="desc">{{ activeWorks.value.desc }}</div>
      <el-space class="actionBar" spacer="|">
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
      <div class="title">使用技术：</div>
      <el-space wrap>
        <el-tag v-for="technology in activeWorks.value.technologyList">
          {{ technology }}
        </el-tag>
      </el-space>
      <div class="title">作品截图：</div>
      <el-space wrap>
        <el-image
          v-for="(screenshots, index) in activeWorks.value.screenshotsList"
          :class="{ screenshots: true, isMobile: isMobile }"
          :key="screenshots"
          :src="screenshots"
          lazy
          fit="contain"
          :preview-src-list="activeWorks.value.screenshotsList"
          :initial-index="index"
        >
          <template #placeholder>
            <div class="placeholder">loading...</div>
          </template>
        </el-image>
      </el-space>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { worksList } from '@/datas/works'
import device from '@/utils/device'
import { useRouter } from 'vue-router'

// 解析路由参数
const router = useRouter()
const { id } = router.currentRoute.value.query

// 是否移动端
const isMobile = ref(device.isMobile())

// 选择的菜单
const activeWorks = reactive({
  value: worksList.find(i => i.id === id) || worksList[0],
})

// 作品内容节点
const worksContent = ref()

// 更新选中的菜单项
function handleSelectMenuItem(id: string) {
  const item = worksList.find(item => item.id === id)
  if (!item) {
    return
  }
  activeWorks.value = item
  worksContent.value.$el.scrollTop = 0
}
</script>

<style scoped lang="scss">
.menu {
  height: 100%;

  .worksLogo {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 6px;
    border: var(--el-border-base);
  }
}

.title {
  margin: 20px 0 10px;
  font-size: var(--el-font-size-medium);
  font-weight: 600;
  display: flex;
  align-items: center;

  &:first-child {
    margin-top: 0;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: var(--el-font-size-medium);
    background: var(--el-color-primary);
    margin-right: 4px;
  }
}

.actionBar {
  margin-top: 10px;
}

.screenshots {
  width: 320px;
  height: 320px;
  vertical-align: middle;
  border: 1px var(--el-border-color-light) solid;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;

  &.isMobile {
    width: calc(100vw - 104px);
    height: calc(100vw - 104px);
  }

  .placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::v-deep .el-image__preview {
    filter: drop-shadow(2px 4px 6px var(--el-border-color-base));
  }
}
</style>
