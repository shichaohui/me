import logo from '@/assets/images/works/paoword.jpg'
import { uniqueId } from 'lodash'

/** 泡单词 */
export const paoword: WorksTypes.Works = {
  id: uniqueId(),
  name: '泡单词',
  types: ['Android'],
  logo,
  desc: `动漫背词，过目不忘！根据全脑科学规律，将每一个英文单词变成英语故事，并将英语故事制作成动漫视频。在这里，没有死记硬背，只有忘也忘不掉的快速背词的诀窍！`,
  features: [
    '动漫学习，轻松有趣地记住每一个单词',
    '爆趣网课，助你轻松破解背词诀窍',
    '教材同步，课前课后同步学习',
    '竞技 PK，激发你的背词动力',
    '场景练习，智能制定单词复习计划',
    '目标导向，个性化方案定制',
    '专项复习，听说读写逐个攻破',
    '单词搜索，你的移动小词典',
    '离线下载，随时随地学习',
  ],
  url: 'https://appgallery.huawei.com/#/app/C10477191',
  technologyList: [
    'RxJava',
    'Retrofit',
    'MVP',
    'Glide',
    'SQLite',
    'GreenDao',
    'Socket',
    'ZXing',
    'X5内核',
    'Java',
    'Kotlin',
  ],
  screenshotsList: [
    'https://s4.ax1x.com/2022/03/04/bU1muD.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1ZjO.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1nDe.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1VgK.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1E36.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1uHH.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1MEd.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1QUA.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1l4I.jpg',
    'https://s4.ax1x.com/2022/03/04/bU13Ct.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1Ggf.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1Jv8.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1NDg.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1tKS.jpg',
    'https://s4.ax1x.com/2022/03/04/bU1UbQ.jpg',
  ],
}
