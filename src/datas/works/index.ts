import logoPaoword from '@/assets/images/works/paoword.jpg'
import logoGank from '@/assets/images/works/gank.jpg'
import logoYueXiangHui from '@/assets/images/works/yuexianghui.jpg'
import logoYiZhi from '@/assets/images/works/yizhi.jpg'
import logoKnifeKing from '@/assets/images/works/knife_king.jpg'
import { uniqueId } from 'lodash'

/** 悦享会 */
const yueXiangHui: WorksTypes.Works = {
  id: uniqueId(),
  name: '悦享会',
  types: ['微信小程序', 'Web'],
  logo: logoYueXiangHui,
  desc:
    '悦享会是为越秀地产开发的写字楼管理平台，包含小程序和后台管理两部分。拥有房源管理、企业管理、会员管理、通行管理、停车缴费、内容管理（活动、服务、新闻）、运营分析、游戏管理、商机管理等功能模块。',
  url: '',
  codeUrl: '',
  technologyList: [
    'Taro',
    'React',
    'Redux',
    'Vue',
    'Vuex',
    'Axios',
    'ElementUI',
    'Less/Sass',
    'JavaScript',
    'TypeScript',
    'WebPack',
    'Prettier',
    'ESLint',
  ],
  screenshotsList: [
    'https://s4.ax1x.com/2022/03/04/bU8TBD.jpg',
    'https://s4.ax1x.com/2022/03/04/bU87He.jpg',
    'https://s4.ax1x.com/2022/03/04/bU8bAH.jpg',
    'https://s4.ax1x.com/2022/03/04/bU8qNd.jpg',
    'https://s4.ax1x.com/2022/03/04/bU8onO.jpg',
    'https://s4.ax1x.com/2022/03/04/bU8L4A.jpg',
    'https://s4.ax1x.com/2022/03/04/bU8X9I.jpg',
    'https://s4.ax1x.com/2022/03/04/bU8j3t.jpg',
    'https://s4.ax1x.com/2022/03/04/bU8vgP.jpg',
    'https://s4.ax1x.com/2022/03/04/bU6ZxU.jpg',
    'https://s4.ax1x.com/2022/03/04/bU6uqJ.jpg',
    'https://s4.ax1x.com/2022/03/04/bU6nr4.jpg',
    'https://s4.ax1x.com/2022/03/04/bU6mMF.jpg',
    'https://s4.ax1x.com/2022/03/04/bU6V2T.jpg',
    'https://s4.ax1x.com/2022/03/04/bU6MZ9.jpg',
    'https://s4.ax1x.com/2022/03/04/bU6QaR.jpg',
  ],
}

/** 伊智官网 */
const yiZhiWebSite: WorksTypes.Works = {
  id: uniqueId(),
  name: '伊智官网',
  types: ['Web'],
  logo: logoYiZhi,
  desc: '伊智科技官方网站，包含公司介绍、产品介绍等功能。',
  url: 'https://meimeifa.com',
  technologyList: [
    'React',
    'Ant Design',
    'Sass',
    'Next',
    'MongoDB',
    'TypeORM',
    'JavaScript',
    'TypeScript',
    'WebPack',
    'Prettier',
    'ESLint',
  ],
  screenshotsList: [
    'https://s4.ax1x.com/2022/03/04/bUcBm4.jpg',
    'https://s4.ax1x.com/2022/03/04/bUcd6U.jpg',
    'https://s4.ax1x.com/2022/03/04/bUcalT.jpg',
    'https://s4.ax1x.com/2022/03/04/bUcwXF.jpg',
    'https://s4.ax1x.com/2022/03/04/bUcUpV.jpg',
    'https://s4.ax1x.com/2022/03/04/bUcD0J.jpg',
    'https://s4.ax1x.com/2022/03/04/bUcr79.jpg',
    'https://s4.ax1x.com/2022/03/04/bUcykR.jpg',
  ],
}

/** 泡单词 */
const paoword: WorksTypes.Works = {
  id: uniqueId(),
  name: '泡单词',
  types: ['Android'],
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
    'Java',
    'Kotlin',
  ],
  screenshotsList: [
    'https://s4.ax1x.com/2022/03/04/bU1muD.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1ZjO.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1nDe.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1VgK.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1E36.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1uHH.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1MEd.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1QUA.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1l4I.jpg',
    'https://s4.ax1x.com/2022/03/04/bU13Ct.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1Ggf.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1Jv8.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1NDg.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1tKS.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1UbQ.jpg',
  ],
}

/** 干货 */
const gank: WorksTypes.Works = {
  id: uniqueId(),
  name: '干货',
  types: ['Android', 'iOS'],
  logo: logoGank,
  desc: '使用 Flutter 框架开发的基于干货集中营（gank.io）开放 API 的跨端应用。',
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

/** 菜市场刀王 id */
export const knifeKingId = uniqueId()

/** 菜市场刀王 */
const knifeKing: WorksTypes.Works = {
  id: knifeKingId,
  name: '菜市场刀王',
  types: ['微信小游戏'],
  logo: logoKnifeKing,
  desc: '使用 CocosCreator 开发的基于飞刀投掷机制的微信小游戏。',
  url: '',
  codeUrl: '',
  technologyList: [
    'JavaScript',
    'CocosCreator',
    '小程序云开发',
    '小程序开放数据域',
    '小游戏排行榜',
  ],
  screenshotsList: [
    'https://s1.ax1x.com/2022/03/11/bIbsKK.jpg',
    'https://s1.ax1x.com/2022/03/11/bIbDv6.jpg',
    'https://s1.ax1x.com/2022/03/11/bIbBgx.jpg',
    'https://s1.ax1x.com/2022/03/11/bIb081.jpg',
  ],
}

/** 作品列表 */
export const worksList: WorksTypes.Works[] = [yueXiangHui, yiZhiWebSite, paoword, gank, knifeKing]
