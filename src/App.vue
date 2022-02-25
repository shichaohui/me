<template>
  <div id="app">
    <el-menu
      class="menu"
      mode="horizontal"
      :default-active="data.activeMenuIndex"
      @select="handleSelectMenuItem"
    >
      <div class="avatarBox" @click="handleClickAvatar">
        <img class="avatar" :src="avatarImg" />
      </div>
      <el-menu-item v-for="item in menu" :index="item.url">{{ item.name }}</el-menu-item>
    </el-menu>
    <router-view v-slot="{ Component, props }">
      <transition name="fade" mode="out-in" :appear="true">
        <component :is="Component" v-bind="props" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { nextTick, reactive } from 'vue'
import { useRouter } from 'vue-router'
import avatarImg from '@/assets/images/avatar.png'
import menu from '@/constants/menu'

const router = useRouter()

const data = reactive({
  // 选中的菜单项
  activeMenuIndex: router.currentRoute.value.path,
})

// 监听路由变化，更新选中菜单项
router.afterEach(to => {
  data.activeMenuIndex = to.path
})

// 点击头像，回到首页
function handleClickAvatar() {
  router.push({ path: '/' })
}

// 更新选中的菜单项
function handleSelectMenuItem(url: string) {
  if (/^https?:\/\/.+/.test(url)) {
    window.open(url)
    const oldIndex = data.activeMenuIndex
    nextTick(() => (data.activeMenuIndex = oldIndex))
  } else {
    router.push({ path: url })
  }
  data.activeMenuIndex = url
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.menu {
  --el-menu-bg-color: rgba(0, 0, 0, 0.8);
  --el-menu-border-color: #666666;
  --el-menu-text-color: #ffffff;
  --el-menu-hover-text-color: #ffffff;
  --el-menu-hover-bg-color: transparent;
  --el-menu-active-color: #{$color-primary};
}

.avatarBox {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-shadow: 0 0 20px silver inset;

    &:hover {
      box-shadow: 0 0 100px $color-primary inset;
    }
  }
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
