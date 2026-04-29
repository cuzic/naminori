/**
 * Generate src/images.json from src/data.json
 * Each technique gets an eye-catching watercolor illustration prompt (no text).
 */
import { join } from 'node:path';

const ROOT = join(import.meta.dir, '..');

const STYLE =
  'Soft watercolor illustration, warm pastel earth tones, gentle natural lighting. No text, no letters, no numbers.';

// Visual metaphor per technique ID
const METAPHORS: Record<string, string> = {
  // ── Urge / Impulse control ──
  'urge-surfing':
    'A lone surfer balancing on a large turquoise wave at golden hour, calm expression, birds in the sky.',
  'tipp':
    'Hands cupping a bowl of ice water with floating ice cubes, droplets catching sunlight.',
  'stop-skill':
    'An open hand raised in a gentle stop gesture against a soft misty background.',
  'accepts':
    'A person sitting cross-legged on a mossy rock, palms open on their knees, surrounded by soft forest light.',
  'self-soothing':
    'A warm mug of tea on a wooden table beside a lit candle and a soft blanket, cozy evening light.',
  'emotion-labeling':
    'Colorful name-tags or labels floating above a calm lake, each tag a different pastel hue.',
  'opposite-action':
    'A figure standing at a fork in a road, confidently stepping onto the less-traveled path bathed in sunlight.',
  'wise-mind':
    'A set of brass balance scales, one side holding a glowing heart, the other a glowing brain, perfectly balanced.',
  'wait-10-min':
    'An old hourglass with golden sand, surrounded by soft morning light and a cup of tea.',
  'please-check':
    'A person walking barefoot on dewy grass at dawn, arms relaxed, peaceful expression.',

  // ── CBT ──
  'thought-record':
    'An open journal with handwritten flowing lines beside a small potted plant on a sunlit desk.',
  'socratic-questions':
    'A question mark made of ivy leaves and flowers, soft warm background.',
  'best-friend-test':
    'Two friends sitting together on a bench, one gently placing a hand on the other\'s shoulder, soft sunset.',
  'cognitive-distortions':
    'A cracked mirror reflecting a distorted image that slowly becomes clear and undistorted.',
  'behavioral-experiment':
    'A person planting a seed in a pot, looking curious and hopeful, warm garden light.',
  'defusion':
    'Words dissolving into colorful butterflies and floating away into a clear sky.',
  'leaves-on-stream':
    'Golden autumn leaves floating gently downstream on a quiet forest brook.',
  'values-compass':
    'An antique compass resting on a weathered map, warm amber tones.',
  'commitment-action':
    'A person placing the first stone on a stepping-stone path across a reflective pond.',
  'acceptance':
    'A person standing in light rain, eyes closed, arms slightly open, peaceful expression.',
  'breathing-478':
    'A person sitting by a window, soft curtains billowing gently, rays of morning light.',
  'box-breathing':
    'A square drawn in the sand near the ocean, tide washing gently at its edges.',
  'grounding-54321':
    'Hands touching soft green moss on a stone wall, close-up, textured and vivid.',
  'body-scan':
    'A figure lying peacefully in a meadow, surrounded by wildflowers, soft golden light.',
  'mindful-eating':
    'A single ripe peach on a wooden plate, morning light catching its texture.',
  'three-good-things':
    'Three small stars made of wildflowers in a field at dusk.',
  'growth-mindset':
    'A tiny green sprout pushing through dark soil toward warm sunlight.',
  'use-strength':
    'A person lifting a large smooth stone effortlessly, arms strong, confident posture.',
  'why-recover':
    'A glowing lantern held in both hands in a dark forest, lighting the path ahead.',
  'three-wins':
    'Three simple laurel wreaths or ribbons on a wooden shelf, each glowing softly.',
  'self-compassion-3steps':
    'Two hands cradling a small glowing ember, protecting it from the wind.',
  'loving-kindness':
    'Concentric circles of soft light expanding outward from a single candle flame.',
  'letter-to-self':
    'A handwritten letter folded into an envelope tied with a ribbon, resting on a worn wooden desk.',
  'kind-words':
    'Soft flower petals arranged to form gentle curves, warm pastel pinks and yellows.',
  'if-then-plan':
    'A branching tree with two glowing paths, one labeled with sunlight, peaceful and clear.',
  'change-environment':
    'An open window with fresh curtains letting in morning breeze, plants on the sill.',
  'habit-stacking':
    'A stack of smooth flat stones balanced perfectly beside a calm river.',
  'sleep-routine':
    'A crescent moon and stars above a cozy bedroom window, soft lavender light.',
  'morning-walk':
    'A path through a misty morning forest, sunlight filtering through tall trees.',
  'emotion-diary':
    'A small notebook open to a page with delicate watercolor brushstrokes in blue and gold.',
  'trigger-review':
    'A magnifying glass held over a winding path map, warm amber light.',
  'todays-step':
    'A single footstep in soft sand leading toward a gentle sunrise.',
  'hunger-scale':
    'A gentle curved scale or arc from empty to full, illustrated with soft fruits and vegetables.',
  'weekly-review':
    'A calendar page with soft checkmarks, surrounded by small illustrated plants.',
  'dear-man':
    'Two people facing each other calmly in a bright room, respectful distance, open postures.',
  'give-skill':
    'Hands gently offering a small wrapped gift tied with a ribbon.',
  'fast-skill':
    'A person walking away calmly from a tense scene, breathing deliberately.',
  'progressive-relaxation':
    'A person lying on a wooden floor, soft warm light from a window, completely relaxed.',
  'self-as-context':
    'A person sitting on a hill looking at passing clouds, a gentle observer.',
  'present-moment':
    'A single dewdrop on a leaf, catching the light of a sunrise, perfectly still.',
  'walking-meditation':
    'Footprints in dewy grass, early morning mist, slow deliberate steps.',
  'compassion-break':
    'Hands crossed gently over a heart, soft golden light.',
  'perma-check':
    'Five small glowing symbols arranged in a circle: heart, spark, people, star, trophy.',
  'flow-activity':
    'A person absorbed in sketching at a desk, completely focused, soft studio light.',
  'meaning-work':
    'A lantern in the shape of a compass rose, casting warm light on a path.',
  'giving-act':
    'A pair of hands passing a small potted plant to another pair of hands, soft garden light.',
  'tell-someone':
    'Two people sitting close together on a porch at dusk, one speaking softly.',
  'ask-support':
    'A hand reaching out, and another hand reaching back to hold it, warm amber tones.',
  'lapse-plan':
    'A person picking themselves up from the ground with determination, dawn light behind them.',
  'wrap-plan':
    'A wrapped bundle tied securely with a bow, ready for a journey, on a wooden table.',
  'sleep-hygiene':
    'A tidy bedside table with a book, glass of water, and dimmed lamp, peaceful night.',
  'tiny-habit':
    'A small seed in a cracked stone, one tiny green leaf emerging toward sunlight.',
  'body-neutral':
    'A person stretching arms wide in an open field, not looking at themselves, just existing.',
  'scale-detox':
    'An old bathroom scale left outside on a path, vines beginning to grow over it.',
  'food-freedom':
    'A table set with colorful seasonal vegetables and fruits, inviting and abundant.',
  'trigger-list':
    'A small illustrated map with marked locations, warm amber and terracotta tones.',
  'radical-acceptance':
    'A person standing at the ocean shore, waves washing over their feet, eyes closed, at peace.',
  'improve-skill':
    'A path that dips down but curves upward again toward a sunny horizon.',
  'pros-cons-urge':
    'A handmade scale with two bowls balanced on a driftwood stick, soft light.',
  'check-the-facts':
    'A magnifying glass held over a peaceful stream, revealing clear stones underneath.',
  'build-positive':
    'A person building a small stone tower on a riverbank, carefully placing each stone.',
  'cope-ahead':
    'A backpack neatly packed and ready at a doorway, morning light coming in.',
  'bus-passengers':
    'A vintage bus on a winding road, small figures visible through the windows, soft pastoral landscape.',
  'monster-tug-of-war':
    'A tug-of-war rope lying slack on the ground, the conflict abandoned, peace settling in.',
  'tombstone-values':
    'An old stone marker in a garden, covered with moss, wildflowers growing around it.',
  'expansion':
    'A chest opening slowly, warm golden light spilling outward.',
  'act-committed-experiment':
    'A person setting a small paper boat on water, releasing it gently, watching it float.',
  'behavioral-activation':
    'A person lacing up shoes at a doorway, morning light ahead, ready to move.',
  'downward-arrow':
    'A cascade of small arrows pointing downward, each one landing on a deeper, quieter pool.',
  'pie-chart':
    'A hand-drawn pie chart on paper, soft pencil lines, sitting on a sunny windowsill.',
  'decatastrophize':
    'Storm clouds in the distance, with a wide patch of clear blue sky directly overhead.',
  'body-image-diary':
    'An open sketchbook with gentle abstract body outlines, soft lines, non-judgmental.',
  'tiny-habits':
    'A row of small candles, each one slightly taller than the last, all glowing.',
  'implementation-intention':
    'A handwritten sticky note on a door, catching the morning light.',
  'temptation-bundling':
    'Headphones and a running shoe beside a stack of books, ready together.',
  'environment-design':
    'A minimalist tidy desk with only one open notebook and a single plant, calm and clear.',
  'two-minute-rule':
    'A small hourglass, just two minutes of sand, resting on a smooth stone.',
  'if-then-planning':
    'A small illustrated decision tree drawn on a napkin, one path highlighted.',
  'halt-check':
    'Four small illustrated icons: a bowl of food, a wave of air, a silhouette reaching, a moon—arranged in a gentle square.',
  'urge-delay':
    'A timer set to 15 minutes, resting beside a calming cup of tea.',
  'stimulus-control':
    'A tidy drawer being neatly closed, unwanted items gently set aside.',
  'harm-reduction':
    'A gentle hand lowering a flame slightly, not extinguishing it, just calming it.',
  'behavioral-chain':
    'A series of softly linked circles in a gentle curve, each one leading to the next.',
  'emotion-check-in':
    'A simple color-coded gauge with a needle pointing to calm orange, warm tones.',
  'self-monitoring':
    'A small notebook with gentle tick marks beside growing plant illustrations.',
  'problem-solving':
    'A tangled knot of string, one end gently being pulled to loosen it in the sunlight.',
  'reinforcement-management':
    'A small golden star resting in an open palm, warm and glowing.',
  'behavioral-substitution':
    'Two paths diverging in a garden, one overgrown, one freshly cleared and sunlit.',
  'decisional-balance':
    'A vintage brass scale in perfect equilibrium, sitting on a stone table outdoors.',
  'reframing':
    'A window with a new pane being placed, transforming a grey view into a bright landscape.',
  'strengths-use':
    "A craftsperson's tools laid out neatly, each one chosen and ready, warm workshop light.",
  'gratitude-visit':
    'A handwritten letter being sealed with wax, a ribbon tied, ready to be delivered.',
  'best-possible-self':
    'A person standing on a hilltop at sunrise, arms relaxed, looking toward a bright horizon.',
};

async function main() {
  const data: { techniques: { id: string }[] } =
    await Bun.file(join(ROOT, 'src', 'data.json')).json();

  const images = data.techniques.map(tc => {
    const metaphor = METAPHORS[tc.id];
    if (!metaphor) {
      console.warn(`⚠ No metaphor for: ${tc.id} — using fallback`);
    }
    const prompt = metaphor
      ? `${metaphor} ${STYLE}`
      : `An abstract soft watercolor illustration representing calm mindfulness and personal growth. ${STYLE}`;

    return {
      name: tc.id,
      prompt,
      aspectRatio: '4:3',
    };
  });

  const missing = images.filter(i => !METAPHORS[i.name]);
  if (missing.length > 0) {
    console.warn(`\n⚠ ${missing.length} technique(s) missing metaphor:`);
    missing.forEach(i => console.warn(`  - ${i.name}`));
  }

  await Bun.write(
    join(ROOT, 'src', 'images.json'),
    JSON.stringify({ images }, null, 2),
  );

  console.log(`\n✓ Generated src/images.json — ${images.length} prompts`);
}

main().catch(console.error);
