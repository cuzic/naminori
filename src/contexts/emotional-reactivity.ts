import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';
import { BEHAVIORAL_TECHNIQUES } from './_behavioral';

const PRIORITY = [
  'anger-iceberg', 'pause-before-react', 'cognitive-reappraisal',
  'stop-skill', 'tipp', 'emotion-labeling', 'check-the-facts', 'box-breathing',
] as const;

export default defineContext({
  ...mentalBase,
  id: 'emotional-reactivity',
  icon: '🌡️',
  sortOrder: 8,
  applicableTechniques: [
    ...PRIORITY,
    ...BEHAVIORAL_TECHNIQUES.filter(t => !PRIORITY.includes(t as typeof PRIORITY[number])),
  ],
  i18n: {
    ja: {
      label: '感情が爆発してしまう',
      description: '感情的な反応をコントロールする',
      impulse: '感情的な反応衝動',
      behavior: '落ち着いて反応すること',
      condition: '感情的な反応の問題',
      situation: 'カッとなってしまうとき・後から後悔することを言ってしまうとき',
      goal: '感情的にならずに状況に対処すること',
      obstacle: '反射的な言動・感情の高ぶり',
      trigger: '批判されたとき・期待を裏切られたとき・不公平を感じたとき',
      reward: '落ち着いた対話・後悔のない言動・自己肯定感の向上',
      alternative: '深呼吸・その場を離れる・冷水を飲む・手を動かす',    },
  },
});
