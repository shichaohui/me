<template>
  <div>
    <div class="internalGame">
      <internal-game />
    </div>
    <div class="gameList">
      <game v-for="game in gameList" :key="game" :game="game" />
    </div>
  </div>
</template>

<script setup lang="ts">
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
