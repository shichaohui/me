<template>
  <div class="game">
    <div>
      <img class="logo" :src="game.logo" :alt="game.name" />
      <h1 class="name">{{ game.name }}</h1>
    </div>
    <p>{{ game.desc }}</p>
    <el-space size="large" spacer="|">
      <el-link
        type="primary"
        :href="game.detailUrl"
        :target="getLinkTarget(game.detailUrl)"
        :disabled="!game.detailUrl"
      >
        详情
      </el-link>
      <el-link
        type="primary"
        :href="game.codeUrl"
        :target="getLinkTarget(game.codeUrl)"
        :disabled="!game.codeUrl"
      >
        源码
      </el-link>
      <el-link
        type="primary"
        :href="game.playUrl"
        :target="getLinkTarget(game.playUrl)"
        :disabled="!game.playUrl"
      >
        试玩
      </el-link>
    </el-space>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  game: GameTypes.Game
}>()

// 获取链接打开方式
function getLinkTarget(url: string = '') {
  return url.startsWith(import.meta.env.BASE_URL) ? '' : '_blank'
}
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
    border: var(--el-border-base);
  }

  .name {
    display: inline;
    font-weight: normal;
    font-size: var(--el-font-size-extra-large);
    margin-left: 10px;
    vertical-align: middle;
  }
}
</style>
