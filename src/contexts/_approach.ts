import { SHARED_TECHNIQUES } from './_shared';

// Techniques for habit-formation / approach contexts
export const APPROACH_TECHNIQUES = [
  ...SHARED_TECHNIQUES,
  'tiny-habits',
  'implementation-intention',
  'habit-stacking',
  'behavioral-activation',
  'temptation-bundling',
  'self-monitoring',
  'two-minute-rule',
  'environment-design',
  'if-then-planning',
  'opposite-action',
  'please-check',
  'ask-support',
  'cope-ahead',
  'reinforcement-management',
  'strengths-use',
  'best-possible-self',
] as const;

export const approachBase = {
  direction: 'approach' as const,
  applicableTechniques: APPROACH_TECHNIQUES,
};
