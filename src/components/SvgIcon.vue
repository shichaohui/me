<template>
  <svg class="SvgIcon" :class="className" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const icons = require.context('../assets/icons', false, /\.svg$/)
icons.keys().map(icons)

export default defineComponent({
  props: {
    name: String,
    className: String
  }
})
</script>

<style scoped>
.SvgIcon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
