import { defineContext } from '../lib/context';
import { approachBase } from './_approach';

export default defineContext({
  ...approachBase,
  id: 'study',
  icon: '📚',
  sortOrder: 16,
  applicableTechniques: [...approachBase.applicableTechniques],
  i18n: {
    ja: {
      label: '勉強を続けたい',
      description: '学習習慣・読書・資格取得',
      impulse: '学びたい気持ち',
      behavior: '勉強すること・本を読むこと',
      condition: '学習継続の困難',
      situation: 'やる気が出ないとき・集中できないとき',
      goal: '毎日○分勉強すること',
      obstacle: 'やる気・集中力・スマホの誘惑',
      trigger: '同じ場所・同じ時間・テキストを開くだけ',
      reward: '達成感・知識の蓄積・将来の選択肢',
    },
  },
});
