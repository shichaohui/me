<template>
  <div class="content">
    <div class="row itemCenter">
      <img class="avatar" :src="profile.avatar" />
      <div class="column">
        <div>
          <span class="fullName">{{ profile.fullName }}</span>
          <span class="nickname">（{{ profile.nickname }}）</span>
        </div>
        <div class="slogan">{{ profile.slogan }}</div>
        <div class="profileItem">
          <svg-icon class="icon" name="email" />
          <span class="text">{{ profile.email }}</span>
        </div>
        <div class="profileItem">
          <svg-icon class="icon" name="wechat" />
          <span class="text">{{ profile.wechat }}</span>
        </div>
        <div class="profileItem">
          <svg-icon class="icon" name="location" />
          <span class="text">{{ profile.city }}</span>
        </div>
      </div>
    </div>
    <div class="labelBox">
      <span v-for="label in labelList" :key="label" class="label">{{ label }}</span>
    </div>
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
  </div>
</template>

<script lang="ts">
import Index from './Index'
export default Index
</script>

<style scoped lang="scss">
@import './Index.scss';
</style>
