import { SHARED_TECHNIQUES } from './_shared';

// Techniques for behavioral addictions (eating, gambling, smartphone, shopping, sexual)
export const BEHAVIORAL_TECHNIQUES = [
  ...SHARED_TECHNIQUES,
  'tipp',
  'halt-check',
  'urge-delay',
  'stimulus-control',
  'opposite-action',
  'pros-cons-urge',
  'ask-support',
  'emotion-check-in',
  'behavioral-chain',
  'please-check',
  'behavioral-substitution',
  'chain-break',
] as const;

export const behavioralBase = {
  direction: 'resist' as const,
  applicableTechniques: BEHAVIORAL_TECHNIQUES,
};
