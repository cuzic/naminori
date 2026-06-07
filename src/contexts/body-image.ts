import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'body-image',
  icon: '🪞',
  sortOrder: 34,
  applicableTechniques: [
    'functional-appreciation', 'media-fast', 'mirror-exposure',
    'size-diversity-exposure', 'body-story',
    'body-neutral', 'scale-detox', 'body-image-diary',
    'self-compassion-3steps', 'cognitive-reappraisal', 'food-freedom',
    'defusion', 'values-compass', 'inner-critic',
  ],
  i18n: {
    ja: {
      label: '自分の体が嫌い',
      description: '外見への批判的な目を和らげ、体との関係を穏やかにする',
      impulse: '自分の体への嫌悪感・外見を恥じる感覚',
      behavior: '体や外見のことを繰り返し気にし、批判し続けること',
      condition: 'ボディイメージの問題・外見への執着',
      situation: '鏡を見たとき・写真に写ったとき・誰かと外見を比べたとき',
      goal: '体と穏やかな関係を結び、外見以外に意識を向けられるようになること',
      obstacle: 'メディアの理想像・比較癖・批判的な自己対話・体への執着',
      trigger: '鏡・体重計・SNSを見たとき・水着になるときなど',
      reward: '体への批判が和らぐ感覚・自分らしく生きられる感覚',
      bodyEffect: '自己否定感・回避行動・摂食行動への影響・社会参加の制限',    },
  },
});
