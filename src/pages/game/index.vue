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
import Game from './components/Game.vue'
import { gameList } from '@/datas/game'
</script>

<style lang="scss" scoped>
.internalGame {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  overflow: hidden;
  z-index: -1;
}

.gameList {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
    background-color: transparent;
  }
}
</style>
