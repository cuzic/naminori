import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'chronic-pain',
  icon: '💊',
  sortOrder: 35,
  applicableTechniques: [
    'pain-pacing', 'pain-diary', 'pain-neuroscience', 'activity-window',
    'pleasant-activity-plan',
    'body-scan', 'progressive-relaxation', 'breathing-478', 'acceptance',
    'values-compass', 'behavioral-activation', 'self-compassion-3steps',
    'grounding-54321', 'radical-acceptance', 'rest-types',
  ],
  i18n: {
    ja: {
      label: '慢性的な痛みとうまく付き合いたい',
      description: '慢性痛の仕組みを理解し、痛みと共存しながら生活を取り戻す',
      impulse: '痛みをなくしたい・痛みから逃れたい衝動',
      behavior: '痛みと長期的に向き合うこと',
      condition: '慢性疼痛',
      situation: '痛みが日常生活に影響しているとき・痛みのために諦めていることがあるとき',
      goal: '痛みがあっても、自分にとって大切なことができるようになること',
      obstacle: '痛みへの恐怖・活動回避・孤立・医療への過度な依存',
      trigger: '痛みが強くなったとき・活動を制限しているとき',
      reward: '活動できる範囲が広がる感覚・痛みへの恐怖が和らぐ感覚',
      bodyEffect: '痛みへの過剰な注意による増幅・活動制限・睡眠への影響',    },
  },
});
