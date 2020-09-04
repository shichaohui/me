import SvgIcon from './SvgIcon.vue'

/** 全局注册自定义组件 */
export function registerComponents(app) {
  app.component('svg-icon', SvgIcon)
}
