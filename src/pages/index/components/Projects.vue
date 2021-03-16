<template>
  <div class="projectList">
    <div
      v-for="project in projectList"
      :key="project.name"
      class="project"
      @click="viewProject(project.url)"
    >
      <img class="image" :src="project.image" :style="{ background: project.imageBg }" />
      <div class="name">{{ project.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import githubImg from '@/assets/images/project/github.svg'
import gameImg from '@/assets/images/project/game.svg'
import jianShuImg from '@/assets/images/project/jianshu.svg'
import jueJinImg from '@/assets/images/project/juejin.svg'

export default defineComponent({
  setup() {
    const router = useRouter()

    const projectList = [
      {
        name: '游戏',
        image: gameImg,
        imageBg: '#3CDFE7',
        url: '/games'
      },
      {
        name: 'GitHub',
        image: githubImg,
        imageBg: '#212428',
        url: 'https://github.com/shichaohui'
      },
      {
        name: '简书',
        image: jianShuImg,
        imageBg: '#FFFFFF',
        url: 'https://www.jianshu.com/u/2cbd13c2ceb8'
      },
      {
        name: '掘金',
        image: jueJinImg,
        imageBg: '#0061ff',
        url: 'https://juejin.im/user/57df619f5bbb50005e6c072a'
      }
    ]

    // 查看项目
    function viewProject(url: string) {
      if (/^https?:\/\/.+/.test(url)) {
        window.location.href = url
      } else {
        router.push({ path: url })
      }
    }
    return {
      projectList,
      viewProject
    }
  }
})
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
    height: 150px;
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
      margin: auto;
      text-align: center;
      width: 100%;
      color: #000000;
      font-weight: 500;
    }
  }
}
</style>
