import { Options, Vue } from 'vue-class-component'
import ColorUpLogo from '@/assets/images/game/logos/ColorUp.jpg'

@Options({})
export default class Game extends Vue {
  gameList: GameTypes.Game[] = [
    {
      name: '七彩蹦蹦',
      logo: ColorUpLogo,
      desc: '基于 Cocos Creator 开发的躲避障碍物的微信小游戏。',
      url: `https://shichaohui.github.io/games/ColorUp/index.html`,
      codeUrl: 'https://github.com/shichaohui/ColorUp'
    }
  ]
}
