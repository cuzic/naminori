import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'burnout',
  icon: '🔥',
  sortOrder: 3,
  applicableTechniques: [
    'energy-audit', 'work-detach', 'rest-types', 'body-scan', 'values-compass',
    'self-compassion-3steps', 'boundary-message', 'please-check',
    'problem-solving', 'gratitude-visit', 'three-good-things',
    'loving-kindness', 'perma-check', 'flow-activity',
    'meaning-work', 'strengths-use', 'best-possible-self',
    'growth-mindset', 'compassion-break', 'breathing-478',
    'progressive-relaxation', 'grounding-54321', 'sensory-refuge',
    'emotional-granularity', 'somatic-reset', 'coping-anchor',
    'tiny-habits', 'behavioral-activation',
    'fresh-start', 'motivation-source', 'identity-statement',
  ],
  i18n: {
    ja: {
      label: 'もう何もしたくない',
      description: '疲弊した状態からエネルギーを取り戻す',
      impulse: '回復したい気持ち',
      behavior: '意識的に休息と回復を取ること',
      condition: '燃え尽き症候群',
      situation: '何もやる気が起きないとき・疲れているのに休めないとき',
      goal: '持続可能なペースで生活できるようになること',
      obstacle: '罪悪感・完璧主義・休息できない信念',
      trigger: '疲れを感じたとき・モチベーションが湧かないとき',
      reward: 'エネルギーの回復・仕事への意欲・自分への優しさ',
    },
  },
});
