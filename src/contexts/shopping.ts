import { defineContext } from '../lib/context';
import { behavioralBase } from './_behavioral';

export default defineContext({
  ...behavioralBase,
  id: 'shopping',
  icon: '🛍️',
  sortOrder: 8,
  applicableTechniques: [...behavioralBase.applicableTechniques],
  i18n: {
    ja: {
      label: '衝動買い・買い物',
      description: '衝動買い・買い物依存・オンライン購入',
      impulse: '買い物衝動',
      behavior: '買うこと・カートに入れること',
      situation: 'ストレス後・セール時・暇な時',
      bodyEffect: '財務状況・自己嫌悪・片付けへの影響',
      alternative: '24時間待つ・ウィッシュリストに入れるだけ・別のことに集中',
    },
  },
});
