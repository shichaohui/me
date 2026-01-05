<template>
  <div>
    <div v-if="!isMobile" class="fixed -z-1 bottom-0 w-full h-full overflow-hidden">
      <InternalGame />
    </div>
    <div class="w-full h-full overflow-auto">
      <Game v-for="game in gameList" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InternalGame from '@/components/InternalGame.vue'
import { gameList } from '@/datas/game'
import device from '@/utils/device'
import Game from './Game.vue'

const isMobile = device.isMobile()
</script>

<style scoped></style>
