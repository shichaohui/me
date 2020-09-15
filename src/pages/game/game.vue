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
import GamePage from './game'
export default GamePage
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './game.scss';
</style>
