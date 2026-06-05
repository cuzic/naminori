import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'trauma',
  icon: '🛡️',
  sortOrder: 32,
  applicableTechniques: [
    'safe-place', 'window-of-tolerance', 'titration', 'pendulation',
    'resource-installation', 'tapping',
    'grounding-54321', 'body-scan', 'somatic-reset', 'cope-ahead',
    'coping-anchor', 'radical-acceptance', 'breathing-478', 'progressive-relaxation',
    'self-compassion-3steps', 'emotional-granularity', 'sensory-refuge',
  ],
  i18n: {
    ja: {
      label: '過去のトラウマに苦しんでいる',
      description: '安全を感じながら、少しずつトラウマを処理する方法を学ぶ',
      impulse: 'フラッシュバック・回避・過覚醒の感覚',
      behavior: '過去の辛い体験に反応してしまうこと',
      condition: 'トラウマ・PTSD',
      situation: '過去の出来事が繰り返し思い浮かぶとき・特定の状況で強い不安や恐怖を感じるとき',
      goal: '過去の体験に支配されず、今この瞬間を安全に生きられるようになること',
      obstacle: '回避行動・過覚醒・身体の緊張・孤立',
      trigger: '過去を思い出させる場所・音・匂い・人・出来事に遭遇したとき',
      reward: '今ここにいる安心感・神経系の落ち着き・自分の回復力への信頼',
    },
  },
});
