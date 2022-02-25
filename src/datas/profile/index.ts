import avatarImg from '@/assets/images/avatar.png'

export const userInfo = {
  fullName: '石朝辉',
  nickname: 'StoneHui',
  email: '464206200@qq.com',
  wechat: 'StoneHui_',
  city: '广东广州',
  avatar: avatarImg,
}

export const labelList = [
  'React',
  'Taro',
  'Vue',
  '微信小程序',
  '微信小游戏',
  'Android',
  'Flutter',
  'Cocos Creator',
  'Kotlin',
  'JavaScript',
  'TypeScript',
]

import githubImg from '@/assets/images/project/github.svg'
import gameImg from '@/assets/images/project/game.svg'
import jianShuImg from '@/assets/images/project/jianshu.svg'
import jueJinImg from '@/assets/images/project/juejin.svg'
import csdnImg from '@/assets/images/project/csdn.png'

export const projectList = [
  {
    name: '游戏',
    desc: '石朝辉的小游戏',
    image: gameImg,
    imageBg: '#3CDFE7',
    url: '/game',
  },
  {
    name: 'GitHub',
    desc: '石朝辉的GitHub',
    image: githubImg,
    imageBg: '#212428',
    url: 'https://github.com/shichaohui',
  },
  {
    name: '掘金',
    desc: '石朝辉的掘金',
    image: jueJinImg,
    imageBg: '#0061ff',
    url: 'https://juejin.im/user/57df619f5bbb50005e6c072a',
  },
  {
    name: '简书',
    desc: '石朝辉的简书',
    image: jianShuImg,
    imageBg: '#FFFFFF',
    url: 'https://www.jianshu.com/u/2cbd13c2ceb8',
  },
  {
    name: 'CSDN',
    desc: '石朝辉的CSDN',
    image: csdnImg,
    imageBg: '#FFFFFF',
    url: 'https://blog.csdn.net/u014165119',
  },
]
