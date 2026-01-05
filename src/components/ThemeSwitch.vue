<!-- 主题切换 -->
<script setup lang="ts">
import ThemeIconDark from '@/assets/icons/theme-dark.svg?component'
import ThemeIconLight from '@/assets/icons/theme-light.svg?component'
import SvgIcon from './SvgIcon.vue'

const THEME_STORAGE_KEY = 'theme'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const theme = ref<Theme>()
theme.value = (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || Theme.LIGHT

// 监听主题变化
watch(
  theme,
  (newTheme) => {
    if (newTheme === Theme.DARK) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  { immediate: true },
)

// 切换主题
function handleSwitch() {
  theme.value = theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
  localStorage.setItem(THEME_STORAGE_KEY, theme.value)
}
</script>

<template>
  <SvgIcon
    class="cursor-pointer"
    :icon="theme === 'light' ? ThemeIconDark : ThemeIconLight"
    :width="24"
    :height="24"
    color="var(--el-text-color-primary)"
    @click="handleSwitch"
  />
</template>

<style lang="scss" scoped></style>
