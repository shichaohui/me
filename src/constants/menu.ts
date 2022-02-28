export interface MenuItem {
  name: string
  url: string
}

/** 主菜单 */
const menu: MenuItem[] = [
  {
    name: '作品',
    url: '/works',
  },
  {
    name: '游戏',
    url: '/game',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/shichaohui',
  },
  {
    name: '掘金',
    url: 'https://juejin.im/user/57df619f5bbb50005e6c072a',
  },
  {
    name: '简书',
    url: 'https://www.jianshu.com/u/2cbd13c2ceb8',
  },
  {
    name: 'CSDN',
    url: 'https://blog.csdn.net/u014165119',
  },
]

export default menu
