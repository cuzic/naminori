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

  // ── Productivity / habits (existing techniques) ──
  'fresh-start':
    'A blank page in an open notebook, first light of dawn through a window, a single pen ready.',
  'identity-statement':
    'A mirror showing a person standing tall, confident posture, warm morning light.',
  'motivation-source':
    'A compass pointing toward a distant mountain peak bathed in golden light.',
  'pomodoro':
    'A classic red tomato-shaped kitchen timer on a wooden desk, warm afternoon light.',
  'task-aversion-check':
    'A small closed door with light peeking from beneath it, a hand gently reaching toward the handle.',
  'zeigarnik-start':
    'A single knitting needle starting the first row of a new project, fresh yarn, warm light.',
  'resentment-release':
    'A clenched fist slowly opening to release a small bird into a bright sky.',
  'attention-redirect':
    'A spotlight beam gently turning from a shadowed corner toward a bright window with flowers outside.',
  'freewriting':
    'A pen moving across paper in flowing cursive, ink trails like ribbon in morning light.',
  'quantity-first':
    'A row of small clay pots in various stages, all in progress, hands joyfully at work.',
  'bad-art-day':
    'A cheerful imperfect clay pot on a sunny studio shelf, lopsided but charming.',
  'creative-input':
    'An open book beside a sketchpad, dried leaves and a feather around it, afternoon light streaming in.',
  'reverse-brainstorm':
    'An upside-down tree with roots in the sky and branches growing downward, flowering unexpectedly.',
  'random-word':
    'A book falling open to a random page, a single word glowing gently on the page, light and airy.',
  'question-storming':
    'A spiral of question marks made of flowers and leaves, soft pastel warm background.',
  'mit-selection':
    'Three smooth pebbles arranged in a row on a wooden surface, the largest one glowing softly in front.',
  'deep-work-block':
    'A person at a quiet desk, a "do not disturb" note on the door, warm focused lamp light.',
  'shutdown-ritual':
    'A laptop gently closing on a tidy desk at dusk, a single lamp switched off, soft evening light.',
  'task-batching':
    'Identical envelopes sorted into neat stacks by patient hands, clean wooden desk.',

  // ── Work-life balance ──
  'role-switching-ritual':
    'A coat being gently hung on a hook as a different coat is taken down, soft threshold of a doorway.',
  'digital-sunset':
    'A smartphone placed face-down beside a warm glowing lamp at dusk, the world outside softly lit.',
  'ideal-week-design':
    'A weekly calendar on paper with soft colored blocks and tiny drawings, a cup of tea beside it.',
  'off-identity':
    'Several small illustrated tags hanging from a branch, each one a different pastel color for a hobby or role.',

  // ── Time management ──
  'time-audit':
    'An open planner with colored blocks and a classic pocket watch beside it on a wooden table.',
  'eisenhower-matrix':
    'Four hand-drawn quadrants on paper with tiny illustrations in each, soft pencil lines on a sunny desk.',
  'time-blocking':
    'A weekly planner with colored rectangles filling the page in neat rows, organized and calm.',
  'parkinson-defense':
    'An hourglass with a bold line marked partway down, a hand poised to flip it before the sand runs out.',

  // ── Decision making ──
  '10-10-10':
    'Three concentric rings of light expanding outward on water, each one farther and brighter than the last.',
  'regret-minimization':
    'An elderly person sitting peacefully in a rocking chair on a porch, gazing at a golden horizon.',
  'satisficing':
    'A hand reaching into a basket of apples and gently lifting one out — not the biggest, just the right one.',
  'coin-flip-test':
    'A single coin spinning in the air, caught in morning light, someone watching with a curious expression.',
  'decision-journal':
    'An open notebook with small dated entries, each illuminated by warm candlelight on a wooden desk.',
  'option-reduction':
    'A row of coat hooks with just one coat hanging neatly, simple and tidy, bright morning light.',

  // ── Grief ──
  'grief-wave':
    'A person standing at the shore as a large wave washes gently over their feet, eyes closed, at peace.',
  'continuing-bonds':
    'A thread of golden light connecting two hands across distance, one near, one fading softly into the horizon.',
  'dual-process-grief':
    'A path that splits in two — one leading toward a soft rain, one toward sunlight — and quietly merges again.',
  'loss-letter':
    'A sealed letter resting on a wooden surface beside dried flowers and a closed photograph album.',
  'grief-ritual':
    'A single candle lit on a small table with a photograph, soft flowers, and a folded piece of paper.',
  'meaning-reconstruction':
    'A mosaic being assembled from broken colorful pieces, each fragment becoming part of a larger beautiful picture.',

  // ── Trauma ──
  'safe-place':
    'A small cozy cottage in a sunlit meadow with warm light in the windows and soft clouds above.',
  'window-of-tolerance':
    'A wide open window with a golden frame, a gentle breeze moving soft curtains, the outside world calm.',
  'titration':
    'A single drop of water falling from a leaf into a still pond, ripples expanding gently outward.',
  'pendulation':
    'A pendulum swinging gently between two glowing lights — one warm amber, one soft cool blue.',
  'resource-installation':
    'A small jar filled with glowing golden light, carefully sealed and held in two gentle hands.',
  'tapping':
    'Fingertips gently tapping the edge of a hand in a rhythmic, peaceful gesture, soft warm background.',

  // ── Impostor syndrome ──
  'achievement-evidence':
    'A corkboard with handwritten letters, small photographs, and notes pinned with care, warm afternoon light.',
  'impostor-normalize':
    'Multiple silhouettes of people, each with a tiny shared thought bubble, soft warm earth tones.',
  'competence-journal':
    'An open journal with tally marks and small hand-drawn stars on a sunny table, a gentle pen nearby.',
  'feedback-portfolio':
    'An open folder with letters and warm notes inside, tied with a ribbon, afternoon light falling across it.',
  'luck-vs-skill':
    'A hand-drawn pie chart divided into sections, a pencil and gentle annotations on a warm wooden desk.',

  // ── Body image ──
  'functional-appreciation':
    'Bare feet walking through soft green grass, close-up of ankles in motion, morning dew.',
  'media-fast':
    'A phone resting face-down among wildflowers in a meadow, the sky wide and clear above.',
  'mirror-exposure':
    'A simple oval mirror on a wooden table, a person standing calmly before it, soft unhurried light.',
  'size-diversity-exposure':
    'Different-sized smooth stones arranged naturally on a riverbank, each one beautiful in its own way.',
  'body-story':
    'An open illustrated book with gentle body silhouettes at different life stages, warm watercolor style.',

  // ── Chronic pain ──
  'pain-pacing':
    'A turtle walking steadily along a forest path, consistent and calm, soft dappled light through trees.',
  'pain-diary':
    'A small notebook open to a simple chart with gentle colored lines, a pencil and a warm mug beside it.',
  'pain-neuroscience':
    'A simplified nervous system illustrated as a glowing network of lights, soft and warm amber tones.',
  'activity-window':
    'A window with golden sunlight streaming through at just the right angle, a bird perching at that moment.',
  'pleasant-activity-plan':
    'A small illustrated calendar with cheerful doodles — a book, a flower, a tea cup — marking joyful activities.',

  // ── Energy management ──
  'ultradian-rhythm':
    'A golden sine wave drawn on paper, peaks and valleys evenly spaced, a small sun at each peak.',
  'energy-map':
    'A gentle wave chart on paper, peaks marked with small suns and valleys with moons, a warm desk.',
  'drain-gain-list':
    'Two vessels: one being filled from a small glowing stream, the other overflowing with soft golden light.',
  'micro-recovery':
    'A tiny bird perched on a branch, eyes gently closed, resting briefly before taking flight again.',
  'cognitive-load-diet':
    'A cluttered desk being gently simplified, items floating away one by one into clear air.',

  // ── Breathing ──
  'diaphragm-breathing':
    'A hand resting gently on a rising abdomen, person lying peacefully, soft warm light from above.',
  'resonance-breathing':
    'Ocean waves rolling in and out in perfect rhythm, steady and calm, warm golden hour light.',
  'alternate-nostril':
    'A figure in gentle meditation, fingertips softly touching one side of the nose, warm peaceful light.',
  'physiological-sigh':
    'A person exhaling a long visible breath like mist in cold morning air, shoulders visibly dropping in relief.',
  'coherent-breathing':
    'Sound waves illustrated as perfectly symmetrical flowing curves, soft blue and warm gold.',
  'breath-counting':
    'A person sitting quietly, fingers gently counting on one hand, eyes softly closed, serene warm setting.',
};

async function main() {
  const data: { techniques: { id: string }[] } =
    await Bun.file(join(ROOT, 'src', 'data.json')).json();

  // Find existing image files to skip
  const imagesDir = join(ROOT, 'src', 'assets', 'images');
  const existingFiles = new Set<string>();
  try {
    const glob = new Bun.Glob('*.{jpg,jpeg,png,webp}');
    for await (const file of glob.scan(imagesDir)) {
      existingFiles.add(file.replace(/\.[^.]+$/, ''));
    }
  } catch {
    // Directory may not exist yet
  }

  const allImages = data.techniques.map(tc => {
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

  const missingMetaphor = allImages.filter(i => !METAPHORS[i.name]);
  if (missingMetaphor.length > 0) {
    console.warn(`\n⚠ ${missingMetaphor.length} technique(s) missing metaphor:`);
    missingMetaphor.forEach(i => console.warn(`  - ${i.name}`));
  }

  // Only generate images that don't exist yet
  const images = allImages.filter(i => !existingFiles.has(i.name));
  const skipped = allImages.length - images.length;

  if (skipped > 0) {
    console.log(`⏭ Skipping ${skipped} already-generated images`);
  }

  await Bun.write(
    join(ROOT, 'src', 'images.json'),
    JSON.stringify({ images }, null, 2),
  );

  console.log(`\n✓ Generated src/images.json — ${images.length} prompts (${allImages.length} total)`);
}

main().catch(console.error);
