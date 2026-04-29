import { defineContext } from '../lib/context';
import { behavioralBase } from './_behavioral';

export default defineContext({
  ...behavioralBase,
  id: 'anxiety',
  icon: '😰',
  sortOrder: 17,
  applicableTechniques: [
    'worry-time', 'worry-tree', 'exposure-ladder', 'breathing-478', 'grounding-54321',
    'cognitive-reappraisal', 'defusion', 'body-scan', 'cope-ahead',
    'check-the-facts', 'decatastrophize', 'radical-acceptance',
    'pause-before-react', 'box-breathing', 'somatic-reset',
    'wise-mind', 'values-compass', 'emotional-granularity',
    'coping-anchor', 'compassion-break', 'progressive-relaxation',
    'problem-solving', 'reframing', 'three-good-things',
    'self-compassion-3steps', 'loving-kindness',
  ],
  i18n: {
    ja: {
      label: '不安をやわらげる',
      description: '慢性的な心配・不安感をコントロールする',
      impulse: '不安・心配が止まらない感覚',
      behavior: '不安と上手につきあうこと',
      condition: '不安・心配しすぎ',
      situation: '心配が頭から離れないとき・最悪の事態を考えてしまうとき',
      goal: '不安に振り回されずに日常を送ること',
      obstacle: '破局化思考・コントロール願望・回避',
      trigger: '将来のことを考えたとき・不確かな状況のとき・夜一人でいるとき',
      reward: '心の平静・今この瞬間への集中・行動できる安心感',
    },
  },
});
