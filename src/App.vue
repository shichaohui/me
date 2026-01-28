<template>
  <el-config-provider :locale="zhCn">
    <div class="flex flex-col h-screen">
      <template v-if="!isMobile">
        <FluidCursor v-if="activeMenuIndex === '/'" class="top-15" />
        <SleekLineCursor v-else />
      </template>
      <el-menu
        class="pr-24"
        mode="horizontal"
        :default-active="activeMenuIndex"
        @select="handleSelectMenuItem"
      >
        <img
          class="rounded-full m-2 ml-4 cursor-pointer border border-(--el-border-color)"
          :src="avatarImg"
          @click="handleClickAvatar"
        />
        <template v-for="item in menuList" :key="item.name">
          <el-sub-menu v-if="item.children?.length" :index="item.url">
            <template #title>{{ item.name }}</template>
            <el-menu-item v-for="subItem in item.children" :index="subItem.url">
              {{ subItem.name }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="item.url">{{ item.name }}</el-menu-item>
        </template>
        <a id="emptyTagForCancelHover"></a>
      </el-menu>
      <ThemeSwitch class="absolute top-0 right-4 h-15" />
      <router-view v-slot="{ Component, ...args }">
        <transition name="fade" mode="out-in" :appear="true">
          <component :is="Component" v-bind="args" class="flex-1 overflow-auto" />
        </transition>
      </router-view>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { nextTick } from 'vue'
import { useRouter } from 'vue-router'
import avatarImg from '@/assets/images/avatar.jpg'
import ThemeSwitch from '@/components/theme/ThemeSwitch.vue'
import { FluidCursor } from '@/components/ui/fluid-cursor'
import SleekLineCursor from '@/components/ui/sleek-line-cursor/SleekLineCursor.vue'
import menuList from '@/constants/menu'
import device from '@/utils/device'

const isMobile = device.isMobile()

const router = useRouter()

// 选中的菜单项
const activeMenuIndex = ref(router.currentRoute.value.path)

// 监听路由变化，更新选中菜单项
router.afterEach((to) => {
  activeMenuIndex.value = to.path
})

// 点击头像，回到首页
function handleClickAvatar() {
  router.push({ path: '/' })
}

// 更新选中的菜单项
function handleSelectMenuItem(url: string) {
  if (/^https?:\/\/.+/.test(url)) {
    window.open(url)
    const oldIndex = activeMenuIndex.value
    nextTick(() => {
      activeMenuIndex.value = oldIndex
      document.getElementById('emptyTagForCancelHover')?.focus()
    })
  } else {
    router.push({ path: url })
  }
  activeMenuIndex.value = url
}
</script>

<style scoped>
.fade-enter-active {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
