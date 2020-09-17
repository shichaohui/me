<template>
  <div id="app">
    <router-view v-slot="{ Component, props }">
      <transition name="fade" mode="out-in" :appear="true">
        <component :is="Component" v-bind="props" />
      </transition>
    </router-view>
  </div>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fade-enter-active {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
