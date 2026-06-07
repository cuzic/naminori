import { defineContext } from '../lib/context';
import { behavioralBase, BEHAVIORAL_TECHNIQUES } from './_behavioral';

export default defineContext({
  ...behavioralBase,
  id: 'eating',
  icon: '🍽️',
  sortOrder: 20,
  applicableTechniques: [
    ...BEHAVIORAL_TECHNIQUES,
    'mindful-eating',
    'hunger-scale',
    'body-image-diary',
    'body-neutral',
    'food-freedom',
    'scale-detox',
  ],
  i18n: {
    ja: {
      label: '食べること（過食）',
      description: '過食・嘔吐・制限など摂食障害全般',
      impulse: '過食衝動',
      behavior: '食べること・嘔吐すること',
      condition: '摂食障害',
      situation: '食後や一人になった時',
      bodyEffect: '消化器系・電解質バランスへの影響',
      alternative: '散歩・日記・冷水・セルフソージング',
    },
  },
});
