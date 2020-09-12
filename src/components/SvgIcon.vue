<template>
  <svg class="SvgIcon" :class="className" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

const icons = require.context('../assets/icons', false, /\.svg$/)
icons.keys().map(icons)

@Options({
  props: {
    name: String,
    className: String
  }
})
export default class SvgIcon extends Vue {}
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
