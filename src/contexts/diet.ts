import { defineContext } from '../lib/context';
import { approachBase } from './_approach';

export default defineContext({
  ...approachBase,
  id: 'diet',
  icon: '🥗',
  sortOrder: 12,
  applicableTechniques: [...approachBase.applicableTechniques],
  i18n: {
    ja: {
      label: '食事を整える',
      description: '健康的な食習慣・ダイエット',
      impulse: '食事を整えたい気持ち',
      behavior: 'バランスよく食べること',
      condition: '食習慣の乱れ',
      situation: '外食が続いているとき・間食が止まらないとき',
      goal: '野菜を毎食食べること・間食を減らすこと',
      obstacle: '忙しさ・食欲・外食の誘い',
      trigger: '食事の準備をするとき・お腹が空いてきたとき',
      reward: '体の軽さ・肌の変化・エネルギーの安定',
    },
  },
});
