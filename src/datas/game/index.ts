import logoColorUp from '@/assets/images/game/logos/ColorUp.jpg'
import logoKnifeKing from '@/assets/images/works/knife_king.jpg'
import { uniqueId } from 'lodash'
import { knifeKingId } from '../works'

const colorUp: GameTypes.Game = {
  id: uniqueId(),
  name: '七彩蹦蹦',
  logo: logoColorUp,
  desc: '基于 Cocos Creator 开发的躲避障碍物的微信小游戏。',
  detailUrl: 'https://github.com/shichaohui/ColorUp',
  codeUrl: 'https://github.com/shichaohui/ColorUp',
  playUrl: `https://shichaohui.github.io/games/ColorUp/index.html`,
}

const knifeKing: GameTypes.Game = {
  id: uniqueId(),
  name: '菜市场刀王',
  logo: logoKnifeKing,
  desc: '使用 CocosCreator 开发的基于飞刀投掷机制的微信小游戏。',
  detailUrl: `${import.meta.env.BASE_URL}works?id=${knifeKingId}`,
}

export const gameList: GameTypes.Game[] = [colorUp, knifeKing]
