import { uniqueId } from 'lodash'
import logoColorUp from '@/assets/images/game/logos/color_up.jpg'
import logoKnifeKing from '@/assets/images/work/knife_king.jpg'
import { knifeKingId } from '../work/knifeking'

const colorUp: Game.Game = {
  id: uniqueId(),
  name: '七彩蹦蹦',
  logo: logoColorUp,
  desc: '基于 Cocos Creator 开发的躲避障碍物的微信小游戏。',
  detailUrl: 'https://github.com/shichaohui/ColorUp',
  codeUrl: 'https://github.com/shichaohui/ColorUp',
  playUrl: `https://shichaohui.github.io/games/ColorUp/index.html`,
}

const knifeKing: Game.Game = {
  id: uniqueId(),
  name: '菜市场刀王',
  logo: logoKnifeKing,
  desc: '使用 Cocos Creator 开发的基于飞刀投掷机制的微信小游戏。',
  detailUrl: `${import.meta.env.BASE_URL}#/work?id=${knifeKingId}`,
}

export const gameList: Game.Game[] = [colorUp, knifeKing]
