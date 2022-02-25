<template>
  <div class="game">
    <div>
      <img class="logo" :src="game.logo" :alt="game.name" />
      <h1 class="name">{{ game.name }}</h1>
    </div>
    <p>{{ game.desc }}</p>
    <span>
      <a :href="game.codeUrl">源码</a>
      <span> | </span>
      <a :href="game.url">试玩 Web 版</a>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  game: GameTypes.Game
}>()
</script>

<style lang="scss" scoped>
.game {
  width: 66%;
  box-shadow: 0 2px 5px 5px rgba($color: white, $alpha: 0.3);
  background-color: white;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  padding: 15px;
  text-align: center;
  border-radius: 8px;

  a {
    text-decoration: none;
    color: $color-primary;
    font-size: 14px;
  }

  .logo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .name {
    display: inline;
    font-weight: normal;
    font-size: 22px;
    margin-left: 10px;
    vertical-align: middle;
  }
}
</style>
