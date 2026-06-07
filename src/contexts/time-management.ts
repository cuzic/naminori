import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'time-management',
  icon: '⏱️',
  sortOrder: 29,
  applicableTechniques: [
    'time-audit', 'eisenhower-matrix', 'time-blocking', 'parkinson-defense',
    'pomodoro', 'deep-work-block', 'mit-selection', 'task-batching',
    'weekly-review', 'shutdown-ritual', 'implementation-intention', 'if-then-planning',
    'task-aversion-check', 'zeigarnik-start', 'two-minute-rule',
    'problem-solving', 'values-compass',
    'energy-audit',
    'emotion-check-in',
    'needs-inventory',
    'inner-critic',
    'boundary-message',
    'assertive-refusal',
    'good-enough',
    'decatastrophize',
    'cognitive-load-diet',
    'option-reduction',
    'tombstone-values',
    'self-compassion-3steps',
  ],
  i18n: {
    ja: {
      label: '時間が全然足りない',
      description: '優先順位と時間の使い方を整えて、大切なことに集中する',
      impulse: 'やるべきことが多すぎて追われている感覚',
      behavior: '緊急なことに反応し続けて重要なことが後回しになること',
      condition: '時間管理・優先順位の混乱',
      situation: 'やることが山積みのとき・何から手をつけていいか分からないとき',
      goal: '大切なことを決まった時間内に終わらせること',
      obstacle: '割り込み・完璧主義・見積もりの甘さ・優先順位の混乱',
      trigger: 'タスクが溜まっていると感じたとき・締め切りが近づいているとき',
      reward: '「今日やるべきことが終わった」という達成感・時間の余白',
      alternative: 'タスクの優先順位付け・所要時間の見積もり直し・断る練習',
      bodyEffect: '慢性的な疲弊・睡眠不足・集中力低下・バーンアウトリスク',    },
  },
});
