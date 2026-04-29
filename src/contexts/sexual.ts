import { defineContext } from '../lib/context';
import { behavioralBase } from './_behavioral';

// スコープ：自慰行為・軽度の性的衝動（性的暴力等は対象外）
export default defineContext({
  ...behavioralBase,
  id: 'sexual',
  icon: '💙',
  sortOrder: 9,
  applicableTechniques: [...behavioralBase.applicableTechniques],
  i18n: {
    ja: {
      label: '性的衝動',
      description: '自慰・軽度の性的衝動のコントロール',
      impulse: '性的衝動',
      behavior: '自慰・性的なコンテンツを見ること',
      situation: '夜・孤独を感じた時・退屈な時',
      bodyEffect: '睡眠・自己認識・関係性への影響',
      alternative: '運動・冷水シャワー・没頭できる活動',
    },
  },
});
