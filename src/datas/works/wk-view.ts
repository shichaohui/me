import { uniqueId } from 'lodash'
import logo from '@/assets/images/works/wk-view.jpg'

/** wk-view */
export const wkView: WorksTypes.Works = {
  id: uniqueId(),
  name: 'wk-view',
  types: ['Android', 'iOS', '微信小程序', 'H5'],
  logo,
  desc: `惟客数据 uni-app UI 组件库，基于 Vue3 技术栈，兼容 Vue2，一套代码，多端适用。`,
  features: [
    '提供组件生成 cli 工具',
    '提供文档编写 cli 工具',
    '提供示例编写 cli 工具',
    '兼容 Vue2/Vue3',
    '多端适用',
    '类型支持',
    '主题定制',
    '组件丰富，文档完善',
  ],
  url: 'https://wakedata-gz.github.io/wk-view-docs/',
  codeUrl: '',
  technologyList: [
    'uni-app',
    'Vue3',
    'unplugin-vue2-script-setup',
    '@vue/composition-api',
    'VuePress',
    'Node.js',
  ],
  screenshotList: [],
}
