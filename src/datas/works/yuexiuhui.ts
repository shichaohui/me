import { uniqueId } from 'lodash'
import logo from '@/assets/images/works/yuexiuhui.png'

/** 悦秀会 */
export const yueXiuHui: WorksTypes.Works = {
  id: uniqueId(),
  name: '悦秀会',
  types: ['Android', 'iOS', 'Web', '微信公众号', 'H5'],
  logo,
  desc: `悦秀会是越秀地产客户专享的会员俱乐部，客户可享受各项优惠及个性化服务、精彩纷呈的会员活动、丰富多样的商家联盟资源。
  已购房客户可随时查询购房进展，了解新家的工程进度。
  已入住客户可一键缴纳物业管理费，随时报事报修。
  所有客户均可成为会员经纪人，成功推荐亲友到访、签约或认购，可获得丰厚佣金和积分双重奖励。
  除了上述功能以外，悦秀会还会提供一系列普惠福利及活动。通过每天签到、商城消费等渠道，会员可获得海量积分，免费换购积分商城礼品、欢乐一日游名额等福利！`,
  features: [],
  url: 'https://sj.qq.com/appdetail/com.yuexiuproperty.yxh',
  codeUrl: '',
  technologyList: [
    'Vue',
    'Vuex',
    'uni-app',
    'Axios',
    'ElementUI',
    'Less/Sass',
    'JavaScript',
    'TypeScript',
    'WebPack',
    'Prettier',
    'ESLint',
  ],
  screenshotList: [
    'https://s1.ax1x.com/2023/03/27/ppsyUWq.png',
    'https://s1.ax1x.com/2023/03/27/ppsyNYn.png',
    'https://s1.ax1x.com/2023/03/27/ppsytFs.png',
    'https://s1.ax1x.com/2023/03/27/ppsyJoj.png',
    'https://s1.ax1x.com/2023/03/27/ppsyGwQ.png',
    'https://s1.ax1x.com/2023/03/27/ppsydS0.png',
    'https://s1.ax1x.com/2023/03/27/ppsywlV.png',
    'https://s1.ax1x.com/2023/03/27/ppsy0yT.png',
    'https://s1.ax1x.com/2023/03/27/ppsyrmF.jpg',
    'https://s1.ax1x.com/2023/03/27/ppsyyTJ.jpg',
    'https://s1.ax1x.com/2023/03/27/ppsyck9.jpg',
    'https://s1.ax1x.com/2023/03/27/ppsysw4.jpg',
    'https://s1.ax1x.com/2023/03/27/ppsyBOU.jpg',
    'https://s1.ax1x.com/2023/03/27/ppsygYR.jpg',
    'https://s1.ax1x.com/2023/03/27/ppsy2f1.jpg',
  ],
}
