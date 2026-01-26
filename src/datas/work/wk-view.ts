import { uniqueId } from 'lodash'
import logo from '@/assets/images/work/wk-view.jpg'

/** wk-view */
export const wkView: Work.Work = {
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
  screenshotList: [
    'https://s41.ax1x.com/2026/01/12/pZB1SRe.jpg',
    'https://s41.ax1x.com/2026/01/12/pZB1iqI.jpg',
    'https://s41.ax1x.com/2026/01/12/pZB1pxH.jpg',
    'https://s41.ax1x.com/2026/01/12/pZB1CMd.jpg',
    'https://s41.ax1x.com/2026/01/12/pZB1PsA.jpg',
    'https://s41.ax1x.com/2026/01/12/pZB1kZt.jpg',
  ],
}
