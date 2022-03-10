<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  dir?: string
  name: string
  size?: number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  color: '#ffffff',
})

const symbolId = ref(!!props.dir ? `#icon-${props.dir}-${props.name}` : `#icon-${props.name}`)
</script>

<style lang="scss" scoped>
.icon {
  width: v-bind('`${size}px`');
  height: v-bind('`${size}px`');
}
</style>
