import { Options, Vue } from 'vue-class-component'
import avatarImg from '@/assets/images/avatar.jpg'
import githubImg from '@/assets/images/project/github.svg'
import gameImg from '@/assets/images/project/game.svg'
import brvahImg from '@/assets/images/project/brvah.png'
import jianShuImg from '@/assets/images/project/jianshu.svg'
import jueJinImg from '@/assets/images/project/juejin.svg'

@Options({})
export default class HomePage extends Vue {
  profile = {
    fullname: '石朝辉',
    nickname: 'StoneHui',
    email: '464206200@qq.com',
    wechat: 'StoneHui_',
    city: '广东广州',
    avatar: avatarImg,
    slogan: '做程序员，而不是 Android 程序员！'
  }
  labelList = [
    'Android',
    'Kotlin',
    'Flutter',
    'Cocos Creator',
    '微信小游戏',
    '微信小程序',
    'Taro',
    'Vue'
  ]
  projectList = [
    {
      name: 'GitHub',
      image: githubImg,
      imageBg: '#212428',
      url: 'https://github.com/shichaohui'
    },
    {
      name: '游戏',
      image: gameImg,
      imageBg: '#3CDFE7',
      url: '/game'
    },
    {
      name: 'BRVAH',
      image: brvahImg,
      imageBg: 'transparent',
      url: 'https://github.com/CymChad/BaseRecyclerViewAdapterHelper'
    },
    {
      name: '简书',
      image: jianShuImg,
      imageBg: '#FFFFFF',
      url: 'https://www.jianshu.com/u/2cbd13c2ceb8'
    },
    {
      name: '掘金',
      image: jueJinImg,
      imageBg: '#0061ff',
      url: 'https://juejin.im/user/57df619f5bbb50005e6c072a'
    }
  ]

  // 查看项目
  viewProject(url: string) {
    if (/^https?:\/\/.+/.test(url)) {
      window.location.href = url
    } else {
      this.$router.push({ path: url })
    }
  }
}
