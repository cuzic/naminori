import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'work-life-balance',
  icon: '⚖️',
  sortOrder: 28,
  applicableTechniques: [
    'role-switching-ritual',
    'digital-sunset',
    'ideal-week-design',
    'off-identity',
    'work-detach',
    'shutdown-ritual',
    'boundary-message',
    'energy-audit',
    'values-compass',
    'rest-types',
    'needs-inventory',
    'please-check',
    'self-compassion-3steps',
    'problem-solving',
    'behavioral-activation',
    'rumination-interrupt',
  ],
  i18n: {
    ja: {
      label: '仕事に追われて休めない',
      description: '仕事とプライベートを意図的に切り分けて回復を確保する',
      impulse: '仕事から離れたいのに離れられない感覚',
      behavior: 'オフの時間に仕事のことを考え続けること',
      condition: 'ワークライフバランスの崩れ',
      situation: '仕事が終わっても頭から離れないとき・休日も仕事の連絡が来るとき',
      goal: 'オフタイムを自分のものにして回復できるようになること',
      obstacle: '罪悪感・常時接続・境界線の曖昧さ・「もう少し」の積み重ね',
      trigger: '退勤後も仕事の通知が来るとき・休暇中でも仕事のことを考えているとき',
      reward: 'オフタイムの充実感・翌日への活力・プライベートへの充足感',
      bodyEffect: '慢性疲労・睡眠障害・燃え尽き・心血管への長期リスク',    },
  },
});
