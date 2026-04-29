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
  'please-skills',
  'social-support-call',
  'cope-ahead',
] as const;

export const approachBase = {
  direction: 'approach' as const,
  applicableTechniques: APPROACH_TECHNIQUES,
};
