import { defineContext } from '../lib/context';
import { behavioralBase } from './_behavioral';

export default defineContext({
  ...behavioralBase,
  id: 'smartphone',
  icon: '📱',
  sortOrder: 7,
  applicableTechniques: [...behavioralBase.applicableTechniques],
  i18n: {
    ja: {
      label: 'スマホ・SNS・ゲーム',
      description: 'スマホ依存・SNS過剰利用・ゲーム依存',
      impulse: 'スマホを触りたい衝動',
      behavior: 'スマホを開くこと・SNSをチェックすること',
      condition: 'スマホ・SNS依存',
      situation: '寝る前・暇な時・不安を感じた時',
      bodyEffect: '睡眠・集中力・人間関係への影響',
      alternative: '本を読む・散歩・スマホを別の部屋に置く',
    },
  },
});
