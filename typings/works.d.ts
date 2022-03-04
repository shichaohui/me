/** 我的作品相关的类型声明 */
declare namespace WorksTypes {
  /** 作品 */
  interface Works {
    /** 作品 id */
    id: string
    /** 作品类型 */
    types: ('Android' | 'iOS' | '微信小程序' | 'H5' | 'Web')[]
    /** 作品名称 */
    name: string
    /** 作品 logo */
    logo: string
    /** 作品描述 */
    desc: string
    /** 作品地址 */
    url?: string
    /** 作品源码地址 */
    sourceUrl?: string
    /** 使用技术 */
    technologyList: string[]
    /** 作品截图 */
    screenshotsList: string[]
  }
}
