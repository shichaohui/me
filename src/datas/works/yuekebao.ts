import logoYueKeBao from '@/assets/images/works/yuekebao.png'
import { uniqueId } from 'lodash'

/** 悦客宝 */
export const yueKeBao: WorksTypes.Works = {
  id: uniqueId(),
  name: '悦客宝',
  types: ['微信小程序', 'Android', 'iOS', 'Web', 'H5'],
  logo: logoYueKeBao,
  desc:
    '悦客宝是为越秀地产开发的营销管理平台，包含小程序、APP、H5、Web 等多个部分。拥有分销管理（楼盘管理、渠道合作管理、全民营销管理）、行销管理（客户管理、任务管理、用户管理、团队管理、消息公告、配置中心、上下线管理、拓客地图）、案场管理（案场管理、接待台管理、项目房源、后台管理、统计分析、评价管理）、客户中心（申诉管理、业绩管理、判客规则设置、客户管理、系统配置）、权限管理、报表系统、日志管理等功能。',
  url: '',
  codeUrl: '',
  technologyList: [
    'Taro',
    'Vue',
    'Vuex',
    'uni-app',
    'qiankun',
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
    'https://s1.ax1x.com/2023/03/23/ppwRy79.png',
    'https://s1.ax1x.com/2023/03/23/ppwRckR.png',
    'https://s1.ax1x.com/2023/03/23/ppwRs0J.png',
    'https://s1.ax1x.com/2023/03/23/ppwRrm4.png',
    'https://s1.ax1x.com/2023/03/23/ppwRBXF.png',
    'https://s1.ax1x.com/2023/03/23/ppwRgt1.png',
    'https://s1.ax1x.com/2023/03/23/ppwRWp6.png',
    'https://s1.ax1x.com/2023/03/23/ppwR2fx.png',
    'https://s1.ax1x.com/2023/03/23/ppwRf1K.png',
    'https://s1.ax1x.com/2023/03/23/ppwRh6O.png',
    'https://s1.ax1x.com/2023/03/23/ppwR4XD.png',
    'https://s1.ax1x.com/2023/03/23/ppwRIne.png',
    'https://s1.ax1x.com/2023/03/23/ppwIW9A.png',
    'https://s1.ax1x.com/2023/03/23/ppwfkad.png',
    'https://s1.ax1x.com/2023/03/23/ppwI2hd.png',
    'https://s1.ax1x.com/2023/03/23/ppwIgtH.png',
    'https://s1.ax1x.com/2023/03/23/ppwRo0H.png',
    'https://s1.ax1x.com/2023/03/23/ppwRT7d.png',
  ],
}
