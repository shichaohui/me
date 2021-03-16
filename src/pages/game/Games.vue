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
import ColorUpLogo from '@/assets/images/game/logos/ColorUp.jpg'
import Game from './components/Game.vue'

export default defineComponent({
  components: {
    game: Game
  },
  setup() {
    const gameList: GameTypes.Game[] = [
      {
        name: '七彩蹦蹦',
        logo: ColorUpLogo,
        desc: '基于 Cocos Creator 开发的躲避障碍物的微信小游戏。',
        url: `https://shichaohui.github.io/games/ColorUp/index.html`,
        codeUrl: 'https://github.com/shichaohui/ColorUp'
      }
    ]
    return {
      gameList
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
