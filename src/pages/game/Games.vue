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

<script lang="ts">
import { defineComponent } from 'vue'
import Game from './components/Game.vue'
import { gameList } from '@/datas/game'

export default defineComponent({
  components: {
    game: Game
  },
  setup() {
    return {
      gameList: [...gameList]
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
