import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'codependency',
  icon: '🔗',
  sortOrder: 10,
  applicableTechniques: [
    'self-focus', 'detachment', 'needs-inventory', 'boundary-message', 'wise-mind',
    'nvc', 'values-compass', 'emotion-labeling', 'radical-acceptance',
    'assertion-training', 'emotional-granularity', 'self-compassion-3steps',
    'defusion', 'cognitive-reappraisal', 'decisional-balance',
    'loving-kindness', 'letter-to-self', 'why-recover',
    'cope-ahead', 'problem-solving', 'gratitude-visit',
    'breathing-478', 'grounding-54321', 'pause-before-react',
  ],
  i18n: {
    ja: {
      label: '誰かに頼りすぎてしまう',
      description: '自分の境界線を取り戻し、自立した関係を作る',
      impulse: '相手を助けずにはいられない衝動',
      behavior: '自分の問題と相手の問題を分けること',
      condition: '共依存',
      situation: '相手のために自分を犠牲にしてしまうとき・相手の感情に振り回されるとき',
      goal: '自分の人生の主役になること',
      obstacle: '罪悪感・見捨てる恐れ・「助けないと愛されない」という信念',
      trigger: '相手が困っているとき・相手から頼られたとき・相手が怒っているとき',
      reward: '自分らしさの回復・対等な関係・自己尊重',
    },
  },
});
