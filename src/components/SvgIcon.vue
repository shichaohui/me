<template>
  <svg class="SvgIcon" :class="className" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  name: string
  className: string
}>()

const icons = require.context('../assets/icons', false, /\.svg$/)
icons.keys().map(icons)
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
