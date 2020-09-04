<template>
  <svg class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../assets/icons', false, /\.svg$/)
requireAll(req)

export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: ''
    }
  }
}
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
