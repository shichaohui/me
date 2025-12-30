<template>
  <div>
    <div v-if="!isMobile" class="internalGame">
      <InternalGame />
    </div>
    <div class="gameList">
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

<style lang="scss" scoped>
.internalGame {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gameList {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
