<template>
  <div class="content">
    <profile />
    <labels />
    <projects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Profile from './components/Profile.vue'
import Labels from './components/Labels.vue'
import Projects from './components/Projects.vue'

export default defineComponent({
  components: {
    profile: Profile,
    labels: Labels,
    projects: Projects
  }
})
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
