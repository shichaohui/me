/**
 * 我的作品相关的类型声明
 */
declare namespace Work {
  /**
   * 作品类型
   */
  type WorkType = 'Android' | 'iOS' | '微信小程序' | '微信小游戏' | '微信公众号' | 'H5' | 'Web'

  /**
   * 作品
   */
  interface Work {
    /** 作品 id */
    id: string
    /** 作品名称 */
    name: string
    /** 作品类型 */
    types: WorkType[]
    /** 作品 logo */
    logo: string
    /** 作品描述 */
    desc: string
    /** 作品功能列表 */
    features: string[]
    /** 作品地址 */
    url?: string
    /** 作品源码地址 */
    codeUrl?: string
    /** 使用技术 */
    technologyList: string[]
    /** 作品截图 */
    screenshotList: string[]
  }

  /**
   * 其他作品
   */
  interface OtherWork {
    /** 作品 id */
    id: string
    /** 作品名称 */
    name: string
    /** 作品类型 */
    types: WorkType[]
    /** 作品描述 */
    desc: string
    /** 使用技术 */
    technologyList: string[]
  }
}
