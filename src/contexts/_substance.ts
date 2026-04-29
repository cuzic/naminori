import { SHARED_TECHNIQUES } from './_shared';

// Techniques for substance-based addictions (alcohol, drugs, smoking, caffeine)
export const SUBSTANCE_TECHNIQUES = [
  ...SHARED_TECHNIQUES,
  'tipp',
  'halt-check',
  'urge-delay',
  'stimulus-control',
  'please-check',
  'opposite-action',
  'pros-cons-urge',
  'ask-support',
  'behavioral-substitution',
] as const;

export const substanceBase = {
  direction: 'resist' as const,
  applicableTechniques: SUBSTANCE_TECHNIQUES,
};
