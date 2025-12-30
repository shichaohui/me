import { uniqueId } from 'lodash'
import logo from '@/assets/images/works/gank.jpg'

/** 干货 */
export const gank: WorksTypes.Works = {
  id: uniqueId(),
  name: '干货',
  types: ['Android', 'iOS'],
  logo,
  desc: `使用 Flutter 框架开发的基于干货集中营（gank.io）开放 API 的跨端应用。`,
  features: [
    '获取最新干货',
    '查看历史干货列表',
    '按分类查看干货',
    '福利图片',
    '发布干货',
    '分享干货给好友',
    '收藏干货',
    '切换主题和语言',
  ],
  url: 'https://github.com/shichaohui/Gank/blob/master/packet/app-release.apk?raw=true',
  codeUrl: 'https://github.com/shichaohui/gank',
  technologyList: [
    'Flutter',
    'Android',
    'iOS',
    'dio',
    'webview_flutter',
    'json_serializable',
    'shared_preferences',
    'sqflite',
    'intl',
    'provide',
    'cached_network_image',
    'flutter_staggered_grid_view',
    'gesture_zoom_box',
  ],
  screenshotsList: [
    'https://s4.ax1x.com/2022/03/04/bU3CM8.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1xPI.jpg',
    'https://s4.ax1x.com/2022/03/04/bU3pxf.jpg',
    'https://github.com/shichaohui/Gank/raw/master/screenshots/history.jpg',
    'https://github.com/shichaohui/Gank/blob/master/screenshots/welfare.jpg',
    'https://s4.ax1x.com/2022/03/04/bU3PsS.jpg',
    'https://s4.ax1x.com/2022/03/04/bU3iqg.jpg',
    'https://s4.ax1x.com/2022/03/04/bU3kZQ.jpg',
    'https://s4.ax1x.com/2022/03/04/bU3Aaj.jpg',
  ],
}
