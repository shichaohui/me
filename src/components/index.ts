import { App } from 'vue'
import SvgIcon from './SvgIcon.vue'

/** 全局注册自定义组件 */
export function registerComponents(app: App<Element>) {
  app.component('svg-icon', SvgIcon)
}
