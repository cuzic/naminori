import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'impostor-syndrome',
  icon: '🎭',
  sortOrder: 33,
  applicableTechniques: [
    'achievement-evidence',
    'impostor-normalize',
    'competence-journal',
    'feedback-portfolio',
    'luck-vs-skill',
    'inner-critic',
    'shame-resilience',
    'self-compassion-3steps',
    'cognitive-reappraisal',
    'thought-record',
    'core-beliefs',
    'growth-mindset',
    'reframing',
    'self-distancing',
    'defusion',
    'cognitive-distortions',
    'life-position',
    'survival-strategy',
  ],
  i18n: {
    ja: {
      label: '自分だけが嘘をついているみたい',
      description: '「詐欺師」という感覚に反証して、自分の実力と成長を正当に評価する',
      impulse: '自分は評価されるほどの実力がないという感覚',
      behavior: '成功を運や偶然に帰属させ、失敗を全て自分の無能さのせいにすること',
      condition: 'インポスター症候群',
      situation: '新しい役割・昇進・評価を受けたとき・「なぜ自分が選ばれたのか」と思うとき',
      goal: '自分の実力と成長を正当に認識し、自信を持って行動できること',
      obstacle: '完璧主義・比較癖・失敗への過剰な恐れ・フィードバックの歪んだ受け取り方',
      trigger: '新しい挑戦の前・高い評価を受けたとき・失敗したとき',
      reward: '自分の成長への公平な認識・失敗を恐れずに挑戦できる感覚',
      bodyEffect: '慢性的な不安・過労・パフォーマンスへの影響・燃え尽き',    },
  },
});
