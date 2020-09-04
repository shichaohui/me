<template>
  <svg class="svg-icon" :class="className" aria-hidden="true">
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
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: #2c3e50;
  overflow: hidden;
}
</style>
