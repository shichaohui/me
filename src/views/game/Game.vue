<template>
  <div
    class="w-[80%] p-4 my-5 mx-auto bg-(--el-bg-color) border border-(--el-border-color) rounded-lg shadow-2xs"
  >
    <div class="flex items-center justify-center">
      <img
        class="w-8 h-8 rounded-full border border-(--el-border-color)"
        :src="game.logo"
        :alt="game.name"
      />
      <span class="ml-2 text-lg font-bold">{{ game.name }}</span>
    </div>
    <p class="mt-2 text-center">{{ game.desc }}</p>
    <el-space class="mt-2 flex justify-center" size="large" spacer="|">
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

<style scoped></style>
