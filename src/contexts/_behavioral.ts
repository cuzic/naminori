import { SHARED_TECHNIQUES } from './_shared';

// Techniques for behavioral addictions (eating, gambling, smartphone, shopping, sexual)
export const BEHAVIORAL_TECHNIQUES = [
  ...SHARED_TECHNIQUES,
  'tipp-skill',
  'halt-check',
  'urge-delay',
  'stimulus-control',
  'opposite-action',
  'distress-tolerance',
  'pros-cons-matrix',
  'social-support-call',
  'emotion-check-in',
  'behavioral-chain',
  'please-skills',
  'behavioral-substitution',
] as const;

export const behavioralBase = {
  direction: 'resist' as const,
  applicableTechniques: BEHAVIORAL_TECHNIQUES,
};
