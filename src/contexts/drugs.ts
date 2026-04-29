import { defineContext } from '../lib/context';
import { substanceBase } from './_substance';

export default defineContext({
  ...substanceBase,
  id: 'drugs',
  icon: '💊',
  sortOrder: 3,
  applicableTechniques: [
    ...substanceBase.applicableTechniques,
    'harm-reduction',
  ],
  i18n: {
    ja: {
      label: '薬物・市販薬',
      description: '違法薬物・市販薬の乱用・過剰服薬',
      impulse: '薬物への渇望',
      behavior: '使用すること',
      condition: '薬物依存症',
      situation: 'ストレス時・痛みを感じた時・孤独な夜',
      bodyEffect: '脳・臓器・依存耐性への影響',
      alternative: '専門家への連絡・散歩・冷水・信頼できる人に話す',
    },
  },
});
