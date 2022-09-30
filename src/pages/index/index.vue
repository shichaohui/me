<template>
  <div class="content">
    <Profile />
    <div class="badgeList" v-for="(list, index) in userBadgeList" :key="index">
      <img class="badge" v-for="badge in list" :src="badge" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Profile from './Profile.vue'
import { userBadgeList } from '@/datas/profile'
</script>

<style scoped lang="scss">
.content {
  padding: 10% 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: url('/images/bg.svg') no-repeat;

  .badgeList {
    width: 100%;
    margin: 30px -8px -8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .badge {
      margin: 0 8px 8px 0;
    }
  }
}
</style>
