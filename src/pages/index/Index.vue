<template>
  <div class="content">
    <profile />
    <labels />
    <projects />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Profile from './components/Profile.vue'
import Labels from './components/Labels.vue'
import Projects from './components/Projects.vue'

@Options({
  components: {
    profile: Profile,
    labels: Labels,
    projects: Projects
  }
})
export default class Index extends Vue {}
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
