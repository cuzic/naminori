import { defineContext } from '../lib/context';
import { behavioralBase } from './_behavioral';

export default defineContext({
  ...behavioralBase,
  id: 'gambling',
  icon: '🎰',
  sortOrder: 6,
  applicableTechniques: [...behavioralBase.applicableTechniques],
  i18n: {
    ja: {
      label: 'ギャンブル',
      description: 'パチンコ・競馬・オンラインカジノなど',
      impulse: 'ギャンブル衝動',
      behavior: 'ギャンブルをすること',
      situation: '負けを取り戻したい時・暇な時・給料日後',
      bodyEffect: '財務・人間関係・精神健康への影響',
      alternative: '財布を持たずに外出・別の刺激を探す・支援電話に電話',
    },
  },
});
