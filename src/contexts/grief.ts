import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'grief',
  icon: '🕊️',
  sortOrder: 31,
  applicableTechniques: [
    'grief-wave', 'continuing-bonds', 'dual-process-grief', 'loss-letter',
    'grief-ritual', 'meaning-reconstruction',
    'self-compassion-3steps', 'loving-kindness', 'radical-acceptance',
    'letter-to-self', 'emotion-labeling', 'acceptance', 'emotional-granularity',
    'savoring', 'connection-plan', 'tell-someone', 'rain-meditation',
  ],
  i18n: {
    ja: {
      label: '大切なものを失った',
      description: '喪失の痛みと共に生き、少しずつ前へ進む力を見つける',
      impulse: '悲しみ・喪失感・何もする気になれない感覚',
      behavior: '悲しみと向き合うこと',
      condition: '悲嘆・喪失（失業、離別、死別）',
      situation: '大切な人や関係・仕事・健康を失ったとき',
      goal: '喪失を抱えながらも、自分の人生を生き続けられるようになること',
      obstacle: '悲しみを表現することへの抵抗・「早く立ち直るべき」という圧力・孤独感',
      trigger: '喪失を思い出す出来事・記念日・似た場所や物に触れたとき',
      reward: '悲しみを安全に感じられる感覚・少しずつ回復していく実感・つながりの温かさ',
    },
  },
});
