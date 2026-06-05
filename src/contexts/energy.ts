import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'energy',
  icon: '⚡',
  sortOrder: 36,
  applicableTechniques: [
    'ultradian-rhythm', 'energy-map', 'drain-gain-list', 'micro-recovery',
    'cognitive-load-diet',
    'energy-audit', 'rest-types', 'halt-check', 'sleep-hygiene',
    'please-check', 'behavioral-activation', 'morning-walk',
    'values-compass', 'self-compassion-3steps',
  ],
  i18n: {
    ja: {
      label: 'いつも疲れている',
      description: '疲労のパターンを把握して、エネルギーを回復・管理する方法を見つける',
      impulse: '疲れているのにやらなければならないことがある感覚',
      behavior: 'エネルギーを意識的に管理すること',
      condition: '慢性的な疲労・エネルギー不足',
      situation: 'いつも疲れている・何もやる気になれない・集中できないとき',
      goal: '一日を通じて安定したエネルギーで過ごせるようになること',
      obstacle: '回復なしの連続稼働・間違った回復方法・エネルギー収支の無自覚',
      trigger: '疲れを感じたとき・やる気が出ないとき・何もしたくないとき',
      reward: 'エネルギーの回復感・集中できる時間の増加・生活への意欲',
    },
  },
});
