export const config = { runtime: 'edge' };

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
  let userText: string;
  try {
    ({ techniqueName, userText } = await req.json());
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

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
      messages: [{
        role: 'user',
        content: `あなたは受容的で温かい支援者です。ユーザーが「${techniqueName}」という技法を試みました。\n\nユーザーの感想:\n"${userText}"\n\n3〜4文で、優しく受け止めてください。評価・判断をせず、ただ共感してください。日本語で。`,
      }],
    }),
  });

  const data: { content?: { text: string }[] } = await res.json();
  const text = data.content?.[0]?.text ?? '';

  return new Response(JSON.stringify({ text }), {
    headers: { 'content-type': 'application/json' },
  });
}
