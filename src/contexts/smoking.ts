import { defineContext } from '../lib/context';
import { substanceBase } from './_substance';

export default defineContext({
  ...substanceBase,
  id: 'smoking',
  icon: '🚬',
  sortOrder: 4,
  applicableTechniques: [...substanceBase.applicableTechniques],
  i18n: {
    ja: {
      label: 'タバコ・ニコチン',
      description: '喫煙・ニコチン依存',
      impulse: '喫煙衝動',
      behavior: '吸うこと',
      situation: 'コーヒーの後・ストレス時・食後',
      bodyEffect: '肺・心臓・皮膚・ニコチン耐性への影響',
      alternative: 'ガム・深呼吸・水を飲む・手を動かす',
    },
  },
});
