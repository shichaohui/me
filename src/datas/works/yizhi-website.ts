import logo from '@/assets/images/works/yizhi.jpg'
import { uniqueId } from 'lodash'

/** 伊智官网 */
export const yiZhiWebSite: WorksTypes.Works = {
  id: uniqueId(),
  name: '伊智官网',
  types: ['Web'],
  logo,
  desc: `伊智科技官方网站。`,
  features: ['公司介绍', '产品介绍', '顾问案例', '招商代理'],
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
