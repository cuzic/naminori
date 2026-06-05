import { defineContext } from '../lib/context';
import { mentalBase } from './_mental';

export default defineContext({
  ...mentalBase,
  id: 'decision-making',
  icon: '🤔',
  sortOrder: 30,
  applicableTechniques: [
    '10-10-10', 'regret-minimization', 'satisficing', 'coin-flip-test',
    'decision-journal', 'option-reduction',
    'decisional-balance', 'woop', 'values-compass', 'worry-tree',
    'cognitive-reappraisal', 'pros-cons-urge', 'problem-solving',
    'rumination-interrupt', 'good-enough', 'self-distancing',
  ],
  i18n: {
    ja: {
      label: '決められない・選べない',
      description: '意思決定の方法を変えて、選択疲れと先送りから抜け出す',
      impulse: '決断できずにいる感覚・選択肢の多さに圧倒される感覚',
      behavior: '決断を先送りしたり、決めた後も悩み続けること',
      condition: '意思決定困難・選択疲れ',
      situation: '重要な選択を迫られているとき・選択肢が多すぎて動けないとき',
      goal: '自分の価値観に沿った選択を、適切なタイミングでできるようになること',
      obstacle: '完璧主義・情報過多・後悔への恐れ・他者の目',
      trigger: '選択を迫られたとき・決断できずに同じことを何度も考えているとき',
      reward: '前進できる安心感・自分の判断への信頼・決断後の解放感',
    },
  },
});
