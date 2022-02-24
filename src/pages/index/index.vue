<template>
  <div class="content">
    <Profile />
    <Labels />
    <Projects />
  </div>
</template>

<script setup lang="ts">
import Profile from './components/Profile.vue'
import Labels from './components/Labels.vue'
import Projects from './components/Projects.vue'
</script>

<style scoped lang="scss">
.content {
  height: 100vh;
  padding: 10% 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
    display: none;
    background: transparent;
  }
}
</style>
