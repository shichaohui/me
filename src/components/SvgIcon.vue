<!-- SVG 图标组件 -->
<script setup lang="ts">
import { computed, type Component } from 'vue'

export interface YzySvgIconProps {
  /** 图标宽度 */
  width?: number | string
  /** 图标高度 */
  height?: number | string
  /** 图标颜色 */
  color?: string
  /** vite-svg-loader 加载的图标组件 */
  icon?: Component
}

const props = withDefaults(defineProps<YzySvgIconProps>(), {
  width: 20,
  height: 20,
  color: '#000000',
})

defineSlots<{
  /** 默认插槽，传入一个 vite-svg-loader 加载的图标组件 */
  default: () => Component
}>()

const _width = computed(() => parseFloat(props.width + '') + 'px')
const _height = computed(() => parseFloat(props.width + '') + 'px')
</script>

<template>
  <span class="yzy-svg-icon">
    <slot><component :is="icon" /></slot>
  </span>
</template>

<style lang="scss" scoped>
.yzy-svg-icon {
  display: inline-block;
  width: v-bind(_width);
  height: v-bind(_height);
  color: v-bind(color);

  :deep(svg) {
    width: 100%;
    height: 100%;

    * {
      fill: currentcolor;
    }
  }
}
</style>
