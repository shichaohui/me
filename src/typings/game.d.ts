/**
 * 游戏相关的类型声明
 */
declare namespace Game {
  /**
   * 游戏
   */
  interface Game {
    id: string
    /** 游戏名称 */
    name: string
    /** 游戏 logo */
    logo: string
    /** 游戏描述 */
    desc: string
    /** 游戏详情链接 */
    detailUrl: string
    /** 游戏源码链接 */
    codeUrl?: string
    /** 游戏试玩链接 */
    playUrl?: string
  }
}
