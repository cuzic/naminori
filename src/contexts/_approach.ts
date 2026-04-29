import { SHARED_TECHNIQUES } from './_shared';

// Techniques for habit-formation / approach contexts
// Context-specific techniques listed first so they appear at the top of the deck
export const APPROACH_TECHNIQUES = [
  'tiny-habits',
  'implementation-intention',
  'habit-stacking',
  'two-minute-rule',
  'if-then-planning',
  'environment-design',
  'behavioral-activation',
  'temptation-bundling',
  'self-monitoring',
  'opposite-action',
  'please-check',
  'ask-support',
  'cope-ahead',
  'reinforcement-management',
  'strengths-use',
  'best-possible-self',
  ...SHARED_TECHNIQUES,
] as const;

export const approachBase = {
  direction: 'approach' as const,
  applicableTechniques: APPROACH_TECHNIQUES,
};
