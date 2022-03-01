<template>
  <el-container>
    <el-aside :width="data.isCollapseMenu ? '64px' : '200px'">
      <el-menu
        class="menu"
        :default-active="data.activeWorks.id"
        :collapse="data.isCollapseMenu"
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
      <div class="desc">{{ data.activeWorks.name }}</div>
      <div class="title">作品简述：</div>
      <div class="desc">{{ data.activeWorks.desc }}</div>
      <div class="title">使用技术：</div>
      <el-space wrap>
        <el-tag v-for="technology in data.activeWorks.technologyList" type="info">
          {{ technology }}
        </el-tag>
      </el-space>
      <div class="actionBar">
        <el-link
          type="primary"
          target="_blank"
          :href="data.activeWorks.sourceUrl"
          :disabled="!data.activeWorks.sourceUrl"
        >
          查看源码
        </el-link>
        <el-link type="primary" target="_blank" :href="data.activeWorks.url">我要试用</el-link>
      </div>
      <div class="title">作品截图：</div>
      <el-space wrap>
        <el-image
          v-for="(screenshots, index) in data.activeWorks.screenshotsList"
          class="screenshots"
          :key="screenshots"
          :src="screenshots"
          lazy
          :preview-src-list="data.activeWorks.screenshotsList"
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

// 选择的菜单
const data = reactive({
  activeWorks: worksList[0],
  isCollapseMenu: device.isMobile(),
})

// 作品内容节点
const worksContent = ref()

// 更新选中的菜单项
function handleSelectMenuItem(id: string) {
  const item = worksList.find(item => item.id === id)
  if (!item) {
    return
  }
  data.activeWorks = item
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
    margin-right: 4px;
  }
}

.title {
  margin: 20px 0 10px;
  font-size: 16px;
  color: #ffffff;

  &:first-child {
    margin-top: 0;
  }
}

.desc {
  color: #cbcbcb;
}

.actionBar {
  margin-top: 20px;

  .el-link + .el-link {
    margin-left: 20px;
    position: relative;

    &::before {
      content: '|';
      position: absolute;
      left: -10px;
      top: 50%;
      font-size: 10px;
      transform: translate(-50%, -50%);
      color: #ffffff;
    }
  }
}

.screenshots {
  height: 300px;
  vertical-align: middle;
  border: 1px #666666 solid;

  .placeholder {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    padding: 0 10px;
  }
}
</style>
