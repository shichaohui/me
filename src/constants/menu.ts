export interface MenuItem {
  name: string
  url: string
  children?: MenuItem[]
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
    name: '博客',
    url: '/blog',
    children: [
      {
        name: '个人博客',
        url: 'https://shichaohui.github.io/blog',
      },
      {
        name: '掘金',
        url: 'https://juejin.cn/user/4441682704866759/posts',
      },
      {
        name: '简书',
        url: 'https://www.jianshu.com/u/2cbd13c2ceb8',
      },
      {
        name: 'CSDN',
        url: 'https://blog.csdn.net/u014165119',
      },
    ],
  },
]

export default menu
