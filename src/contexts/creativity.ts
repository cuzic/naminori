import { defineContext } from '../lib/context';
import { approachBase } from './_approach';

export default defineContext({
  ...approachBase,
  id: 'creativity',
  icon: '🎨',
  sortOrder: 18,
  applicableTechniques: [
    // アイデア生成
    'question-storming',
    'reverse-brainstorm',
    'random-word',
    // 創造的ブロック
    'freewriting',
    'quantity-first',
    'bad-art-day',
    'good-enough',
    'decatastrophize',
    // 批判への恐れ
    'shame-resilience',
    'exposure-ladder',
    'best-friend-test',
    'gradual-sharing',
    // インナークリティック
    'inner-critic',
    'defusion',
    'self-compassion-3steps',
    'self-distancing',
    // 遊びとしての創造
    'flow-activity',
    'creative-input',
    'savoring',
    // 習慣として続ける
    'tiny-habits',
    'habit-stacking',
    'implementation-intention',
    'identity-statement',
    'environment-design',
    'temptation-bundling',
    // その他
    'growth-mindset',
    'values-compass',
    'meaning-work',
    'strengths-use',
    'strengths-inventory',
    'best-possible-self',
    'behavioral-activation',
    'fresh-start',
    'rest-types',
    'motivation-source',
  ],
  i18n: {
    ja: {
      label: '創作・趣味を楽しみたい',
      description: '絵・文章・音楽・工作など、創造的な活動を始めて続ける',
      impulse: '創りたい・表現したい気持ち',
      behavior: '創造的な活動をすること',
      condition: '創造性・趣味の継続',
      situation: 'やりたいのに手がつかないとき・完璧主義で動けないとき・インスピレーションが枯れているとき',
      goal: '判断なしに創造を楽しめること',
      obstacle: '完璧主義・内なる批評家・インプット不足・時間がない',
      trigger: '「うまくできないかも」と思ったとき・白紙のページを前にしたとき',
      reward: 'フロー体験・自己表現の喜び・「続けている自分」への信頼感',
    },
  },
});
