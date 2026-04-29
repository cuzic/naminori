import { SHARED_TECHNIQUES } from './_shared';

// Techniques for substance-based addictions (alcohol, drugs, smoking, caffeine)
export const SUBSTANCE_TECHNIQUES = [
  ...SHARED_TECHNIQUES,
  'tipp-skill',
  'halt-check',
  'urge-delay',
  'stimulus-control',
  'please-skills',
  'opposite-action',
  'distress-tolerance',
  'pros-cons-matrix',
  'social-support-call',
  'behavioral-substitution',
] as const;

export const substanceBase = {
  direction: 'resist' as const,
  applicableTechniques: SUBSTANCE_TECHNIQUES,
};
