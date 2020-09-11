<template>
  <div>
    <div class="internalGame">
      <internal-game />
    </div>
    <div class="gameList">
      <div class="game" v-for="game in gameList" :key="game">
        <div>
          <img class="gameLogo" :src="game.logo" />
          <span class="gameName">{{ game.name }}</span>
        </div>
        <p>{{ game.desc }}</p>
        <a :href="game.codeUrl">源码</a>
        |
        <a :href="game.url">试玩 Web 版</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ColorUpLogo from '@/assets/images/game/logos/ColorUp.jpg'

@Options({})
export default class GamesPage extends Vue {
  gameList: {
    name: string
    logo: string
    desc: string
    url: string
    codeUrl: string
  }[] = [
    {
      name: '七彩蹦蹦',
      logo: ColorUpLogo,
      desc: '基于 Cocos Creator 开发的躲避障碍物的微信小游戏。',
      url: '/games/ColorUp/index.html',
      codeUrl: 'https://github.com/shichaohui/ColorUp'
    }
  ]
}
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

.game {
  width: 66%;
  box-shadow: 0 2px 5px 5px rgba($color: #000000, $alpha: 0.1);
  background-color: white;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  padding: 15px;
  text-align: center;

  a {
    text-decoration: none;
    color: #0000ff;
  }

  .gameLogo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .gameName {
    font-size: 22px;
    margin-left: 10px;
    vertical-align: middle;
  }
}
</style>
