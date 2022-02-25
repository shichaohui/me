<template>
  <svg
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      color: color,
    }"
  >
    <use :xlink:href="`#icon-${name}`" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name: string
  size?: number
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: 16,
  color: '#ffffff',
})

const icons = require.context('../assets/icons', false, /\.svg$/)
icons.keys().map(icons)
</script>

<style lang="scss" scoped></style>
