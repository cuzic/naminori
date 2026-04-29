import { defineContext } from '../lib/context';
import { substanceBase } from './_substance';

export default defineContext({
  ...substanceBase,
  id: 'caffeine',
  icon: '☕',
  sortOrder: 5,
  applicableTechniques: [...substanceBase.applicableTechniques],
  i18n: {
    ja: {
      label: 'カフェイン',
      description: 'コーヒー・エナジードリンクの過剰摂取',
      impulse: 'カフェインへの渇望',
      behavior: 'コーヒーやエナジードリンクを飲むこと',
      situation: '眠いとき・集中したいとき・習慣的に手が伸びるとき',
      bodyEffect: '睡眠・心拍・不安感への影響',
      alternative: 'ハーブティー・水・短い仮眠・軽いストレッチ',
    },
  },
});
