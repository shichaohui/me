<template>
  <div class="game">
    <div>
      <img class="logo" :src="game.logo" :alt="game.name" />
      <h1 class="name">{{ game.name }}</h1>
    </div>
    <p>{{ game.desc }}</p>
    <span class="actionBar">
      <el-link type="primary" :href="game.codeUrl" target="_blank">源码</el-link>
      <el-link type="primary" :href="game.url" target="_blank">试玩 Web 版</el-link>
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
  width: 80%;
  box-shadow: var(--el-box-shadow-base);
  margin: 20px auto;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  border: 1px var(--el-border-color-base) solid;

  .logo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .name {
    display: inline;
    font-weight: normal;
    font-size: var(--el-font-size-extra-large);
    margin-left: 10px;
    vertical-align: middle;
  }

  .actionBar {
    .el-link + .el-link {
      margin-left: 20px;
      position: relative;

      &::before {
        content: '|';
        position: absolute;
        left: -10px;
        top: 50%;
        font-size: 18px;
        transform: translate(-50%, calc(-50% - 1px));
        color: black;
      }
    }
  }
}
</style>
