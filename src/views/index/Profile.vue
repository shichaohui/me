<template>
  <div class="flex items-center">
    <img
      class="w-30 h-30 rounded-full cursor-pointer border border-(--el-border-color)"
      :src="userInfo.avatar"
      @click="handleClickAvatar"
    />
    <div class="flex flex-col ml-4">
      <div class="flex items-center">
        <h1 class="text-xl font-bold">{{ userInfo.fullName }}</h1>
        <h2 class="text-base font-bold">（{{ userInfo.nickname }}）</h2>
      </div>
      <div class="flex items-center">
        <SvgIcon :icon="IconEmail" :width="14" :height="14" color="var(--el-text-color-primary)" />
        <span class="ml-2 text-base">{{ userInfo.email }}</span>
      </div>
      <div class="flex items-center">
        <SvgIcon :icon="IconWechat" :width="14" :height="14" color="var(--el-text-color-primary)" />
        <span class="ml-2 text-base">{{ userInfo.wechat }}</span>
      </div>
      <div class="flex items-center">
        <SvgIcon
          :icon="IconLocation"
          :width="14"
          :height="14"
          color="var(--el-text-color-primary)"
        />
        <span class="ml-2 text-base">{{ userInfo.city }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconEmail from '@/assets/icons/email.svg?component'
import IconLocation from '@/assets/icons/location.svg?component'
import IconWechat from '@/assets/icons/wechat.svg?component'
import SvgIcon from '@/components/SvgIcon.vue'
import { userInfo } from '@/datas/profile'

// 点击头像
function handleClickAvatar() {
  window.open('https://github.com/shichaohui')
}
</script>

<style scoped></style>
