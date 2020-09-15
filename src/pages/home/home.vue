<template>
  <div class="content">
    <div class="profileBox">
      <img class="avatar" :src="profile.avatar" />
      <div class="profile">
        <div>
          <div class="name">{{ profile.name }}</div>
          <div>{{ profile.slogan }}</div>
        </div>
        <div>
          <div>
            <svg-icon name="email" />
            {{ profile.email }}
          </div>
          <div>
            <svg-icon name="wechat" />
            {{ profile.wechat }}
          </div>
          <div>
            <svg-icon name="location" />
            {{ profile.city }}
          </div>
        </div>
      </div>
    </div>
    <div class="labelBox">
      <span v-for="label in labelList" :key="label" class="label">{{ label }}</span>
    </div>
    <div class="projectBox">
      <div
        v-for="project in projectList"
        :key="project.name"
        class="project"
        @click="viewProject(project.url)"
      >
        <img :src="project.image" :style="{ background: project.imageBg }" />
        <div class="overlay">{{ project.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HomePage from './home'
export default HomePage
</script>

<style scoped lang="scss">
@import './home.scss';
</style>
