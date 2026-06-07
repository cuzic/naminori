import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'self-esteem',
  icon: '🌱',
  sortOrder: 9,
  applicableTechniques: [
    'strengths-inventory', 'inner-critic', 'shame-resilience', 'three-good-things', 'self-compassion-3steps',
    'best-possible-self', 'loving-kindness', 'gratitude-visit',
    'letter-to-self', 'kind-words', 'growth-mindset', 'use-strength',
    'strengths-use', 'three-wins', 'why-recover', 'values-compass',
    'reframing', 'cognitive-reappraisal', 'emotional-granularity',
    'defusion', 'compassion-break', 'giving-act',
    'tiny-habits', 'behavioral-activation',
    'identity-statement', 'motivation-source',
  ],
  i18n: {
    ja: {
      label: '自分に自信がない',
      description: '自分を認め、大切にする感覚を育てる',
      impulse: '自己肯定感を高めたい気持ち',
      behavior: '自分を認める行動をとること',
      condition: '自己肯定感の低さ',
      situation: '自分を責めてしまうとき・自信が持てないとき',
      goal: '自分の存在を肯定的に感じられること',
      obstacle: '自己批判・比較・完璧主義',
      trigger: 'ミスをしたとき・人と比較したとき・褒められても素直に受け取れないとき',
      reward: '自己受容の感覚・自分への優しさ・行動できる自信',
    },
  },
});
