export type Direction = 'resist' | 'approach' | 'mental';
export type Lang = 'ja' | 'en';

export interface ContextVars {
  label: string;
  description?: string;
  // Common template variables
  impulse: string;        // {{impulse}}  過食衝動 / urge to binge
  behavior: string;       // {{behavior}} 食べること / bingeing
  situation: string;      // {{situation}} 食後や一人の時間 / after meals
  bodyEffect?: string;    // {{bodyEffect}}
  alternative?: string;   // {{alternative}}
  // Approach-specific
  goal?: string;          // {{goal}} 運動すること / exercising
  obstacle?: string;      // {{obstacle}} 疲れているとき / when tired
  trigger?: string;       // {{trigger}} 夕食後 / after dinner
  reward?: string;        // {{reward}} 好きな音楽 / favorite music
  // Allow arbitrary extra variables
  [key: string]: string | undefined;
}

export interface Context {
  id: string;
  icon: string;
  direction: Direction;
  sortOrder: number;
  applicableTechniques: readonly string[];
  i18n: Partial<Record<Lang, ContextVars>>;
  showCrisis?: boolean;
}

export function defineContext(ctx: Context): Context {
  if (!ctx.id) throw new Error('Context must have an id');
  if (!ctx.icon) throw new Error(`Context ${ctx.id} must have an icon`);
  if (!ctx.applicableTechniques.length) throw new Error(`Context ${ctx.id} must have applicableTechniques`);
  return ctx;
}
