import logo from '@/assets/images/works/knife_king.jpg'
import { uniqueId } from 'lodash'

/** 菜市场刀王 id */
export const knifeKingId = uniqueId()

/** 菜市场刀王 */
export const knifeKing: WorksTypes.Works = {
  id: knifeKingId,
  name: '菜市场刀王',
  types: ['微信小游戏'],
  logo,
  desc: `使用 Cocos Creator 开发的基于飞刀投掷机制的微信小游戏。`,
  features: ['邀请好友，一起玩游戏', '好友排行榜，看看谁更强'],
  url: '',
  codeUrl: '',
  technologyList: [
    'JavaScript',
    'Cocos Creator',
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
