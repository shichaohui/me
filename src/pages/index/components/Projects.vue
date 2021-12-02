<template>
  <div class="projectList">
    <div
      v-for="project in projectList"
      :key="project.name"
      class="project"
      @click="viewProject(project.url)"
    >
      <img
        class="image"
        :src="project.image"
        :style="{ background: project.imageBg }"
        :alt="project.desc"
      />
      <div class="name">{{ project.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

// 项目列表
import { projectList } from '@/datas/profile'

// 查看项目
function viewProject(url: string) {
  if (/^https?:\/\/.+/.test(url)) {
    window.location.href = url
  } else {
    router.push({ path: url })
  }
}
</script>

<style scoped lang="scss">
@import '@/style/mixins.scss';

.projectList {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .project {
    width: 100px;
    margin: 10px 20px;
    background-color: rgba($color: #ffffff, $alpha: 0.65);
    border-radius: 10px;
    box-shadow: 2px 2px 5px 0px #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .image {
      width: 100px;
      height: 100px;
    }

    .name {
      @include multi-lines-ellipsis(2);
      text-align: center;
      width: 100%;
      color: #000000;
      font-weight: 500;
      padding: 10px 0 5px;
    }
  }
}
</style>
