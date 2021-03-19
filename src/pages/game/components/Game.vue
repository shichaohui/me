<template>
  <div class="game">
    <div>
      <img class="logo" :src="logo" :alt="name" />
      <h1 class="name">{{ name }}</h1>
    </div>
    <p>{{ desc }}</p>
    <a :href="codeUrl">源码</a>
    |
    <a :href="url">试玩 Web 版</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    game: {
      type: Object as PropType<GameTypes.Game>,
      required: true
    }
  },
  setup(props) {
    const { game } = props
    return {
      ...game
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.game {
  width: 66%;
  box-shadow: 0 2px 5px 5px rgba($color: white, $alpha: 0.3);
  background-color: white;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  padding: 15px;
  text-align: center;
  border-radius: 8px;

  a {
    text-decoration: none;
    color: #0000ff;
  }

  .logo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .name {
    display: inline;
    font-weight: normal;
    font-size: 22px;
    margin-left: 10px;
    vertical-align: middle;
  }
}
</style>
