import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'breathing',
  icon: '🌬️',
  sortOrder: 37,
  applicableTechniques: [
    'diaphragm-breathing', 'resonance-breathing', 'alternate-nostril',
    'physiological-sigh', 'coherent-breathing', 'breath-counting',
    'breathing-478', 'box-breathing',
  ],
  i18n: {
    ja: {
      label: '呼吸を整えたい',
      description: '呼吸のテクニックを使って、自律神経を整え、心身を落ち着かせる',
      impulse: '緊張・不安・ストレスで呼吸が浅くなっている感覚',
      behavior: '意識的な呼吸で自律神経を調節すること',
      condition: '呼吸・自律神経調整',
      situation: '緊張しているとき・焦っているとき・気持ちを落ち着かせたいとき',
      goal: '自分の意志で心身の状態を整えられるようになること',
      obstacle: '呼吸への無自覚・浅い習慣的呼吸・継続の難しさ',
      trigger: '緊張・不安を感じたとき・集中したいとき・眠れないとき',
      reward: '心拍が落ち着く感覚・頭がクリアになる感覚・体の緊張がほぐれる感覚',
    },
  },
});
