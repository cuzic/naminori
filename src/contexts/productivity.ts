import { defineContext } from '../lib/context';
import { approachBase } from './_approach';

export default defineContext({
  ...approachBase,
  id: 'productivity',
  icon: '⚡',
  sortOrder: 19,
  applicableTechniques: [
    // 優先順位・計画
    'mit-selection',
    'task-batching',
    'weekly-review',
    // 集中ブロック
    'deep-work-block',
    'pomodoro',
    'environment-design',
    'stimulus-control',
    // 着手・先延ばし対策
    'zeigarnik-start',
    'two-minute-rule',
    'task-aversion-check',
    'implementation-intention',
    'if-then-planning',
    // 仕事の終わり方
    'shutdown-ritual',
    'work-detach',
    // エネルギー管理
    'energy-audit',
    'please-check',
    // アイデア生成
    'question-storming',
    'reverse-brainstorm',
    'random-word',
    // 習慣・継続
    'tiny-habits',
    'habit-stacking',
    'identity-statement',
    'motivation-source',
    'self-monitoring',
    'todays-step',
    'reinforcement-management',
    // 思考・問題解決
    'problem-solving',
    'growth-mindset',
    'values-compass',
  ],
  i18n: {
    ja: {
      label: '仕事をうまく回したい',
      description: '集中・優先順位・時間管理で仕事の生産性を上げる',
      impulse: '仕事をうまくこなしたい気持ち',
      behavior: '仕事を効率よく進めること',
      condition: '仕事の生産性・効率',
      situation: 'やることが多すぎるとき・集中できないとき・仕事が終わらないとき',
      goal: '大切な仕事を、決まった時間内に終わらせること',
      obstacle: '割り込み・先延ばし・優先順位の混乱・エネルギー不足',
      trigger: '「何から手をつければいいか分からない」と感じたとき',
      reward: '定時に終わる達成感・「大切な仕事が進んだ」という満足感',
    },
  },
});
