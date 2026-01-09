<template>
  <div class="flex flex-col items-center pt-[10%] bg-[url('/images/bg.svg')] bg-size-[100%_100%]">
    <Profile />
    <div
      class="mt-6 flex flex-wrap justify-center"
      v-for="(list, index) in userBadgeList"
      :key="index"
    >
      <img class="mt-2 mx-2 rounded-full" v-for="badge in list" :src="badge" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { userBadgeList } from '@/datas/profile'
import Profile from './Profile.vue'
</script>

<style scoped></style>
