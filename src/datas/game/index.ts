import ColorUpLogo from '@/assets/images/game/logos/ColorUp.jpg'
import { uniqueId } from 'lodash'

export const gameList: GameTypes.Game[] = [
  {
    id: uniqueId(),
    name: '七彩蹦蹦',
    logo: ColorUpLogo,
    desc: '基于 Cocos Creator 开发的躲避障碍物的微信小游戏。',
    url: `https://shichaohui.github.io/games/ColorUp/index.html`,
    codeUrl: 'https://github.com/shichaohui/ColorUp',
  },
]
