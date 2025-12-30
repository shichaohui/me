<template>
  <div class="content">
    <Profile />
    <div class="badgeList" v-for="(list, index) in userBadgeList" :key="index">
      <img class="badge" v-for="badge in list" :src="badge" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { userBadgeList } from '@/datas/profile'
import Profile from './Profile.vue'
</script>

<style scoped lang="scss">
.content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10% 0;
  overflow: hidden;
  background: url('/images/bg.svg') no-repeat;
  background-size: 100% 100%;

  .badgeList {
    margin: 30px 16px 0;

    .badge {
      margin: 10px 10px 0 0;
      border-radius: 0.5rem;
    }
  }

  .badgeList + .badgeList {
    margin-top: 16px;
  }
}
</style>
