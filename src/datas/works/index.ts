import logoPaoword from '@/assets/images/works/paoword.png'
import logoGank from '@/assets/images/works/gank.png'
import { uniqueId } from 'lodash'

/**
 * 作品列表
 */
export const worksList: WorksTypes.Works[] = [
  {
    id: uniqueId(),
    name: '泡单词',
    logo: logoPaoword,
    desc:
      '动漫背词，过目不忘！根据全脑科学规律，将每一个英文单词变成英语故事，并将英语故事制作成动漫视频。我们这里，没有死记硬背，只有你忘也忘不掉的快速背词的诀窍！',
    url: 'https://appgallery.huawei.com/#/app/C10477191',
    technologyList: [
      'RxJava',
      'Retrofit',
      'MVP',
      'Glide',
      'SQLite',
      'GreenDao',
      'Socket',
      'ZXing',
      'X5内核',
      'Kotlin',
    ],
    screenshotsList: [
      'https://s4.ax1x.com/2022/02/24/bF8kUU.jpg',
      'https://s4.ax1x.com/2022/02/24/bF3vCQ.jpg',
      'https://s4.ax1x.com/2022/02/24/bF8CD0.jpg',
      'https://s4.ax1x.com/2022/02/24/bF3x3j.jpg',
      'https://s4.ax1x.com/2022/02/24/bF8Svn.jpg',
      'https://s4.ax1x.com/2022/02/24/bF89uq.jpg',
      'https://s4.ax1x.com/2022/02/24/bF8A5F.jpg',
      'https://s4.ax1x.com/2022/02/24/bF3LE8.jpg',
      'https://s4.ax1x.com/2022/02/24/bF8PbV.jpg',
      'https://s4.ax1x.com/2022/02/24/bF8FET.jpg',
      'https://s4.ax1x.com/2022/02/24/bF3zgs.jpg',
      'https://s4.ax1x.com/2022/02/24/bF3OUS.jpg',
      'https://s4.ax1x.com/2022/02/24/bF3X4g.jpg',
    ],
  },
  {
    id: uniqueId(),
    name: '干货',
    logo: logoGank,
    desc: '使用 Flutter 框架开发的基于干货集中营（gank.io）开放 API 的跨端应用。',
    url: 'https://github.com/shichaohui/Gank/blob/master/packet/app-release.apk?raw=true',
    sourceUrl: 'https://github.com/shichaohui/gank',
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
      'https://s4.ax1x.com/2022/02/28/bKjGB4.jpg',
      'https://s4.ax1x.com/2022/02/28/bKj1jU.jpg',
      'https://s4.ax1x.com/2022/02/28/bKj8uF.jpg',
      'https://github.com/shichaohui/Gank/raw/master/screenshots/history.jpg',
      'https://github.com/shichaohui/Gank/blob/master/screenshots/welfare.jpg',
      'https://s4.ax1x.com/2022/02/28/bKjQ3V.jpg',
      'https://s4.ax1x.com/2022/02/28/bKjuhq.jpg',
      'https://s4.ax1x.com/2022/02/28/bKjM90.jpg',
      'https://s4.ax1x.com/2022/02/28/bKjnNn.jpg',
    ],
  },
]
