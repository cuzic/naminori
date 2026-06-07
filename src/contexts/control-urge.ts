import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'control-urge',
  icon: '🎮',
  sortOrder: 10.7,
  applicableTechniques: [
    'circle-of-influence',
    'control-cost',
    'autonomy-acknowledgment',
    'locus-of-control',
    'radical-acceptance',
    'defusion',
    'needs-inventory',
    'detachment',
    'nvc',
    'i-message',
    'values-compass',
    'cognitive-distortions',
    'rumination-interrupt',
    'self-compassion-3steps',
    'wise-mind',
    'reframing',
    'check-the-facts',
  ],
  i18n: {
    ja: {
      label: '思い通りにしたくて疲れる',
      description: '人をコントロール・支配したい欲求と、それに振り回される消耗をほぐす',
      impulse: '「相手を思い通りにしたい・変えなければ」という強迫的な感覚',
      behavior: '人をコントロール・支配しようとし続けること',
      condition: '支配欲・コントロール強迫',
      situation: '相手が思い通りに動かないとき・自分の基準から外れたとき・不確実な状況のとき',
      goal: '変えられるものに集中し、変えられないものを手放すこと',
      obstacle: '「相手を変えれば楽になる」という錯覚・コントロールの幻想・不信感',
      trigger: '相手の言動・予測不能な状況・自分の基準が通らないとき',
      reward: '本当の意味でのつながり・消耗からの解放・自分の人生への集中',
    },
  },
});
