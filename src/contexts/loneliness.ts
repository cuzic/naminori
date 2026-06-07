import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'loneliness',
  icon: '🫂',
  sortOrder: 4,
  applicableTechniques: [
    'connection-plan', 'community-find', 'nvc', 'social-script', 'active-listening',
    'gradual-sharing', 'recovery-disclosure', 'assertion-training',
    'loving-kindness', 'gratitude-visit', 'giving-act',
    'appreciation-express', 'reflective-question', 'concrete-request',
    'repair-talk', 'tell-someone', 'ask-support',
    'self-compassion-3steps', 'three-good-things', 'values-compass',
    'behavioral-activation', 'flow-activity',
  ],
  i18n: {
    ja: {
      label: 'ひとりが辛い',
      description: 'つながりを作り、孤独から抜け出す',
      impulse: 'つながりたい気持ち',
      behavior: '人とのつながりを作る行動をとること',
      condition: '孤独感',
      situation: '誰とも話していない日が続くとき・孤立していると感じるとき',
      goal: '意味あるつながりを少なくとも一人と持つこと',
      obstacle: '人が怖い・拒絶への恐れ・自己開示の難しさ',
      trigger: '週末に一人でいるとき・誰かの楽しそうな投稿を見たとき',
      reward: 'つながりの温かさ・安心感・共に在る喜び',
      bodyEffect: '免疫機能低下・睡眠障害・抑うつ傾向・慢性的な疲労感',    },
  },
});
