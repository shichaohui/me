/** 设备相关工具 */
export default {
  // 是否是移动设备
  isMobile() {
    return /(Android|iPhone|Symbian|Windows Phone)/i.test(navigator.userAgent)
  },
}
