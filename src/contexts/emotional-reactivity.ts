import { defineContext } from '../lib/context';
import { behavioralBase, BEHAVIORAL_TECHNIQUES } from './_behavioral';

export default defineContext({
  ...behavioralBase,
  id: 'emotional-reactivity',
  icon: '🌡️',
  sortOrder: 15,
  applicableTechniques: [
    ...BEHAVIORAL_TECHNIQUES,
    'box-breathing',
    'emotion-labeling',
    'check-the-facts',
  ],
  i18n: {
    ja: {
      label: '感情の爆発をおさえる',
      description: '感情的な反応をコントロールする',
      impulse: '感情的な反応衝動',
      behavior: '落ち着いて反応すること',
      condition: '感情的な反応の問題',
      situation: 'カッとなってしまうとき・後から後悔することを言ってしまうとき',
      goal: '感情的にならずに状況に対処すること',
      obstacle: '反射的な言動・感情の高ぶり',
      trigger: '批判されたとき・期待を裏切られたとき・不公平を感じたとき',
      reward: '落ち着いた対話・後悔のない言動・自己肯定感の向上',
    },
  },
});
