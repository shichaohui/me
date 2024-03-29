<template>
  <div id="app">
    <el-menu
      class="menu"
      mode="horizontal"
      :default-active="activeMenuIndex.value"
      @select="handleSelectMenuItem"
    >
      <img class="avatar" :src="avatarImg" @click="handleClickAvatar" />
      <template v-for="item in menu" :key="item.url">
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
    <router-view v-slot="{ Component, props }">
      <transition name="fade" mode="out-in" :appear="true">
        <component :is="Component" v-bind="props" class="content" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { nextTick, reactive } from 'vue'
import { useRouter } from 'vue-router'
import avatarImg from '@/assets/images/avatar.jpg'
import menu from '@/constants/menu'

const router = useRouter()

// 选中的菜单项
const activeMenuIndex = reactive({
  value: router.currentRoute.value.path,
})

// 监听路由变化，更新选中菜单项
router.afterEach(to => {
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

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: var(--el-font-size-base);
  color: var(--el-text-color-primary);
  background: $body-bg-color;
}

.menu {
  height: $menu-height;

  .avatar {
    margin: 10px;
    border-radius: 50%;
    box-shadow: 0 0 5px white;
    cursor: pointer;
  }
}

.content {
  height: calc(100vh - #{$menu-height});
}

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
