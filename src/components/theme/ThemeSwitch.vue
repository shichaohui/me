<!-- 主题切换 -->
<script setup lang="ts">
import ThemeIconDark from '@/assets/icons/theme-dark.svg?component'
import ThemeIconLight from '@/assets/icons/theme-light.svg?component'
import SvgIcon from '../SvgIcon.vue'
import { getDarkColor, getLightColor, setHtmlProperty } from './color-helper'

// 暗黑模式本地存储键
const DARK_MODE_STORAGE_KEY = 'dark-mode'

// 当前是否为暗黑模式
const isDarkMode = ref(localStorage.getItem(DARK_MODE_STORAGE_KEY) !== 'false')

// 黑暗模式切换处理
function handleDarkModeChange() {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem(DARK_MODE_STORAGE_KEY, String(isDarkMode.value))
  setElementPrimaryColor(themeColor.value, isDarkMode.value)
}

// 预定义颜色列表
const predefineColors = [
  '#DF0029',
  '#EC870E',
  '#C7C300',
  '#5BBD2B',
  '#00A06B',
  '#00A6AD',
  '#409eff',
  '#6A4C93',
  '#BB3E99',
  '#E0527A',
]
// 主题色本地存储键
const THEME_COLOR_STORAGE_KEY = 'theme-color'

// 当前主题色
const themeColor = ref(
  localStorage.getItem(THEME_COLOR_STORAGE_KEY) ||
    getComputedStyle(document.documentElement).getPropertyValue('--el-color-primary'),
)

// Element Plus 主题色权重
const EL_PRIMARY_COLOR_WEIGHT = [300, 500, 700, 800, 900]

// 设置 Element Plus 主题色
function setElementPrimaryColor(color: string, isDark: boolean = false): void {
  setHtmlProperty('--el-color-primary', color)
  setHtmlProperty(`--el-color-primary-dark-2`, getDarkColor(color, 0.2))
  for (const weight of EL_PRIMARY_COLOR_WEIGHT) {
    setHtmlProperty(
      `--el-color-primary-light-${weight / 100}`,
      getLightColor(color, weight / 1000, isDark),
    )
  }
}

// 主题色更改处理
function handleThemeColorChange(color: string | null) {
  color ??= themeColor.value
  localStorage.setItem(THEME_COLOR_STORAGE_KEY, color)
  setElementPrimaryColor(color, isDarkMode.value)
}

// 初始化主题
onMounted(() => {
  handleDarkModeChange()
  handleThemeColorChange(themeColor.value)
})
</script>

<template>
  <el-space>
    <el-switch
      v-model="isDarkMode"
      size="large"
      class="dark-mode-switch"
      @change="handleDarkModeChange"
    >
      <template #active-action>
        <SvgIcon :icon="ThemeIconDark" :width="16" :height="16" />
      </template>
      <template #inactive-action>
        <SvgIcon :icon="ThemeIconLight" :width="16" :height="16" />
      </template>
    </el-switch>
    <el-color-picker
      size="small"
      :model-value="themeColor"
      :predefine="predefineColors"
      @change="themeColor = $event || themeColor"
      @active-change="handleThemeColorChange"
    />
  </el-space>
</template>

<style scoped>
.dark-mode-switch {
  --el-switch-on-color: var(--el-border-color);
  --el-switch-off-color: var(--el-border-color);
}
</style>
