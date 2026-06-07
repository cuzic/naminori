import { defineContext } from '../lib/context';
import { approachBase } from './_approach';

export default defineContext({
  ...approachBase,
  id: 'meditation',
  icon: '🧘',
  sortOrder: 17,
  applicableTechniques: [...approachBase.applicableTechniques],
  i18n: {
    ja: {
      label: 'ひと息ついて心を整えたい',
      description: '瞑想・マインドフルネスを日課にする',
      impulse: '静かに内省したい気持ち',
      behavior: '瞑想すること・呼吸に集中すること',
      condition: 'ストレスや不安',
      situation: 'バタバタした日・頭がうるさいとき',
      goal: '毎朝○分瞑想すること',
      obstacle: '雑念・時間がない・効果が感じられない',
      trigger: '起床直後・同じ場所・同じクッション',
      reward: '心の静けさ・感情の安定・集中力の向上',
      alternative: '深呼吸・軽い散歩・お茶を飲む・自然に触れる',    },
  },
});
