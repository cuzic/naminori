import { defineContext } from '../lib/context';
import { approachBase } from './_approach';

export default defineContext({
  ...approachBase,
  id: 'exercise',
  icon: '🏃',
  sortOrder: 14,
  applicableTechniques: [...approachBase.applicableTechniques],
  i18n: {
    ja: {
      label: '運動を続けたい',
      description: '運動習慣を作る・続ける',
      impulse: '体を動かしたい気持ち',
      behavior: '運動すること',
      condition: '運動継続の困難',
      situation: '疲れて帰ってきたとき・天気が悪いとき',
      goal: '週○回運動すること',
      obstacle: '疲れ・面倒くさい・時間がない',
      trigger: '着替えるだけ・玄関を出るだけ',
      reward: '達成感・エンドルフィン・体の変化',
    },
  },
});
