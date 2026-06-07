import { defineContext } from '../lib/context';
import { substanceBase } from './_substance';

export default defineContext({
  ...substanceBase,
  id: 'alcohol',
  icon: '🍺',
  sortOrder: 25,
  showCrisis: true,
  applicableTechniques: [...substanceBase.applicableTechniques],
  i18n: {
    ja: {
      label: 'アルコール',
      description: '飲酒・お酒との付き合い方',
      impulse: '飲酒衝動',
      behavior: '飲むこと',
      condition: 'アルコール依存症',
      situation: '帰宅後・ストレス時・飲み会の後',
      bodyEffect: '肝臓・睡眠・記憶への影響',
      alternative: '炭酸水・ノンアルコール飲料・入浴',
    },
  },
});
