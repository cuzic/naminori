import { SHARED_TECHNIQUES } from './_shared';

// Techniques for behavioral addictions (eating, gambling, smartphone, shopping, sexual)
// Context-specific techniques listed first so they appear at the top of the deck
export const BEHAVIORAL_TECHNIQUES = [
  'halt-check',
  'urge-delay',
  'stimulus-control',
  'tipp',
  'behavioral-chain',
  'pros-cons-urge',
  'behavioral-substitution',
  'chain-break',
  'emotion-check-in',
  'please-check',
  'ask-support',
  'opposite-action',
  ...SHARED_TECHNIQUES,
] as const;

export const behavioralBase = {
  direction: 'resist' as const,
  applicableTechniques: BEHAVIORAL_TECHNIQUES,
};
