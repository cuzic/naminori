import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'approval-seeking',
  icon: '🪞',
  sortOrder: 9.5,
  applicableTechniques: [
    'needs-inventory',
    'core-beliefs',
    'self-compassion-3steps',
    'inner-critic',
    'best-friend-test',
    'shame-resilience',
    'defusion',
    'self-as-context',
    'values-compass',
    'identity-statement',
    'expansion',
    'radical-acceptance',
    'loving-kindness',
    'gradual-sharing',
    'emotion-labeling',
    'anger-iceberg',
    'cognitive-reappraisal',
    'reframing',
    'wise-mind',
  ],
  i18n: {
    ja: {
      label: '受け入れられないと不安',
      description: '承認・肯定を求め続ける気持ちと、期待しすぎてしまうパターンをほぐす',
      impulse: '「認めてほしい」「受け入れてほしい」という渇望・期待しすぎてしまう感覚',
      behavior: '承認を求め続けること・肯定してくれる人を探し続けること',
      condition: '承認欲求・拒絶への過敏さ',
      situation: '否定された・無視された・期待した反応が返ってこなかったとき',
      goal: '自分の内側に安心の源泉を持つこと',
      obstacle: '「認められないと自分に価値がない」という信念・拒絶への恐れ',
      trigger: '他人の反応・承認が得られない瞬間・評価される状況',
      reward: '自己承認・揺るがない安心感・本物のつながり',
    },
  },
});
