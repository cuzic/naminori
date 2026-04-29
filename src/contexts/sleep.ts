import { defineContext } from '../lib/context';
import { approachBase } from './_approach';

export default defineContext({
  ...approachBase,
  id: 'sleep',
  icon: '😴',
  sortOrder: 10,
  applicableTechniques: [...approachBase.applicableTechniques],
  i18n: {
    ja: {
      label: '睡眠を整える',
      description: '睡眠の質・量を改善する',
      impulse: '早く寝たい気持ち',
      behavior: '決まった時間に眠ること',
      condition: '睡眠の問題',
      situation: '夜更かしが続いているとき・スマホが手放せないとき',
      goal: '毎日○時間眠ること',
      obstacle: '夜更かし・スマホ・眠れない不安',
      trigger: '就寝1時間前・アラームを設定したとき',
      reward: '朝の爽快感・集中力の向上',
    },
  },
});
