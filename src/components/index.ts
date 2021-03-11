import { App } from 'vue'
import SvgIcon from './SvgIcon.vue'
import InternalGame from './InternalGame.vue'

/** 全局注册自定义组件 */
export default function(app: App<Element>) {
  app.component('svg-icon', SvgIcon)
  app.component('internal-game', InternalGame)
}
