<template>
  <div class="content">
    <Profile />
    <el-space v-for="(list, index) in userBadgeList" :key="index" class="badgeList">
      <img v-for="badge in list" :src="badge" />
    </el-space>
  </div>
</template>

<script setup lang="ts">
import Profile from './Profile.vue'
import { userBadgeList } from '@/datas/profile'
</script>

<style scoped lang="scss">
.content {
  height: 100vh;
  padding: 10% 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
    display: none;
    background: transparent;
  }

  .badgeList {
    margin-top: 20px;
  }
}
</style>
