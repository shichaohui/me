<template>
  <div>
    <div class="internalGame">
      <InternalGame />
    </div>
    <div class="gameList">
      <Game v-for="game in gameList" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InternalGame from '@/components/InternalGame.vue'
import Game from './Game.vue'
import { gameList } from '@/datas/game'
</script>

<style lang="scss" scoped>
.internalGame {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  overflow: hidden;
}

.gameList {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
