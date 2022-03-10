<template>
  <div class="row itemCenter">
    <img class="avatar" :src="userInfo.avatar" @click="handleClickAvatar" />
    <div class="column">
      <div>
        <h1 class="fullName">{{ userInfo.fullName }}</h1>
        <h2 class="nickname">（{{ userInfo.nickname }}）</h2>
      </div>
      <div class="item">
        <SvgIcon name="email" :size="12" />
        <span class="text">{{ userInfo.email }}</span>
      </div>
      <div class="item">
        <SvgIcon name="wechat" :size="12" />
        <span class="text">{{ userInfo.wechat }}</span>
      </div>
      <div class="item">
        <SvgIcon name="location" :size="12" />
        <span class="text">{{ userInfo.city }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { userInfo } from '@/datas/profile'

// 点击头像
function handleClickAvatar() {
  window.open('https://github.com/shichaohui')
}
</script>

<style scoped lang="scss">
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: 0 0 5px black;
  cursor: pointer;
}

.fullName {
  display: inline;
  font-size: 22px;
  font-weight: 500;
  font-weight: normal;
}

.nickname {
  display: inline;
  font-size: 18px;
  font-weight: normal;
}

.item {
  font-size: 14px;
  margin-top: 5px;

  .text {
    margin-left: 5px;
  }
}
</style>
