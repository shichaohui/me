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
  margin: 10% 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
