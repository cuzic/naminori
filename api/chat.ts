export const config = { runtime: 'edge' };

// Allowlist of valid technique IDs — prevents prompt injection via techniqueName
const VALID_TECHNIQUE_IDS = new Set([
  'urge-surfing','tipp','stop-skill','accepts','self-soothing','emotion-labeling',
  'opposite-action','wise-mind','wait-10-min','please-check','thought-record',
  'socratic-questions','best-friend-test','cognitive-distortions','behavioral-experiment',
  'defusion','leaves-on-stream','values-compass','commitment-action','acceptance',
  'breathing-478','box-breathing','grounding-54321','body-scan','mindful-eating',
  'three-good-things','growth-mindset','use-strength','why-recover','three-wins',
  'self-compassion-3steps','loving-kindness','letter-to-self','kind-words','if-then-plan',
  'change-environment','habit-stacking','sleep-routine','morning-walk','emotion-diary',
  'trigger-review','todays-step','hunger-scale','weekly-review','dear-man','give-skill',
  'fast-skill','progressive-relaxation','self-as-context','present-moment',
  'walking-meditation','compassion-break','perma-check','flow-activity','meaning-work',
  'giving-act','tell-someone','ask-support','lapse-plan','wrap-plan','sleep-hygiene',
  'tiny-habit','body-neutral','scale-detox','food-freedom','trigger-list',
  'radical-acceptance','improve-skill','pros-cons-urge','check-the-facts','build-positive',
  'cope-ahead','bus-passengers','monster-tug-of-war','tombstone-values','expansion',
  'act-committed-experiment','behavioral-activation','downward-arrow','pie-chart',
  'decatastrophize','body-image-diary','tiny-habits','implementation-intention',
  'temptation-bundling','environment-design','two-minute-rule','if-then-planning',
  'halt-check','urge-delay','stimulus-control','harm-reduction','behavioral-chain',
  'emotion-check-in','self-monitoring','problem-solving','reinforcement-management',
  'behavioral-substitution','decisional-balance','reframing','strengths-use',
  'gratitude-visit','best-possible-self',
  'emotional-granularity','coping-anchor','somatic-reset','chain-break',
  'nvc','assertion-training','boundary-message','active-listening','repair-talk','sensory-refuge','social-script',
  'assertive-refusal','time-out-request','recovery-disclosure','gradual-sharing','concrete-request',
  'emotion-signal','i-message','appreciation-express','reflective-question','online-boundary',
]);

interface JournalEntry {
  date: string;
  techniqueName: string;
  text: string;
}

function buildDigest(history: JournalEntry[]): string {
  if (!history || history.length === 0) return '';
  const lines = history.map(e =>
    `・${e.date} 「${e.techniqueName}」: ${e.text.slice(0, 120)}${e.text.length > 120 ? '…' : ''}`
  );
  return `\n\n【これまでの取り組み（参考）】\n${lines.join('\n')}`;
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }

  let techniqueName: string;
  let techniqueDisplayName: string = '';
  let techniqueDesc: string = '';
  let userText: string;
  let journalHistory: JournalEntry[] = [];
  try {
    const body = await req.json();
    techniqueName = body.techniqueName;
    techniqueDisplayName = typeof body.techniqueDisplayName === 'string' ? body.techniqueDisplayName.slice(0, 100) : '';
    techniqueDesc = typeof body.techniqueDesc === 'string' ? body.techniqueDesc.slice(0, 300) : '';
    userText = body.userText;
    journalHistory = Array.isArray(body.journalHistory) ? body.journalHistory.slice(0, 5) : [];
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  // Validate inputs
  if (typeof userText !== 'string' || userText.length > 2000) {
    return new Response(JSON.stringify({ error: 'userText must be a string under 2000 characters' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }
  if (typeof techniqueName !== 'string' || !VALID_TECHNIQUE_IDS.has(techniqueName)) {
    return new Response(JSON.stringify({ error: 'Invalid techniqueName' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const digest = buildDigest(journalHistory);
  const displayName = techniqueDisplayName || techniqueName;
  const descLine = techniqueDesc ? `\n【技法の概要】${techniqueDesc}` : '';

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system: `あなたは温かく受容的な回復サポーターです。行動変容・依存からの回復に取り組むユーザーに寄り添います。

【重要】もしユーザーが自傷・自殺・消えたい・死にたいなどの言葉を使った場合は、必ず以下を伝えてください：
「今すぐ話せる場所があります。よりそいホットライン（0120-279-338）やいのちの電話（0120-783-556）に電話してみてください。あなたは一人じゃありません。」

通常の対応では：評価・判断をせず、ただ共感し、ユーザーの取り組みを温かく受け止めてください。技法の内容を踏まえた上で、3〜4文で、日本語で返答してください。`,
      messages: [{
        role: 'user',
        content: `ユーザーが「${displayName}」という技法を試みました。${descLine}${digest}\n\nユーザーの今日の感想:\n"${userText}"`,
      }],
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Anthropic API error:', res.status, errText);
    return new Response(JSON.stringify({ error: 'AI service unavailable' }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }

  const data: { content?: { text: string }[] } = await res.json();
  const text = data.content?.[0]?.text ?? '';

  return new Response(JSON.stringify({ text }), {
    headers: { 'content-type': 'application/json' },
  });
}
