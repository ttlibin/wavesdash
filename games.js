window.GAMES = [
  {
    id: 1,
    slug: "geometry-jump",
    title: "Geometry Jump",
    description: "Jump over obstacles in this fast-paced geometry-based platformer! Time your jumps perfectly to avoid spikes and reach the finish line.",
    category: "geometry-dash",
    thumb: "images/geometry-jump.png",
    iframeUrl: "https://1games.io/game/geometry-jump/",
    tags: ["platformer", "jumping", "geometry", "arcade", "skill"],
    instructions: ["Click or spacebar to jump", "Time your jumps carefully", "Avoid spikes and obstacles", "Reach the end to complete level"],
    rating: 4.8,
    dateAdded: "2025-06-10",
    gameEmbed: {
      controls: ["Space/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Start", detail: "Click Start and use Practice Mode to learn timings." },
      { step: "Core control", detail: "Tap for short hops, hold for chained jumps. Keep a steady rhythm." },
      { step: "Flow", detail: "Anticipate spikes; jump slightly before the beat on dense sections." }
    ],
    goalsAndScoring: {
      win: "Reach the end without hitting obstacles.",
      score: "Progress/time and collectibles depending on the level version."
    },
    levels: [
      { name: "Intro Stage", strategy: "Memorize platform spacing; prefer early, light taps." },
      { name: "Rhythm Stage", strategy: "Use music cues; apply short–short–long patterns on clusters." },
      { name: "Expert Stage", strategy: "Split with checkpoints; drill tricky micro‑timings." }
    ],
    proTips: [
      "Lower visual effects to stabilize FPS.",
      "Light taps reduce overshooting.",
      "Practice Mode: set checkpoints for hard sections.",
      "Headphones improve beat alignment.",
      "Avoid jumping at the very last pixel on slopes."
    ],
    compatibility: { mobile: "Optimized", pc: "Best on Chrome/Edge", issues: ["Safari may require a user gesture to enable audio."] },
    faq: [
      { q: "Is there a Practice Mode?", a: "Yes—enable it at the start and place checkpoints." },
      { q: "Game won't load—what to try?", a: "Disable ad blockers, switch network, and reload. Prefer Wi‑Fi on mobile." },
      { q: "Fullscreen available?", a: "Yes, use the fullscreen button for better focus and timing." }
    ],
    attribution: { source: "1games.io", publisher: "Original rights holder", sourceUrl: "https://1games.io/game/geometry-jump/" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: {
      metaTitle: "Play Geometry Jump Online + Tips | wavesdash",
      metaDescription: "Rules, stage strategies, rhythm timing tips, FAQs, and compatibility.",
      canonicalUrl: "https://wavesdash.com/game/geometry-jump"
    },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 2,
    slug: "geometry-arrow",
    title: "Geometry Arrow",
    description: "Navigate through geometric mazes with precise arrow movements! Control your arrow through challenging levels filled with obstacles.",
    category: "geometry-dash",
    thumb: "images/geometry-arrow.png",
    iframeUrl: "https://1games.io/embed/geometry-arrow",
    tags: ["geometry", "arrow", "maze", "precision", "arcade","skill"],
    instructions: ["Arrow keys to move", "Navigate through obstacles", "Collect gems along the way", "Reach the target to advance"],
    rating: 4.6,
    dateAdded: "2025-06-08",
    gameEmbed: {
      controls: ["Arrow keys to move"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Navigate", detail: "Use arrow keys; keep the arrow head clear of walls." },
      { step: "Collect", detail: "Grab gems on safe paths; avoid backtracking." },
      { step: "Advance", detail: "Reach the target zone to clear each maze." }
    ],
    goalsAndScoring: { win: "Reach the exit without collisions.", score: "Completion time and gems collected." },
    levels: [
      { name: "Training Lanes", strategy: "Practice tight turns; tap steering for precision." },
      { name: "Mirror Mazes", strategy: "Use checkpoints, plan routes that minimize 180° turns." },
      { name: "Needle Paths", strategy: "Feather the key to micro‑adjust; pause before narrow gates." }
    ],
    proTips: [
      "Zoom browser to 90–100% for better view",
      "Tap, not hold, when threading needles",
      "Mark visual anchors before long corridors",
      "Skip risky gems on first clear",
      "Map dead ends quickly"
    ],
    compatibility: { mobile: "Partial (onscreen controls)", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How to make precise turns?", a: "Use short taps; align before entering narrow segments." },
      { q: "Are gems required?", a: "No; they boost score only—prioritize safe clears first." },
      { q: "Can I replay for better times?", a: "Yes—improve routing and minimize mistakes." }
    ],
    attribution: { source: "1games.io", publisher: "Original rights holder", sourceUrl: "https://1games.io/embed/geometry-arrow" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Geometry Arrow Online + Maze Tips | wavesdash", metaDescription: "Routes, gem priorities, precision steering, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-arrow" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 3,
    slug: "wave-dash",
    title: "WAVE Dash",
    description: "Jump and fly your way through danger in this rhythm-based action platformer! Navigate through impossible levels with perfect timing.",
    category: "geometry-dash",
    thumb: "images/wave-dash.jpg",
    iframeUrl: "https://www.jopi.com/embed.php?game=geometry-dash",
    tags: ["platformer", "rhythm", "challenging", "music", "geometry","skill"],
    instructions: ["Click or spacebar to jump", "Follow the music rhythm", "Avoid spikes and obstacles", "Practice mode available"],
    rating: 4.7,
    dateAdded: "2025-06-05",
    gameEmbed: {
      controls: ["Space/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Warm up", detail: "Start in Practice; learn spike rhythm." },
      { step: "Timing", detail: "Jump a hair early on back‑to‑back spikes." },
      { step: "Consistency", detail: "Keep camera focus centered; avoid panic taps." }
    ],
    goalsAndScoring: { win: "Reach the finish without hits.", score: "Progress/time based." },
    levels: [
      { name: "Calibration", strategy: "Memorize two‑tile gaps; short taps only." },
      { name: "Tempo Switch", strategy: "Watch for fake safe tiles; follow beat accents." },
      { name: "Final Gauntlet", strategy: "Chain jumps with even spacing; no last‑frame jumps." }
    ],
    proTips: [
      "Reduce motion blur",
      "Control hand grip to prevent over‑press",
      "Use metronome if music distracts",
      "Checkpoint before each pattern set",
      "Take breaks to retain muscle memory"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: ["Safari first‑play audio gesture"] },
    faq: [
      { q: "Is Practice allowed?", a: "Yes—designed for pattern learning." },
      { q: "Why random deaths?", a: "Late inputs—jump slightly earlier on chains." },
      { q: "Controller support?", a: "Keyboard/mouse recommended." }
    ],
    attribution: { source: "jopi.com", publisher: "Original rights holder", sourceUrl: "https://www.jopi.com/embed.php?game=geometry-dash" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "WAVE Dash Online + Rhythm Guide | wavesdash", metaDescription: "Timing, chain jumps, practice checkpoints, FAQs.", canonicalUrl: "https://wavesdash.com/game/wave-dash" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 4,
    slug: "geometry-dash-black-wave",
    title: "Geometry Dash Black Wave",
    description: "Master the wave gamemode in this intense Geometry Dash level! Navigate through tight spaces with fluid wave movements.",
    category: "geometry-dash",
    thumb: "images/geometry-dash-black-wave.jpg",
    iframeUrl: "https://g.vseigru.net/7/igra-chjornaya-geometri-volna-super-chellendzh/",
    tags: ["wave", "geometry-dash", "challenging", "dark", "precision","skill"],
    instructions: ["Hold to go up, release to go down", "Navigate through narrow passages", "Perfect timing is essential", "Avoid hitting walls"],
    rating: 4.9,
    dateAdded: "2025-06-01",
    gameEmbed: {
      controls: ["Hold = up, Release = down"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Learn wave physics", detail: "Hold rises, release falls; keep amplitude small." },
      { step: "Read tunnels", detail: "Aim mid‑lane; pre‑aim exits." },
      { step: "Segment practice", detail: "Use checkpoints for tight zigzags." }
    ],
    goalsAndScoring: { win: "Clear all tunnels without touching walls.", score: "Completion and consistency." },
    levels: [
      { name: "Warm‑up Lines", strategy: "Micro‑pulses to keep a shallow angle." },
      { name: "Tight Tunnels", strategy: "Peek ahead; enter centrally and exit flat." },
      { name: "Gravity Switch", strategy: "Reset rhythm; keep pulses symmetrical." }
    ],
    proTips: [
      "Use micro‑pulses, not long holds",
      "Anchor eyes one tile ahead",
      "Mute music if it desyncs you",
      "Align wrist to reduce vertical wobble",
      "Practice mirror patterns separately"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "Why crash at exits?", a: "Over‑angle—flatten before the gate." },
      { q: "How to stabilize amplitude?", a: "Even, short pulses; avoid panic holds." },
      { q: "Any aim reference?", a: "Track midline and use tile boundaries." }
    ],
    attribution: { source: "vseigru.net", publisher: "Original rights holder", sourceUrl: "https://g.vseigru.net/7/igra-chjornaya-geometri-volna-super-chellendzh/" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Geometry Dash Black Wave Online + Wave Tips | wavesdash", metaDescription: "Micro‑pulse control, tunnel reading, gravity switches, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-dash-black-wave" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 5,
    slug: "geometry-dash-black-wave-2",
    title: "Geometry Dash Black Wave 2",
    description: "The sequel to Black Wave with even more challenging wave sequences! Test your skills in this advanced geometry level.",
    category: "geometry-dash",
    thumb: "images/geometry-dash-black-wave2.jpg",
    iframeUrl: "https://yandex.com/games/app/307214?utm_source=distrib&amp;utm_medium=geometrydashwave.com",
    tags: ["wave", "sequel", "hard", "geometry-dash", "expert","skill"],
    instructions: ["Hold to ascend, release to descend", "Master wave physics", "Navigate tight corridors", "Patience and practice required"],
    rating: 4.5,
    dateAdded: "2025-05-28",
    gameEmbed: {
      controls: ["Hold = up, Release = down"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Amplify control", detail: "Shorter pulses; treat each gate as a separate micro‑section." },
      { step: "Read hazards", detail: "Spikes may protrude inward—enter flatter." },
      { step: "Consistency loops", detail: "Repeat problem sets 5–10 times until automatic." }
    ],
    goalsAndScoring: { win: "Pass advanced wave sequences.", score: "Completion and clean segments." },
    levels: [
      { name: "Offset Gates", strategy: "Offset entry angles to avoid inner spikes." },
      { name: "Saw Corridors", strategy: "Flatten near saw hubs; avoid over‑correction." },
      { name: "Long Zigzags", strategy: "Even pulse cadence; breathe out to calm hands." }
    ],
    proTips: [
      "Flatten before exits",
      "Cadence > speed",
      "Use windowed mode if latency high",
      "Turn off background parallax",
      "Record runs to find bad habits"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "Hands shake?", a: "Lower DPI, rest wrists, breathe steadily." },
      { q: "Late pulses?", a: "Cue off grid lines; slightly earlier taps." },
      { q: "Improve success rate?", a: "Chunk into drills; 20 clean reps each." }
    ],
    attribution: { source: "yandex games", publisher: "Original rights holder", sourceUrl: "https://yandex.com/games/app/307214" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Black Wave 2 Online + Advanced Wave Guide | wavesdash", metaDescription: "Offset gates, long zigzags, cadence control, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-dash-black-wave-2" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 6,
    slug: "geometry-dash-black-wave-3",
    title: "Geometry Dash Black Wave 3",
    description: "The third installment of the Black Wave series with new mechanics and obstacles! Can you conquer this ultimate wave challenge?",
    category: "geometry-dash",
    thumb: "images/geometry-dash-black-wave3.jpg",
    iframeUrl: "https://g.vseigru.net/7/igra-chjornaya-geometri-volna-super-chellendzh/",
    tags: ["wave", "trilogy", "extreme", "geometry-dash", "mechanics","skill"],
    instructions: ["Control wave movement", "Learn new wave patterns", "Adapt to changing gravity", "Complete all checkpoints"],
    rating: 4.4,
    dateAdded: "2025-05-25",
    gameEmbed: {
      controls: ["Hold = up, Release = down"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Pattern learn", detail: "Identify new mechanics first (speed ups, gravity flips)." },
      { step: "Angle cap", detail: "Never exceed shallow angles in tight saw boxes." },
      { step: "Checkpoints", detail: "Drill flip zones separately until automatic." }
    ],
    goalsAndScoring: { win: "Beat trilogy's hardest wave sets.", score: "Completion and minimal wall touches." },
    levels: [
      { name: "Speed Boosters", strategy: "Shorter, faster pulses; keep amplitude tiny." },
      { name: "Flip Rooms", strategy: "Mentally invert controls; re‑center on entry." },
      { name: "End Marathon", strategy: "Save stamina; pause between attempts." }
    ],
    proTips: [
      "Cap your angle early",
      "Reset mental model after flips",
      "Practice at 0.8× speed if available",
      "Profile input lag; prefer wired keyboard",
      "Hydrate and keep sessions short"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "Why fail after speed pads?", a: "Amplitude too big—short micro‑pulses only." },
      { q: "Gravity flip confusion?", a: "Pause a beat, re‑center, then continue." },
      { q: "Training tip?", a: "Drill 10 clean exits per gate before full runs." }
    ],
    attribution: { source: "vseigru.net", publisher: "Original rights holder", sourceUrl: "https://g.vseigru.net/7/igra-chjornaya-geometri-volna-super-chellendzh/" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Black Wave 3 Online + Mechanics Guide | wavesdash", metaDescription: "Speed pads, gravity flips, stamina management, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-dash-black-wave-3" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 7,
    slug: "geometry-dash-black-wave-4",
    title: "Geometry Dash Black Wave 4",
    description: "Push your wave skills to the limit in the fourth Black Wave adventure! Experience new level design and wave challenges.",
    category: "geometry-dash",
    thumb: "images/geometry-dash-black-wave4.jpg",
    iframeUrl: "https://yandex.com/games/app/344498?utm_source=distrib&amp;utm_medium=space-waves.co&amp;clid=10575041",
    tags: ["wave", "advanced", "black-series", "geometry-dash", "skill"],
    instructions: ["Master wave control", "Navigate complex patterns", "Use checkpoints wisely", "Focus on smooth movements"],
    rating: 4.3,
    dateAdded: "2025-05-20",
    gameEmbed: {
      controls: ["Hold = up, Release = down"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Advanced tunnels", detail: "Center lane entry; aim flat through exits." },
      { step: "Pattern reading", detail: "Recognize alternating wide/narrow gates early." },
      { step: "Muscle memory", detail: "Repeat drills until pulse cadence is stable." }
    ],
    goalsAndScoring: { win: "Clear fourth‑series patterns.", score: "Completion and clean exits." },
    levels: [
      { name: "Alternating Gates", strategy: "Adjust cadence: wide = longer flat segment." },
      { name: "Saw Chambers", strategy: "Skim hubs flat; avoid over‑steer." },
      { name: "Exit Traps", strategy: "Flatten one tile before gate, then micro‑rise." }
    ],
    proTips: [
      "Flatten before every exit",
      "Count pulses aloud to lock cadence",
      "Reduce screen brightness to lessen glare",
      "Disable screen scaling",
      "Keep pointer out of the way"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "Why clip walls on exits?", a: "Angle not flattened; start leveling earlier." },
      { q: "Cadence unstable?", a: "Use metronome or count beats." },
      { q: "Which browser?", a: "Chrome/Edge desktop recommended." }
    ],
    attribution: { source: "yandex games", publisher: "Original rights holder", sourceUrl: "https://yandex.com/games/app/344498" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Black Wave 4 Online + Exit Control Guide | wavesdash", metaDescription: "Gate cadence, saw chambers, exit traps, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-dash-black-wave-4" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 8,
    slug: "geometry-dash-black-wave-5",
    title: "Geometry Dash Black Wave 5",
    description: "The epic finale of the Black Wave series! Face the ultimate wave challenge with the most complex patterns yet.",
    category: "geometry-dash",
    thumb: "images/geometry-dash-black-wave5.jpg",
    iframeUrl: "https://app-373298.games.s3.yandex.net/373298/r8k1p219s59kjpid5ymnkvyfb59shfd2/index.html?sdk=%2Fsdk%2F_%2Fv2.5bc8bbec2107c9209400.js#origin=https%3A%2F%2Fallwebgames.com&amp;app-id=373298&amp;device-type=desktop",
    tags: ["wave", "finale", "ultimate", "geometry-dash", "mastery","skill"],
    instructions: ["Perfect wave technique required", "Handle multiple wave types", "Memorize difficult sections", "Never give up!"],
    rating: 4.6,
    dateAdded: "2025-05-15",
    gameEmbed: {
      controls: ["Hold = up, Release = down"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Ultimate control", detail: "Tiny amplitude; trust cadence not sight alone." },
      { step: "Long chains", detail: "Relax shoulders; keep breath rhythm steady." },
      { step: "Recovery", detail: "If off‑angle, flatten first, then correct." }
    ],
    goalsAndScoring: { win: "Finish the finale without wall touches.", score: "Completion and consistency." },
    levels: [
      { name: "Pattern Storm", strategy: "Identify repeating motifs; memorize anchor tiles." },
      { name: "Speed Rooms", strategy: "Shorter pulses, maintain cadence despite speed." },
      { name: "End Run", strategy: "Stay conservative; end with micro‑pulses only." }
    ],
    proTips: [
      "Cadence > raw speed",
      "Shoulders down, wrists neutral",
      "Fix angle before micro‑rise",
      "Avoid caffeine before sessions",
      "Finish runs fresh—don’t chase tilt"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "Hands tired?", a: "Short breaks every 10–15 min; stretch fingers." },
      { q: "Speed rooms panic?", a: "Trust cadence; shrink amplitude." },
      { q: "Exit deaths?", a: "Flatten earlier than you think." }
    ],
    attribution: { source: "yandex games", publisher: "Original rights holder", sourceUrl: "https://app-373298.games.s3.yandex.net/373298/index.html" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Black Wave 5 Online + Finale Guide | wavesdash", metaDescription: "Pattern storm, speed rooms, fatigue control, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-dash-black-wave-5" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 9,
    slug: "geometry-dash-wave",
    title: "Geometry Dash Wave",
    description: "Experience pure wave gameplay in this classic Geometry Dash mode! Master the art of wave navigation through various obstacles.",
    category: "geometry-dash",
    thumb: "images/Geometry Dash Wave.jpg",
    iframeUrl: "https://www.jopi.com/embed.php?game=geometry-dash-wave",
    tags: ["wave", "classic", "geometry-dash", "pure", "original","skill"],
    instructions: ["Hold to rise, release to fall", "Control wave amplitude", "Avoid ceiling and floor", "Maintain steady rhythm"],
    rating: 4.7,
    dateAdded: "2024-11-25",
    gameEmbed: {
      controls: ["Hold = rise, Release = fall"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Master amplitude", detail: "Keep shallow angles; avoid big swings." },
      { step: "Gate reading", detail: "Aim for midline entry and flat exits." },
      { step: "Practice flow", detail: "Drill repeating motifs until automatic." }
    ],
    goalsAndScoring: { win: "Clear classic wave sets.", score: "Completion and smooth line." },
    levels: [
      { name: "Classic Lines", strategy: "Even pulses; micro‑adjust before exits." },
      { name: "Zigzag Rooms", strategy: "Do not chase late corrections; reset angle first." },
      { name: "Mirror Paths", strategy: "Re‑center eyes; mirror patterns need fresh timing." }
    ],
    proTips: [
      "Keep pointer off the game frame",
      "Prefer wired keyboard/mouse",
      "Use darker theme to reduce glare",
      "Turn off motion parallax",
      "Record practice for review"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "Best input method?", a: "Keyboard or mouse; avoid touch for tight tunnels." },
      { q: "Beat feels off?", a: "Use visual tiles instead of music temporarily." },
      { q: "Mirror confusion?", a: "Reset hand map; slow for one beat." }
    ],
    attribution: { source: "jopi.com", publisher: "Original rights holder", sourceUrl: "https://www.jopi.com/embed.php?game=geometry-dash-wave" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Geometry Dash Wave Online + Control Tips | wavesdash", metaDescription: "Amplitude control, gate reading, mirror paths, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-dash-wave" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 10,
    slug: "geometry-dash-hyper-wave-neon-challenge",
    title: "Geometry Dash Hyper Wave Neon Challenge",
    description: "Enter a neon-lit hyper wave challenge with intense visuals and fast-paced gameplay! Can you handle the speed?",
    category: "geometry-dash",
    thumb: "images/Geometry Dash Hyper Wave Neon Challenge.jpg",
    iframeUrl: "https://www.jopi.com/embed.php?game=geometry-dash-hyper-wave-neon-challenge",
    tags: ["hyper", "neon", "fast", "wave", "visual","skill"],
    instructions: ["React quickly to changes", "Handle high-speed wave", "Follow neon indicators", "Stay focused on patterns"],
    rating: 4.2,
    dateAdded: "2024-09-15",
    gameEmbed: {
      controls: ["Hold = rise, Release = fall"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Prepare for speed", detail: "Shorter, faster pulses; reduce amplitude." },
      { step: "Read neon cues", detail: "Use neon arrows as pre‑aim hints." },
      { step: "Calm cadence", detail: "Keep breathing steady to avoid over‑steer." }
    ],
    goalsAndScoring: { win: "Survive high‑speed wave sections.", score: "Completion and minimal corrections." },
    levels: [
      { name: "Neon Lanes", strategy: "Follow markers; do not chase late inputs." },
      { name: "Speed Saws", strategy: "Flatten earlier; commit to cadence." },
      { name: "Final Burst", strategy: "Stay conservative; end with micro‑pulses only." }
    ],
    proTips: [
      "Lower graphics to remove bloom",
      "Lock wrist, move fingers only",
      "Count pulses instead of staring at effects",
      "Practice early exits",
      "Avoid caffeine before play"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: ["Bloom may cause glare on low‑end devices"] },
    faq: [
      { q: "Too bright?", a: "Reduce bloom/brightness in settings if available." },
      { q: "Losing control at speed?", a: "Shrink amplitude and trust cadence." },
      { q: "Audio delay?", a: "Use wired headphones; rely on visuals when needed." }
    ],
    attribution: { source: "jopi.com", publisher: "Original rights holder", sourceUrl: "https://www.jopi.com/embed.php?game=geometry-dash-hyper-wave-neon-challenge" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Hyper Wave Neon Challenge Online + Speed Guide | wavesdash", metaDescription: "High‑speed wave control, neon cue reading, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-dash-hyper-wave-neon-challenge" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 11,
    slug: "smash-karts-io",
    title: "Smash Karts IO",
    description: "Race against players worldwide in this action-packed kart racing battle royale! Collect weapons and smash your opponents!",
    category: "multiplayer",
    thumb: "images/Smash Karts IO.jpg",
    iframeUrl: "https://www.jopi.com/embed.php?game=smash-karts-io",
    tags: ["racing", "multiplayer", "battle-royale", "karts", "weapons"],
    instructions: ["WASD or arrow keys to drive", "Collect weapon boxes", "Attack other players", "Be the last kart standing"],
    rating: 4.8,
    dateAdded: "2025-06-13",
    gameEmbed: {
      controls: ["WASD/Arrow keys to drive"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Movement", detail: "Use WASD or arrow keys to control your kart's direction and speed." },
      { step: "Weapon collection", detail: "Drive over weapon boxes to collect power-ups and ammunition." },
      { step: "Combat", detail: "Use collected weapons to attack opponents and defend yourself." }
    ],
    goalsAndScoring: { win: "Be the last kart standing in the arena.", score: "Eliminate opponents and survive the longest." },
    levels: [
      { name: "Arena Combat", strategy: "Stay mobile and avoid getting cornered by multiple opponents." },
      { name: "Weapon Management", strategy: "Prioritize defensive weapons when surrounded, offensive when isolated." },
      { name: "Territory Control", strategy: "Control central areas for better weapon spawns and escape routes." }
    ],
    proTips: [
      "Keep moving to avoid becoming an easy target",
      "Save powerful weapons for critical moments",
      "Use the environment to your advantage",
      "Watch the minimap for approaching enemies",
      "Practice weapon timing and accuracy"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I get better weapons?", a: "Drive over weapon boxes scattered around the arena." },
      { q: "Can I play with friends?", a: "Yes, join the same server to play together." },
      { q: "What's the best strategy?", a: "Stay mobile, collect weapons, and eliminate opponents strategically." }
    ],
    attribution: { source: "jopi.com", publisher: "Original rights holder", sourceUrl: "https://www.jopi.com/embed.php?game=smash-karts-io" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Smash Karts IO Online + Battle Royale Guide | wavesdash", metaDescription: "Kart racing, weapon collection, combat strategies, FAQs.", canonicalUrl: "https://wavesdash.com/game/smash-karts-io" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 12,
    slug: "paper-io-2",
    title: "Paper IO 2",
    description: "Conquer territory by drawing lines and creating closed shapes! Avoid other players while expanding your paper empire.",
    category: "io",
    thumb: "images/Paper IO 2.jpg",
    iframeUrl: "https://www.jopi.com/embed.php?game=paper-io-2",
    tags: ["territory", "io-game", "strategy", "multiplayer", "conquest"],
    instructions: ["Move to draw lines", "Return to your territory to claim area", "Avoid hitting other players' lines", "Expand your territory"],
    rating: 4.1,
    dateAdded: "2024-08-20",
    gameEmbed: {
      controls: ["Mouse to move"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Movement", detail: "Click and drag to move your character around the map." },
      { step: "Line drawing", detail: "Move outside your territory to draw lines that can capture new areas." },
      { step: "Territory claiming", detail: "Return to your territory to close shapes and claim new areas." }
    ],
    goalsAndScoring: { win: "Control the largest territory on the map.", score: "Percentage of map controlled and opponents eliminated." },
    levels: [
      { name: "Early Game", strategy: "Start small, build a safe base territory before expanding aggressively." },
      { name: "Mid Game", strategy: "Look for opportunities to capture isolated players or weak territories." },
      { name: "Late Game", strategy: "Defend your territory while looking for strategic expansion opportunities." }
    ],
    proTips: [
      "Always have a safe path back to your territory",
      "Watch for players who leave their territory vulnerable",
      "Use quick movements to avoid enemy lines",
      "Don't get greedy—secure what you have first",
      "Keep an eye on the leaderboard and target the biggest players"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I capture territory?", a: "Draw lines outside your territory and return to close the shape." },
      { q: "What happens if I hit another player's line?", a: "You'll be eliminated and respawn as a small territory." },
      { q: "How do I win?", a: "Control the largest percentage of the map by capturing territory." }
    ],
    attribution: { source: "jopi.com", publisher: "Original rights holder", sourceUrl: "https://www.jopi.com/embed.php?game=paper-io-2" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Paper IO 2 Online + Territory Conquest Guide | wavesdash", metaDescription: "Territory control, line drawing strategies, multiplayer tactics, FAQs.", canonicalUrl: "https://wavesdash.com/game/paper-io-2" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 13,
    slug: "geometry-dash-breeze",
    title: "Geometry Dash Breeze",
    description: "Experience a refreshing breeze of challenges in this smooth Geometry Dash level! Navigate through flowing obstacles with graceful movements.",
    category: "geometry-dash",
    thumb: "images/geometry-dash-breeze.jpg",
    iframeUrl: "https://1games.io/game/geometry-dash-breeze/",
    tags: ["geometry-dash", "breeze", "smooth", "flowing", "relaxing","skill"],
    instructions: ["Click or spacebar to jump", "Follow the gentle rhythm", "Navigate through wind-like obstacles", "Enjoy the smooth gameplay"],
    rating: 4.6,
    dateAdded: "2025-6-14",
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Gentle rhythm", detail: "Follow the smooth, flowing beat of the level." },
      { step: "Wind navigation", detail: "Navigate through wind-like obstacles with graceful movements." },
      { step: "Flow state", detail: "Maintain smooth, continuous movement throughout the level." }
    ],
    goalsAndScoring: { win: "Complete the breezy level with smooth movements.", score: "Completion time and style points for graceful navigation." },
    levels: [
      { name: "Breeze Introduction", strategy: "Get comfortable with the gentle rhythm and flowing obstacles." },
      { name: "Wind Patterns", strategy: "Learn to read and navigate through wind-like obstacle patterns." },
      { name: "Smooth Flow", strategy: "Maintain continuous, graceful movement through challenging sections." }
    ],
    proTips: [
      "Stay relaxed and follow the natural flow",
      "Don't rush—let the rhythm guide your timing",
      "Practice smooth transitions between obstacles",
      "Use the wind effects as visual cues",
      "Keep your movements fluid and graceful"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I get the smooth flow?", a: "Relax and let the rhythm guide your timing naturally." },
      { q: "What makes this level special?", a: "The gentle, flowing obstacles and smooth gameplay experience." },
      { q: "Any tips for beginners?", a: "Start slow and focus on maintaining smooth, continuous movement." }
    ],
    attribution: { source: "1games.io", publisher: "Original rights holder", sourceUrl: "https://1games.io/game/geometry-dash-breeze/" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Geometry Dash Breeze Online + Smooth Flow Guide | wavesdash", metaDescription: "Gentle rhythm, wind navigation, smooth gameplay, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-dash-breeze" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 14,
    slug: "geometry-dash-world",
    title: "Geometry Dash World",
    description: "Explore different worlds in this expanded Geometry Dash adventure! Travel through various themed levels with unique challenges.",
    category: "geometry-dash",
    thumb: "images/geometry-dash-world.png",
    iframeUrl: "https://1games.io/game/geometry-dash-world/",
    tags: ["geometry-dash", "world", "adventure", "themed", "exploration","skill"],
    instructions: ["Jump with spacebar or click", "Explore different world themes", "Master various level mechanics", "Unlock new worlds by progressing"],
    rating: 4.6,
    dateAdded: "2025-6-14",
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "World exploration", detail: "Navigate through different themed worlds with unique visual styles." },
      { step: "Mechanic mastery", detail: "Learn and adapt to various level mechanics as you progress." },
      { step: "Progression", detail: "Complete levels to unlock new worlds and challenges." }
    ],
    goalsAndScoring: { win: "Explore all worlds and master their unique challenges.", score: "World completion and mechanic mastery." },
    levels: [
      { name: "Starter Worlds", strategy: "Learn basic mechanics and get comfortable with different themes." },
      { name: "Advanced Worlds", strategy: "Master complex mechanics and adapt to challenging environments." },
      { name: "Expert Worlds", strategy: "Conquer the most difficult challenges and unlock all content." }
    ],
    proTips: [
      "Take time to explore each world's unique theme",
      "Practice new mechanics in easier levels first",
      "Don't rush—enjoy the variety of experiences",
      "Replay levels to improve your skills",
      "Keep track of your progress across worlds"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How many worlds are there?", a: "Multiple themed worlds with increasing difficulty levels." },
      { q: "How do I unlock new worlds?", a: "Complete levels in current worlds to progress and unlock new areas." },
      { q: "Are the mechanics different?", a: "Yes, each world introduces unique mechanics and challenges." }
    ],
    attribution: { source: "1games.io", publisher: "Original rights holder", sourceUrl: "https://1games.io/game/geometry-dash-world/" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Geometry Dash World Online + Multi-World Adventure | wavesdash", metaDescription: "World exploration, themed levels, mechanic mastery, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-dash-world" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 15,
    slug: "geometry-vibes",
    title: "Geometry Vibes",
    description: "Feel the rhythm and vibes in this energetic Geometry Dash experience! Sync your movements with the beat and overcome vibrant challenges.",
    category: "geometry-dash",
    thumb: "images/geometry-vibes.webp",
    iframeUrl: "https://1games.io/embed/geometry-vibes",
    tags: ["geometry-dash", "vibes", "rhythm", "energetic", "music","skill"],
    instructions: ["Jump with spacebar or click", "Feel the music rhythm", "Navigate colorful obstacles", "Stay in sync with the beat"],
    rating: 4.7,
    dateAdded: "2025-06-15",
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Rhythm sync", detail: "Feel the music and sync your jumps with the beat." },
      { step: "Vibrant navigation", detail: "Navigate through colorful, energetic obstacles." },
      { step: "Vibe flow", detail: "Maintain the energetic flow throughout the level." }
    ],
    goalsAndScoring: { win: "Complete the level while staying in perfect rhythm with the music.", score: "Rhythm accuracy and completion time." },
    levels: [
      { name: "Vibe Introduction", strategy: "Get into the rhythm and feel the energetic atmosphere." },
      { name: "Rhythm Mastery", strategy: "Perfect your timing to match the music beats." },
      { name: "Vibrant Challenge", strategy: "Navigate complex patterns while maintaining rhythm." }
    ],
    proTips: [
      "Turn up the volume to feel the rhythm better",
      "Let the music guide your timing naturally",
      "Don't fight the beat—flow with it",
      "Use the colorful visuals as rhythm cues",
      "Practice sections that feel off-beat"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I get better rhythm?", a: "Listen to the music and let it guide your timing naturally." },
      { q: "What makes this level special?", a: "The energetic music and vibrant, colorful atmosphere." },
      { q: "Any audio tips?", a: "Use headphones for better rhythm perception and timing." }
    ],
    attribution: { source: "1games.io", publisher: "Original rights holder", sourceUrl: "https://1games.io/embed/geometry-vibes" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Geometry Vibes Online + Rhythm Sync Guide | wavesdash", metaDescription: "Music rhythm, vibrant obstacles, energetic gameplay, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-vibes" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 16,
    slug: "space-waves",
    title: "Space Waves",
    description: "Journey through space with wave-based gameplay! Navigate your ship through cosmic obstacles in this stellar adventure.",
    category: "geometry-dash",
    thumb: "images/space-waves.webp",
    iframeUrl: "https://crazygames.com/embed/space-waves",
    tags: ["geometry-dash", "space", "waves", "cosmic", "adventure","skill"],
    instructions: ["Hold to ascend, release to descend", "Navigate through space debris", "Collect space gems", "Avoid asteroid obstacles"],
    rating: 4.5,
    dateAdded: "2025-06-15",
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://crazygames.com/embed/space-waves" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Space Waves Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/space-waves" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 17,
    slug: "geometry-game-3d",
    title: "Geometry Game 3D",
    description: "Experience Geometry Dash in a whole new dimension! Navigate through 3D geometric landscapes with enhanced depth and perspective.",
    category: "geometry-dash",
    thumb: "images/geometry-game-3d.webp",
    iframeUrl: "https://1games.io/embed/geometry-game-3d",
    tags: ["geometry-dash", "3d", "dimension", "perspective", "geometric","skill"],
    instructions: ["Use spacebar to jump", "Navigate 3D obstacles", "Adjust to depth perception", "Master dimensional gameplay"],
    rating: 4.6,
    dateAdded: "2025-06-15"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "1games.io", publisher: "Original rights holder", sourceUrl: "https://1games.io/embed/geometry-game-3d" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Geometry Game 3D Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/geometry-game-3d" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 18,
    slug: "wave-road",
    title: "Wave Road",
    description: "Travel down the endless wave road with precise control! Master the art of wave navigation on this challenging geometric highway.",
    category: "geometry-dash",
    thumb: "images/wave-road.webp",
    iframeUrl: "https://1games.io/embed/wave-road",
    tags: ["geometry-dash", "wave", "road", "highway", "precision"],
    instructions: ["Control wave movement", "Stay on the road path", "Avoid falling off edges", "Maintain steady rhythm"],
    rating: 4.4,
    dateAdded: "2025-06-15"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "1games.io", publisher: "Original rights holder", sourceUrl: "https://1games.io/embed/wave-road" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Wave Road Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/wave-road" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 19,
    slug: "food-rush",
    title: "Food Rush",
    description: "Rush through delicious food combinations in this fast-paced match-3 adventure! Match tasty treats and complete cooking challenges.",
    category: "match3",
    thumb: "images/food-rush.jpg",
    iframeUrl: "https://play.famobi.com/food-rush/A-FAMOBI-COM",
    tags: ["match3", "food", "cooking", "fast-paced", "delicious"],
    instructions: ["Match 3 or more identical food items", "Complete cooking objectives", "Use power-ups to clear obstacles", "Beat level targets within moves"],
    rating: 4.6,
    dateAdded: "2025-06-16"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "Original rights holder", publisher: "Original rights holder", sourceUrl: "https://play.famobi.com/food-rush/A-FAMOBI-COM" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Food Rush Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/food-rush" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 20,
    slug: "tile-journey",
    title: "Tile Journey",
    description: "Embark on an epic tile-matching journey across mystical lands! Solve challenging puzzles and unlock ancient secrets.",
    category: "match3",
    thumb: "images/tile-journey.jpg",
    iframeUrl: "https://play.famobi.com/tile-journey/A1000-10E",
    tags: ["match3", "journey", "adventure", "mystical", "tiles"],
    instructions: ["Match 3 or more tiles of the same type", "Clear paths to progress", "Collect special artifacts", "Solve each level's unique challenge"],
    rating: 4.5,
    dateAdded: "2025-06-16"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "Original rights holder", publisher: "Original rights holder", sourceUrl: "https://play.famobi.com/tile-journey/A1000-10E" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Tile Journey Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/tile-journey" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 21,
    slug: "diamond-rush-2",
    title: "Diamond Rush 2",
    description: "The ultimate diamond hunting adventure returns! Match sparkling diamonds and precious gems in this thrilling sequel.",
    category: "match3",
    thumb: "images/diamond-rush-2.jpg",
    iframeUrl: "https://play.famobi.com/diamond-rush-2",
    tags: ["match3", "diamond", "gems", "treasure", "sequel"],
    instructions: ["Match 3+ diamonds to collect them", "Create special gem combinations", "Complete mining objectives", "Discover rare diamond formations"],
    rating: 4.7,
    dateAdded: "2025-06-16"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "Original rights holder", publisher: "Original rights holder", sourceUrl: "https://play.famobi.com/diamond-rush-2" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Diamond Rush 2 Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/diamond-rush-2" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 22,
    slug: "garden-bloom",
    title: "Garden Bloom",
    description: "Create beautiful flower gardens by matching colorful blooms! Help flowers grow and bloom in this peaceful gardening puzzle.",
    category: "match3",
    thumb: "images/garden-bloom.jpg",
    iframeUrl: "https://gardenbloom.h5games.usercontent.goog/v/03uof2ceev9h8/?origin=https%3A%2F%2Framesnacks.com&amp.gameCenter1d=ramesnacks&amp",
    tags: ["match3", "garden", "flowers", "nature", "peaceful"],
    instructions: ["Match flower buds to make them bloom", "Create garden patterns", "Use garden tools for special effects", "Complete seasonal challenges"],
    rating: 4.4,
    dateAdded: "2025-06-16"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "Original rights holder", publisher: "Original rights holder", sourceUrl: "https://gardenbloom.h5games.usercontent.goog/v/03uof2ceev9h8/?origin=https%3A%2F%2Framesnacks.com&amp.gameCenter1d=ramesnacks&amp" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Garden Bloom Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/garden-bloom" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 23,
    slug: "garden-match-3d",
    title: "Garden Match 3D",
    description: "Experience match-3 in stunning 3D! Design and maintain beautiful gardens while solving engaging three-dimensional puzzles.",
    category: "match3",
    thumb: "images/garden-match-3d.jpg",
    iframeUrl: "https://play.famobi.com/garden-match-3d",
    tags: ["match3", "3d", "garden", "design", "beautiful"],
    instructions: ["Match items in 3D space", "Rotate view to find matches", "Decorate your garden", "Complete landscaping projects"],
    rating: 4.6,
    dateAdded: "2025-06-16"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "Original rights holder", publisher: "Original rights holder", sourceUrl: "https://play.famobi.com/garden-match-3d" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Garden Match 3D Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/garden-match-3d" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 24,
    slug: "zoo-boom",
    title: "Zoo Boom",
    description: "Join the wildest zoo adventure! Match animal tiles and help zoo animals in this explosive and fun-filled puzzle game.",
    category: "match3",
    thumb: "images/zoo-boom.jpg",
    iframeUrl: "https://play.famobi.com/zoo-boom",
    tags: ["match3", "zoo", "animals", "explosive", "adventure"],
    instructions: ["Match 3 or more animal tiles", "Rescue zoo animals", "Create powerful animal combos", "Complete zoo missions"],
    rating: 4.5,
    dateAdded: "2025-06-16"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "Original rights holder", publisher: "Original rights holder", sourceUrl: "https://play.famobi.com/zoo-boom" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Zoo Boom Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/zoo-boom" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 25,
    slug: "bubble-woods",
    title: "Bubble Woods",
    description: "Pop your way through enchanted forest bubbles! Aim, match colors, and clear the magical woodland in this bubble shooter adventure.",
    category: "match3",
    thumb: "images/bubble-woods.jpg",
    iframeUrl: "https://play.famobi.com/bubble-woods",
    tags: ["match3", "bubble", "forest", "magical", "shooter"],
    instructions: ["Aim and shoot colored bubbles", "Match 3+ bubbles of same color", "Clear forest paths", "Use special bubble power-ups"],
    rating: 4.7,
    dateAdded: "2025-06-16"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "Original rights holder", publisher: "Original rights holder", sourceUrl: "https://play.famobi.com/bubble-woods" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Bubble Woods Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/bubble-woods" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 26,
    slug: "totemia-cursed-marbles",
    title: "Totemia: Cursed Marbles",
    description: "Break the ancient curse by matching mystical marbles! Shoot colored marbles to create matches and solve totemic puzzles.",
    category: "match3",
    thumb: "images/totemia-cursed-marbles.jpg",
    iframeUrl: "https://play.famobi.com/totemia-cursed-marbles",
    tags: ["match3", "marbles", "ancient", "mystical", "curse"],
    instructions: ["Shoot marbles to create matches", "Match 3+ marbles of same color", "Break the marble chains", "Complete totemic challenges"],
    rating: 4.8,
    dateAdded: "2025-06-16"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "Original rights holder", publisher: "Original rights holder", sourceUrl: "https://play.famobi.com/totemia-cursed-marbles" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Totemia: Cursed Marbles Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/totemia-cursed-marbles" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 27,
    slug: "climbing-block",
    title: "Climbing Block",
    description: "Test your climbing skills in this challenging block adventure! Navigate through obstacles and reach new heights in this exciting vertical platformer.",
    category: "casual",
    thumb: "images/climbing-block.webp",
    iframeUrl: "https://www.crazygames.com/embed/climbing-block---let-s-up-llam",
    tags: ["casual", "climbing", "adventure", "skill", "platformer"],
    instructions: ["Use arrow keys or WASD to move", "Jump to climb higher blocks", "Avoid falling obstacles", "Reach the top to win"],
    rating: 4.8,
    dateAdded: "2025-06-17"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/climbing-block---let-s-up-llam" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Climbing Block Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/climbing-block" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 28,
    slug: "lumber-harvest-tree-cutting-game",
    title: "Lumber Harvest: Tree Cutting Game",
    description: "Experience the satisfying world of tree cutting and lumber harvesting! Manage your resources, upgrade your tools, and build a thriving lumber business.",
    category: "casual",
    thumb: "images/lumber-harvest.jpg",
    iframeUrl: "https://www.crazygames.com/embed/lumber-harvest-tree-cutting-game",
    tags: ["casual", "simulation", "management", "harvesting", "business"],
    instructions: ["Click to cut trees", "Collect lumber and resources", "Upgrade your equipment", "Expand your lumber empire"],
    rating: 4.7,
    dateAdded: "2025-06-17"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/lumber-harvest-tree-cutting-game" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Lumber Harvest: Tree Cutting Game Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/lumber-harvest-tree-cutting-game" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 29,
    slug: "craft-market",
    title: "Craft Market",
    description: "Run your own craft market and create amazing items! Buy materials, craft products, and sell them to customers in this engaging business simulation.",
    category: "casual",
    thumb: "images/cubic-shop.avif",
    iframeUrl: "https://www.crazygames.com/embed/cubic-shop",
    tags: ["casual", "crafting", "business", "management", "market"],
    instructions: ["Buy raw materials", "Craft items in your workshop", "Set prices and sell products", "Upgrade your shop and equipment"],
    rating: 4.9,
    dateAdded: "2025-06-17"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/cubic-shop" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Craft Market Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/craft-market" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 30,
    slug: "stone-grass-mowing-simulator",
    title: "Stone Grass: Mowing Simulator",
    description: "Relax and enjoy the peaceful art of lawn mowing! Cut grass, maintain beautiful lawns, and experience the satisfaction of perfectly manicured landscapes.",
    category: "casual",
    thumb: "images/stone-grass.jpg",
    iframeUrl: "https://www.crazygames.com/embed/stone-grass-mowing-simulator",
    tags: ["casual", "simulation", "relaxing", "mowing", "peaceful"],
    instructions: ["Control the lawn mower", "Cut all the grass evenly", "Avoid obstacles and trees", "Complete each level perfectly"],
    rating: 4.8,
    dateAdded: "2025-06-17"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/stone-grass-mowing-simulator" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Stone Grass: Mowing Simulator Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/stone-grass-mowing-simulator" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 31,
    slug: "ragdoll-archers",
    title: "Ragdoll Archers",
    description: "Become a master archer in this fun physics-based shooting game! Aim carefully and watch as ragdoll enemies react to your precise arrows with hilarious physics.",
    category: "casual",
    thumb: "images/ragdoll-archers-cover.avif",
    iframeUrl: "https://www.crazygames.com/embed/ragdoll-archers",
    tags: ["casual", "archery", "physics", "ragdoll", "shooting"],
    instructions: ["Aim with mouse", "Click and drag to set power", "Release to shoot arrows", "Hit targets for maximum points"],
    rating: 4.6,
    dateAdded: "2025-06-17"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/ragdoll-archers" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Ragdoll Archers Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/ragdoll-archers" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 32,
    slug: "find-brainrot",
    title: "Find Brainrot",
    description: "Hunt for hidden brainrot content in this quirky search game! Use your detective skills to find all the hidden memes and internet culture references.",
    category: "casual",
    thumb: "images/find-brainrot.avif",
    iframeUrl: "https://www.crazygames.com/embed/find-brainrot",
    tags: ["casual", "hidden-object", "memes", "search", "internet-culture"],
    instructions: ["Click on hidden objects", "Find all brainrot references", "Use hints if you get stuck", "Complete each level quickly for bonus points"],
    rating: 4.3,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/find-brainrot" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Find Brainrot Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/find-brainrot" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 33,
    slug: "fragen",
    title: "Fragen",
    description: "Test your knowledge and quick thinking in this fast-paced question and answer game! Challenge yourself with diverse topics and improve your general knowledge.",
    category: "action",
    thumb: "images/fragen.avif",
    iframeUrl: "https://www.crazygames.com/embed/fragen",
    tags: ["action", "quiz", "knowledge", "questions", "trivia"],
    instructions: ["Read questions carefully", "Select the correct answer quickly", "Build up your score streak", "Challenge yourself with harder levels"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/fragen" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Fragen Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/fragen" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 34,
    slug: "toonle",
    title: "Toonle",
    description: "Enter the colorful world of Toonle! Create amazing cartoon adventures, design characters, and explore vibrant animated landscapes in this creative casual game.",
    category: "casual",
    thumb: "images/toonle.avif",
    iframeUrl: "https://www.crazygames.com/embed/toonle",
    tags: ["casual", "cartoon", "creative", "animation", "adventure"],
    instructions: ["Design your cartoon character", "Explore colorful worlds", "Create animated stories", "Complete creative challenges"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/toonle" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Toonle Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/toonle" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 35,
    slug: "construction-set-3d-builder",
    title: "Construction Set - 3D Builder",
    description: "Build amazing 3D structures with unlimited creativity! Use various construction tools and materials to create your dream buildings and landscapes.",
    category: "casual",
    thumb: "images/construction-set---3d-builder.avif",
    iframeUrl: "https://www.crazygames.com/embed/construction-set---3d-builder",
    tags: ["casual", "building", "3d", "construction", "creative"],
    instructions: ["Select building materials", "Place blocks in 3D space", "Rotate and position objects", "Save and share your creations"],
    rating: 4.7,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/construction-set---3d-builder" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Construction Set - 3D Builder Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/construction-set-3d-builder" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 36,
    slug: "evo-fish",
    title: "Evo Fish",
    description: "Guide your fish through evolution in this underwater adventure! Eat smaller fish, avoid predators, and evolve into the ultimate sea creature.",
    category: "casual",
    thumb: "images/evo-fish.avif",
    iframeUrl: "https://www.crazygames.com/embed/evo-fish",
    tags: ["casual", "evolution", "fish", "underwater", "survival"],
    instructions: ["Eat smaller fish to grow", "Avoid larger predators", "Collect evolution points", "Unlock new fish species"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/evo-fish" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Evo Fish Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/evo-fish" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 37,
    slug: "street-food-simulator",
    title: "Street Food Simulator",
    description: "Run your own street food business! Cook delicious meals, serve hungry customers, and build the most popular food truck in the city.",
    category: "casual",
    thumb: "images/street-food-simulator.avif",
    iframeUrl: "https://www.crazygames.com/embed/street-food-simulator",
    tags: ["casual", "cooking", "business", "simulation", "food"],
    instructions: ["Take customer orders", "Cook food ingredients", "Serve meals quickly", "Upgrade your equipment and menu"],
    rating: 4.8,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/street-food-simulator" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Street Food Simulator Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/street-food-simulator" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 38,
    slug: "capybara-clicker",
    title: "Capybara Clicker",
    description: "Click your way to capybara paradise! Collect adorable capybaras, unlock new varieties, and build the ultimate capybara collection.",
    category: "casual",
    thumb: "images/capybara-clicker.webp",
    iframeUrl: "https://www.crazygames.com/embed/capybara-clicker",
    tags: ["casual", "clicker", "capybara", "idle", "collection"],
    instructions: ["Click to collect capybaras", "Upgrade your clicking power", "Unlock new capybara types", "Build automatic capybara generators"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/capybara-clicker" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Capybara Clicker Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/capybara-clicker" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 39,
    slug: "brainrot-idle-clicker",
    title: "Brainrot Idle Clicker",
    description: "Embrace the chaos of internet culture in this addictive idle clicker! Generate memes, collect brainrot content, and watch your influence grow.",
    category: "casual",
    thumb: "images/brainrot-idle-clicker.avif",
    iframeUrl: "https://www.crazygames.com/embed/brainrot-idle-clicker",
    tags: ["casual", "idle", "clicker", "memes", "internet"],
    instructions: ["Click to generate brainrot", "Purchase upgrade generators", "Unlock new meme categories", "Maximize your viral potential"],
    rating: 4.4,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/brainrot-idle-clicker" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Brainrot Idle Clicker Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/brainrot-idle-clicker" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 40,
    slug: "papaya-summer-farm",
    title: "Papaya Summer Farm",
    description: "Experience the joy of tropical farming! Grow exotic papayas, manage your summer farm, and create a thriving agricultural paradise.",
    category: "casual",
    thumb: "images/papaya-summer-farm.avif",
    iframeUrl: "https://www.crazygames.com/embed/papaya-summer-farm-sho",
    tags: ["casual", "farming", "tropical", "simulation", "agriculture"],
    instructions: ["Plant papaya seeds", "Water and care for crops", "Harvest ripe fruits", "Expand your farm operations"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/papaya-summer-farm-sho" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Papaya Summer Farm Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/papaya-summer-farm" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 41,
    slug: "animal-dna-run",
    title: "Animal DNA Run",
    description: "Explore the mysteries of genetics! Control genetically modified animals in this sci-fi running game, traverse futuristic laboratories, collect DNA fragments, and unlock new genetic abilities.",
    category: "casual",
    thumb: "images/animal-dna-run.avif",
    iframeUrl: "https://www.crazygames.com/embed/animal-dna-run",
    tags: ["casual", "running", "dna", "science", "animals", "futuristic"],
    instructions: ["Control genetically modified animals", "Collect DNA fragments and energy", "Avoid laboratory obstacles", "Unlock new genetic abilities", "Explore scientific laboratories"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/animal-dna-run" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Animal DNA Run Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/animal-dna-run" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 42,
    slug: "layers-roll",
    title: "Layers Roll",
    description: "Roll through colorful layers in this satisfying puzzle game! Peel away layers, solve geometric puzzles, and reveal hidden patterns.",
    category: "casual",
    thumb: "images/layers-roll.avif",
    iframeUrl: "https://www.crazygames.com/embed/layers-roll",
    tags: ["casual", "puzzle", "layers", "rolling", "satisfying"],
    instructions: ["Swipe to roll layers", "Peel away outer layers", "Reveal the core pattern", "Complete each level efficiently"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/layers-roll" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Layers Roll Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/layers-roll" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 43,
    slug: "i-dont-even-know",
    title: "I Don't Even Know",
    description: "Embrace the absurd in this unpredictable game! Navigate through random challenges, bizarre scenarios, and unexpected gameplay mechanics.",
    category: "casual",
    thumb: "images/idk.webp",
    iframeUrl: "https://www.crazygames.com/embed/i-dont-even-know",
    tags: ["casual", "random", "absurd", "unpredictable", "humor"],
    instructions: ["Expect the unexpected", "Adapt to changing rules", "Embrace the chaos", "Just go with the flow"],
    rating: 4.3,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/i-dont-even-know" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "I Don't Even Know Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/i-dont-even-know" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 44,
    slug: "shovel-3d",
    title: "Shovel 3D",
    description: "Dig your way to treasure in this 3D excavation adventure! Use your shovel to uncover hidden artifacts, gems, and ancient treasures.",
    category: "casual",
    thumb: "images/shovel-3d.avif",
    iframeUrl: "https://www.crazygames.com/embed/shovel-3d",
    tags: ["casual", "digging", "3d", "treasure", "excavation"],
    instructions: ["Click and drag to dig", "Uncover buried treasures", "Avoid obstacles underground", "Complete excavation objectives"],
    rating: 4.4,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/shovel-3d" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Shovel 3D Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/shovel-3d" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 45,
    slug: "lazy-jumper",
    title: "Lazy Jumper",
    description: "Jump with style in this relaxed platformer! Control a lazy character through chill levels, collect items, and enjoy the laid-back gameplay.",
    category: "casual",
    thumb: "images/lazy-jumper.avif",
    iframeUrl: "https://www.crazygames.com/embed/lazy-jumper",
    tags: ["casual", "jumping", "relaxed", "platformer", "chill"],
    instructions: ["Tap to jump lazily", "Collect floating items", "Land on safe platforms", "Take your time and enjoy"],
    rating: 4.2,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/lazy-jumper" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Lazy Jumper Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/lazy-jumper" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 46,
    slug: "mafia-business-empire-stickman-escape-3d",
    title: "Mafia Business Empire: Stickman Escape 3d",
    description: "Build your criminal empire and escape dangerous situations! Control stickman characters in this thrilling 3D mafia adventure game.",
    category: "casual",
    thumb: "images/mafia-business-empire-stickman-escap.avif",
    iframeUrl: "https://www.crazygames.com/embed/mafia-business-empire-stickman-escape-3d",
    tags: ["casual", "mafia", "stickman", "3d", "escape"],
    instructions: ["Build your criminal network", "Plan strategic escapes", "Avoid law enforcement", "Expand your mafia empire"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/mafia-business-empire-stickman-escape-3d" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Mafia Business Empire: Stickman Escape 3d Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/mafia-business-empire-stickman-escape-3d" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 47,
    slug: "fragen",
    title: "Fragen",
    description: "Test your knowledge and quick thinking in this fast-paced question and answer game! Challenge yourself with diverse topics and improve your general knowledge.",
    category: "action",
    thumb: "images/fragen.avif",
    iframeUrl: "https://www.crazygames.com/embed/fragen",
    tags: ["action", "quiz", "knowledge", "questions", "trivia"],
    instructions: ["Read questions carefully", "Select the correct answer quickly", "Build up your score streak", "Challenge yourself with harder levels"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/fragen" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Fragen Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/fragen" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 48,
    slug: "eternal-siege",
    title: "Eternal Siege",
    description: "Defend your fortress in this epic siege warfare game! Command armies, build defenses, and survive endless waves of attackers.",
    category: "action",
    thumb: "images/eternal-siege.avif",
    iframeUrl: "https://www.crazygames.com/embed/eternal-siege",
    tags: ["action", "strategy", "defense", "warfare", "siege"],
    instructions: ["Build defensive structures", "Command your troops", "Upgrade weapons and armor", "Survive the eternal siege"],
    rating: 4.7,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/eternal-siege" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Eternal Siege Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/eternal-siege" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 49,
    slug: "cowz-io",
    title: "Cowz.io",
    description: "Join the bovine battle royale! Control your cow warrior in this multiplayer arena and become the ultimate moo-master!",
    category: "action",
    thumb: "images/cowz-io.avif",
    iframeUrl: "https://www.crazygames.com/embed/cowz-io",
    tags: ["action", "multiplayer", "io-game", "battle-royale", "cows"],
    instructions: ["Move with WASD or arrow keys", "Left click to attack", "Collect power-ups", "Eliminate other players"],
    rating: 4.4,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/cowz-io" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Cowz.io Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/cowz-io" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 50,
    slug: "archer-clash",
    title: "Archer Clash",
    description: "Master the art of archery in epic battles! Aim precisely, time your shots perfectly, and defeat enemy archers in intense duels.",
    category: "action",
    thumb: "images/archer-clash.avif",
    iframeUrl: "https://www.crazygames.com/embed/archer-clash-ftj",
    tags: ["action", "archery", "duels", "precision", "medieval"],
    instructions: ["Aim with mouse", "Hold and drag to set power", "Release to shoot arrows", "Hit enemies to win battles"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/archer-clash-ftj" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Archer Clash Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/archer-clash" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 51,
    slug: "war-v-survivor",
    title: "War V: Survivor",
    description: "Survive the ultimate war zone! Fight through hostile territories, upgrade your weapons, and become the last survivor standing.",
    category: "action",
    thumb: "images/war-v-survivor.avif",
    iframeUrl: "https://www.crazygames.com/embed/war-v-survivor",
    tags: ["action", "survival", "war", "shooting", "upgrade"],
    instructions: ["Move with WASD keys", "Aim and shoot with mouse", "Collect weapons and ammo", "Survive as long as possible"],
    rating: 4.8,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/war-v-survivor" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "War V: Survivor Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/war-v-survivor" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 52,
    slug: "uncle-hit-punch-the-dummy",
    title: "Uncle Hit: Punch the Dummy",
    description: "Release your stress by punching the training dummy! Use various fighting techniques and combos to achieve the highest damage scores.",
    category: "action",
    thumb: "images/uncle-hit-punch-the-dummy.avif",
    iframeUrl: "https://www.crazygames.com/embed/uncle-hit-punch-the-dummy",
    tags: ["action", "fighting", "stress-relief", "training", "combos"],
    instructions: ["Click to punch the dummy", "Try different punch combinations", "Build up combo multipliers", "Achieve high damage scores"],
    rating: 4.3,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/uncle-hit-punch-the-dummy" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Uncle Hit: Punch the Dummy Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/uncle-hit-punch-the-dummy" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 53,
    slug: "asteroid-breaker",
    title: "Asteroid Breaker",
    description: "Protect Earth from incoming asteroids! Pilot your spaceship through dangerous asteroid fields and blast them to pieces.",
    category: "action",
    thumb: "images/asteroid-breaker.avif",
    iframeUrl: "https://www.crazygames.com/embed/asteroid-breaker-ezu",
    tags: ["action", "space", "shooting", "asteroids", "defense"],
    instructions: ["Move spaceship with arrow keys", "Spacebar to shoot", "Destroy all asteroids", "Avoid collision with debris"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/asteroid-breaker-ezu" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Asteroid Breaker Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/asteroid-breaker" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 54,
    slug: "crazy-vikings-life",
    title: "Crazy Vikings Life",
    description: "Experience the wild life of a Viking warrior! Raid villages, battle monsters, and build your legendary Viking saga.",
    category: "action",
    thumb: "images/crazy-vikings-life.avif",
    iframeUrl: "https://www.crazygames.com/embed/crazy-vikings-life",
    tags: ["action", "vikings", "adventure", "medieval", "warrior"],
    instructions: ["Control your Viking with WASD", "Attack with left click", "Collect loot and resources", "Complete Viking quests"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/crazy-vikings-life" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Crazy Vikings Life Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/crazy-vikings-life" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 55,
    slug: "crazy-miners",
    title: "Crazy Miners",
    description: "Join the underground mining mayhem! Compete with other miners, collect precious gems, and become the richest miner in the depths.",
    category: "action",
    thumb: "images/crazy-miners.avif",
    iframeUrl: "https://www.crazygames.com/embed/crazy-miners-multiplayer",
    tags: ["action", "mining", "multiplayer", "competition", "gems"],
    instructions: ["Move with WASD keys", "Mine blocks with left click", "Collect gems and resources", "Compete with other players"],
    rating: 4.4,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/crazy-miners-multiplayer" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Crazy Miners Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/crazy-miners" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 56,
    slug: "hero-3-flying-robot",
    title: "Hero 3: Flying Robot",
    description: "Soar through the skies as a powerful flying robot hero! Battle enemies in aerial combat and save the world from destruction.",
    category: "action",
    thumb: "images/hero-3-flying-robot.avif",
    iframeUrl: "https://www.crazygames.com/embed/hero-3-flying-robot",
    tags: ["action", "robot", "flying", "hero", "combat"],
    instructions: ["Fly with WASD or arrow keys", "Shoot with spacebar or click", "Use special abilities", "Complete heroic missions"],
    rating: 4.7,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/hero-3-flying-robot" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Hero 3: Flying Robot Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/hero-3-flying-robot" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 57,
    slug: "street-fighter-simulator",
    title: "Street Fighter Simulator",
    description: "Master the art of street fighting! Learn powerful combos, special moves, and become the ultimate street fighting champion.",
    category: "action",
    thumb: "images/street-fighter-simulator.avif",
    iframeUrl: "https://www.crazygames.com/embed/street-fighter-simulator",
    tags: ["action", "fighting", "martial-arts", "combos", "tournament"],
    instructions: ["Use arrow keys to move", "A/S/D keys for different attacks", "Learn combo sequences", "Defeat all opponents"],
    rating: 4.8,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/street-fighter-simulator" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Street Fighter Simulator Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/street-fighter-simulator" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 58,
    slug: "the-unfair-platformer",
    title: "The Unfair Platformer",
    description: "Face the most challenging and unfair platformer ever created! Navigate through devious traps, hidden spikes, and impossible jumps.",
    category: "action",
    thumb: "images/the-unfair-platformer.avif",
    iframeUrl: "https://www.crazygames.com/embed/the-unfair-platformer",
    tags: ["action", "platformer", "challenging", "difficult", "traps"],
    instructions: ["Arrow keys or WASD to move", "Spacebar to jump", "Expect the unexpected", "Don't give up, keep trying!"],
    rating: 4.2,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/the-unfair-platformer" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "The Unfair Platformer Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/the-unfair-platformer" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 59,
    slug: "tap-reveal",
    title: "Tap Reveal",
    description: "Uncover hidden secrets with strategic tapping! Use logic and deduction to reveal patterns, solve mysteries, and unlock new levels in this engaging puzzle game.",
    category: "strategy",
    thumb: "images/tap-reveal.avif",
    iframeUrl: "https://www.crazygames.com/embed/tap-reveal",
    tags: ["strategy", "puzzle", "logic", "deduction", "mystery"],
    instructions: ["Tap on tiles to reveal content", "Use logical thinking to find patterns", "Deduce the correct sequence", "Complete objectives to advance"],
    rating: 4.4,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/tap-reveal" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Tap Reveal Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/tap-reveal" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 60,
    slug: "cups-water-sort-puzzle",
    title: "Cups - Water Sort Puzzle",
    description: "Sort colored water into matching cups in this relaxing strategy puzzle! Plan your moves carefully to organize all the water by color in the fewest steps possible.",
    category: "strategy",
    thumb: "images/cups---water-sort-puzzle.avif",
    iframeUrl: "https://www.crazygames.com/embed/cups---water-sort-puzzle",
    tags: ["strategy", "puzzle", "sorting", "logic", "relaxing"],
    instructions: ["Tap a cup to select it", "Tap another cup to pour water", "Sort water by matching colors", "Complete each level with minimum moves"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/cups---water-sort-puzzle" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Cups - Water Sort Puzzle Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/cups-water-sort-puzzle" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 61,
    slug: "the-dumb-test",
    title: "The Dumb Test",
    description: "Think you're smart? Take on this deceptively challenging intelligence test! Solve tricky questions, avoid obvious traps, and prove your mental agility.",
    category: "strategy",
    thumb: "images/the-dumb-test.avif",
    iframeUrl: "https://www.crazygames.com/embed/the-dumb-test",
    tags: ["strategy", "intelligence", "quiz", "tricky", "brain-teaser"],
    instructions: ["Read each question carefully", "Think outside the box", "Avoid obvious wrong answers", "Use logic and creativity to solve"],
    rating: 4.3,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/the-dumb-test" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "The Dumb Test Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/the-dumb-test" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 62,
    slug: "golf-mania",
    title: "Golf Mania",
    description: "Experience the ultimate golf adventure! Master your swing, navigate challenging courses, and become a golf champion in this exciting sports simulation.",
    category: "sports",
    thumb: "images/golf-mania.avif",
    iframeUrl: "https://www.crazygames.com/embed/golf-mania",
    tags: ["sports", "golf", "simulation", "championship", "precision"],
    instructions: ["Aim your shot with mouse", "Click and drag to set power", "Release to swing the club", "Get the ball in the hole with fewest strokes"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/golf-mania" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Golf Mania Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/golf-mania" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 63,
    slug: "stunt-paradise",
    title: "Stunt Paradise",
    description: "Perform death-defying stunts in this extreme sports paradise! Jump, flip, and soar through incredible obstacle courses and become a stunt legend.",
    category: "sports",
    thumb: "images/stunt-paradise.avif",
    iframeUrl: "https://www.crazygames.com/embed/stunt-paradise",
    tags: ["sports", "stunts", "extreme", "acrobatics", "adventure"],
    instructions: ["Use arrow keys to control movement", "Spacebar for special stunts", "Land safely to score points", "Complete all stunt challenges"],
    rating: 4.7,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/stunt-paradise" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Stunt Paradise Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/stunt-paradise" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 64,
    slug: "color-zone",
    title: "Color Zone",
    description: "Enter the colorful world of competitive sports! Match colors, complete challenges, and dominate the zone in this unique sports puzzle hybrid.",
    category: "sports",
    thumb: "images/color-zone.avif",
    iframeUrl: "https://www.crazygames.com/embed/color-zone",
    tags: ["sports", "color", "competition", "puzzle", "zone"],
    instructions: ["Match the required colors", "Complete zone objectives", "Beat time challenges", "Unlock new color zones"],
    rating: 4.4,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/color-zone" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Color Zone Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/color-zone" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 65,
    slug: "stickman-tennis-3d",
    title: "Stickman Tennis 3D",
    description: "Play tennis like never before in 3D! Control your stickman player, master powerful serves and volleys, and compete in thrilling tennis matches.",
    category: "sports",
    thumb: "images/stickman-tennis-3d.avif",
    iframeUrl: "https://www.crazygames.com/embed/stickman-tennis-3d",
    tags: ["sports", "tennis", "3d", "stickman", "competition"],
    instructions: ["Move with WASD or arrow keys", "Click to hit the ball", "Aim for opponent's weak spots", "Win sets to advance in tournament"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/stickman-tennis-3d" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Stickman Tennis 3D Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/stickman-tennis-3d" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 66,
    slug: "afk-dungeon-idle-action-rpg",
    title: "AFK Dungeon: Idle Action RPG",
    description: "Explore mysterious dungeons and grow stronger in this idle action RPG! Auto-battle system lets your hero adventure continuously, collect equipment, upgrade skills, and become the ultimate dungeon conqueror.",
    category: "adventure",
    thumb: "images/afk-dungeon-zaq.webp",
    iframeUrl: "https://www.crazygames.com/embed/afk-dungeon-zaq",
    tags: ["adventure", "rpg", "idle", "dungeon", "action", "upgrade"],
    instructions: ["Choose your hero class", "Auto-explore dungeon levels", "Collect equipment and gold", "Upgrade skills and attributes", "Challenge deeper dungeon floors"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/afk-dungeon-zaq" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "AFK Dungeon: Idle Action RPG Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/afk-dungeon-idle-action-rpg" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 67,
    slug: "metro-escape",
    title: "Metro Escape",
    description: "Survive in this intense metro escape game! Navigate through dangerous underground tunnels, solve puzzles, avoid traps, and find your way to freedom.",
    category: "adventure",
    thumb: "images/metro-escape.avif",
    iframeUrl: "https://www.crazygames.com/embed/metro-escape",
    tags: ["adventure", "escape", "puzzle", "survival", "underground", "thriller"],
    instructions: ["Explore metro stations and tunnels", "Collect useful items", "Solve complex puzzles", "Avoid dangerous traps", "Find the escape exit"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/metro-escape" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Metro Escape Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/metro-escape" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 68,
    slug: "idle-saga",
    title: "Idle Saga",
    description: "Begin your idle adventure saga! Build powerful teams, auto-battle for resources, unlock new heroes and skills, and write your epic legend.",
    category: "adventure",
    thumb: "images/idle-saga.avif",
    iframeUrl: "https://www.crazygames.com/embed/idle-saga",
    tags: ["adventure", "idle", "saga", "heroes", "strategy", "epic"],
    instructions: ["Build your hero team", "Set up auto-battle mode", "Collect experience and equipment", "Unlock new hero characters", "Progress through epic storylines"],
    rating: 4.7,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/idle-saga" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Idle Saga Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/idle-saga" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 69,
    slug: "noob-digger-pro-drill-miner",
    title: "Noob Digger: Pro Drill Miner",
    description: "Grow from novice miner to professional drill master! Mine precious minerals, upgrade drilling equipment, explore the underground world's infinite treasures and secrets.",
    category: "adventure",
    thumb: "images/noob-digger-pro-drill-miner.avif",
    iframeUrl: "https://www.crazygames.com/embed/noob-digger-pro-drill-miner-cal",
    tags: ["adventure", "mining", "drilling", "upgrade", "treasure", "exploration"],
    instructions: ["Control drill machine to dig downward", "Collect minerals and gems", "Upgrade drilling equipment", "Unlock new mining areas", "Discover hidden treasures"],
    rating: 4.4,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/noob-digger-pro-drill-miner-cal" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Noob Digger: Pro Drill Miner Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/noob-digger-pro-drill-miner" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 70,
    slug: "animal-shopping-supermarket",
    title: "Animal Shopping Supermarket",
    description: "Run your animal supermarket! Serve cute animal customers, manage inventory, expand your store, and become the most popular animal supermarket owner.",
    category: "simulation",
    thumb: "images/animal-shopping-supermarket.avif",
    iframeUrl: "https://www.crazygames.com/embed/animal-shopping-supermarket",
    tags: ["simulation", "management", "animals", "shopping", "business", "cute"],
    instructions: ["Serve animal customers", "Manage product inventory", "Handle cashier operations to earn coins", "Upgrade and expand your supermarket", "Keep all animal customers satisfied"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/animal-shopping-supermarket" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Animal Shopping Supermarket Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/animal-shopping-supermarket" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 71,
    slug: "hungry-ocean-eat-feed-and-grow-fish",
    title: "Hungry Ocean: Eat, Feed and Grow Fish",
    description: "In the vast ocean, survive and grow! Start from a small fish, eat smaller ones, avoid dangerous predators, and evolve into a powerful ocean ruler.",
    category: "io",
    thumb: "images/hungry-ocean-eat-feed-and-grow-fish.avif",
    iframeUrl: "https://www.crazygames.com/embed/hungry-ocean-eat-feed-and-grow-fish",
    tags: ["io", "survival", "ocean", "fish", "evolution", "multiplayer"],
    instructions: ["Control your fish to swim", "Eat smaller fish to grow", "Avoid larger predators", "Collect food to grow faster", "Evolve into a stronger ocean creature"],
    rating: 4.6,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/hungry-ocean-eat-feed-and-grow-fish" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Hungry Ocean: Eat, Feed and Grow Fish Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/hungry-ocean-eat-feed-and-grow-fish" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 72,
    slug: "mahjongg-solitaire",
    title: "Mahjongg Solitaire",
    description: "Classic Mahjong card game! Match identical tiles, clear the board, and challenge your observation and strategy skills.",
    category: "mahjong",
    thumb: "images/mahjongg-solitaire.avif",
    iframeUrl: "https://www.crazygames.com/embed/mahjongg-solitaire",
    tags: ["mahjong", "solitaire", "puzzle", "traditional", "matching", "strategy"],
    instructions: ["Find matching Mahjong tiles", "Only select uncovered tiles", "Match two identical tiles to remove", "Clear the board to win", "Plan your moves carefully"],
    rating: 4.5,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/mahjongg-solitaire" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Mahjongg Solitaire Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/mahjongg-solitaire" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 73,
    slug: "piles-of-mahjong",
    title: "Piles of Mahjong",
    description: "Unique Mahjong stacking challenge! Find matching pairs in the complex Mahjong tile piles and test your spatial imagination and patience.",
    category: "mahjong",
    thumb: "images/piles-of-mahjong.avif",
    iframeUrl: "https://www.crazygames.com/embed/piles-of-mahjong",
    tags: ["mahjong", "puzzle", "3d", "stacking", "matching", "challenge"],
    instructions: ["Observe 3D Mahjong piles", "Find movable tiles", "Match identical Mahjong tiles", "Clear Mahjong piles layer by layer", "Complete all challenge levels"],
    rating: 4.4,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/piles-of-mahjong" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Piles of Mahjong Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/piles-of-mahjong" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 74,
    slug: "mahjong-online",
    title: "Mahjong Online",
    description: "Online Mahjong classic experience! Enjoy traditional Mahjong games with players from around the world and improve your Mahjong skills.",
    category: "mahjong",
    thumb: "images/mahjong-online.avif",
    iframeUrl: "https://www.crazygames.com/embed/mahjong-classic-webgl",
    tags: ["mahjong", "online", "multiplayer", "classic", "traditional", "skill"],
    instructions: ["Learn Mahjong basic rules", "Form Mahjong hands to score points", "Observe other players' moves", "Develop optimal strategies", "Strive for the highest score"],
    rating: 4.7,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/mahjong-classic-webgl" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Mahjong Online Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/mahjong-online" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 75,
    slug: "hack-and-climb",
    title: "Hack and Climb",
    description: "Skill climbing challenge game! Use your tools to break through obstacles, climb dangerous heights, and test your reaction speed and operation skills.",
    category: "skill",
    thumb: "images/hack-and-climb.avif",
    iframeUrl: "https://www.crazygames.com/embed/hack-and-climb",
    tags: ["skill", "climbing", "platformer", "challenge", "precision", "timing"],
    instructions: ["Use tools to break through obstacles", "Accurately control climbing movements", "Avoid dangerous traps", "Master jump timing", "Reach the top to complete the challenge"],
    rating: 4.3,
    dateAdded: "2025-06-22"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/hack-and-climb" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Hack and Climb Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/hack-and-climb" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 76,
    slug: "smash-quest",
    title: "Smash Quest",
    description: "Epic adventure smashing game! Break through obstacles, defeat enemies, and embark on an exciting quest filled with action and challenges.",
    category: "casual",
    thumb: "images/smash-quest.avif",
    iframeUrl: "https://www.crazygames.com/embed/smash-quest",
    tags: ["casual", "adventure", "smashing", "quest", "action", "obstacles"],
    instructions: ["Click or tap to smash objects", "Collect power-ups and bonuses", "Avoid dangerous obstacles", "Complete quest objectives", "Unlock new levels"],
    rating: 4.4,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/smash-quest" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Smash Quest Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/smash-quest" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 77,
    slug: "idle-construction-3d",
    title: "Idle Construction 3D",
    description: "Build and manage your construction empire! Watch your buildings grow automatically while you make strategic decisions to expand your construction business.",
    category: "casual",
    thumb: "images/idle-construction-3d.avif",
    iframeUrl: "https://www.crazygames.com/embed/idle-construction-3d",
    tags: ["casual", "idle", "construction", "management", "3d", "building"],
    instructions: ["Start with basic construction projects", "Upgrade your equipment and workers", "Expand to new construction sites", "Collect profits automatically", "Invest in bigger projects"],
    rating: 4.5,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/idle-construction-3d" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Idle Construction 3D Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/idle-construction-3d" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 78,
    slug: "domino-duel",
    title: "Domino Duel",
    description: "Strategic domino competition! Challenge opponents in exciting domino matches, plan your moves carefully, and master the art of domino strategy.",
    category: "casual",
    thumb: "images/domino-duel.avif",
    iframeUrl: "https://www.crazygames.com/embed/domino-duel-uit",
    tags: ["casual", "domino", "strategy", "duel", "board", "thinking"],
    instructions: ["Match domino numbers to play tiles", "Block your opponent's moves", "Plan several moves ahead", "Use all your dominoes to win", "Master different domino variants"],
    rating: 4.3,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/domino-duel-uit" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Domino Duel Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/domino-duel" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 79,
    slug: "bakery-manage-store-simulator",
    title: "Bakery Manage: Store Simulator",
    description: "Run your dream bakery! Manage customers, bake delicious goods, upgrade equipment, and build the most successful bakery in town.",
    category: "casual",
    thumb: "images/bakery-manage-store-simulator.avif",
    iframeUrl: "https://www.crazygames.com/embed/bakery-manage-store-simulator",
    tags: ["casual", "simulation", "management", "bakery", "cooking", "business"],
    instructions: ["Take customer orders accurately", "Bake fresh goods daily", "Manage inventory and supplies", "Upgrade bakery equipment", "Expand your menu and store"],
    rating: 4.6,
    dateAdded: "2025-06-23"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/bakery-manage-store-simulator" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Bakery Manage: Store Simulator Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/bakery-manage-store-simulator" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 80,
    slug: "animal-royal",
    title: "Animal Royal",
    description: "Cute animal kingdom adventure! Help adorable animals compete for the crown in this charming game filled with fun challenges and royal quests.",
    category: "casual",
    thumb: "images/animal-royal.avif",
    iframeUrl: "https://www.crazygames.com/embed/animal-royal-vse",
    tags: ["casual", "animals", "adventure", "cute", "kingdom", "competition"],
    instructions: ["Choose your favorite animal character", "Complete royal challenges", "Collect crowns and rewards", "Unlock new animal friends", "Become the animal king or queen"],
    rating: 4.5,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/animal-royal-vse" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Animal Royal Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/animal-royal" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 81,
    slug: "sky-blocks-falling",
    title: "Sky Blocks Falling",
    description: "Fast-paced block puzzle game! Catch and arrange falling blocks from the sky to create perfect lines and achieve high scores in this addictive puzzle challenge.",
    category: "casual",
    thumb: "images/sky-blocks-falling.avif",
    iframeUrl: "https://www.crazygames.com/embed/sky-blocks-falling",
    tags: ["casual", "puzzle", "blocks", "tetris", "falling", "reflex"],
    instructions: ["Move blocks left and right", "Rotate blocks to fit spaces", "Create complete horizontal lines", "Clear lines to score points", "Prevent blocks from reaching the top"],
    rating: 4.4,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/sky-blocks-falling" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Sky Blocks Falling Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/sky-blocks-falling" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 82,
    slug: "harvest-kings",
    title: "Harvest Kings",
    description: "Rule your farming kingdom! Plant crops, raise animals, and manage your agricultural empire to become the ultimate harvest king in this farming simulation.",
    category: "casual",
    thumb: "images/harvest-kings.avif",
    iframeUrl: "https://www.crazygames.com/embed/harvest-kings",
    tags: ["casual", "farming", "simulation", "harvest", "management", "agriculture"],
    instructions: ["Plant and water your crops", "Harvest when crops are ready", "Raise and care for farm animals", "Sell products at the market", "Expand and upgrade your farm"],
    rating: 4.7,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/harvest-kings" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Harvest Kings Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/harvest-kings" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 83,
    slug: "idle-lumber-mill",
    title: "Idle Lumber Mill",
    description: "Build your lumber empire! Start with a small sawmill and grow into a massive lumber operation. Watch your business run automatically while you make strategic decisions.",
    category: "casual",
    thumb: "images/idle-lumber-mill.avif",
    iframeUrl: "https://www.crazygames.com/embed/idle-lumber-mill",
    tags: ["casual", "idle", "lumber", "mill", "business", "management"],
    instructions: ["Start cutting basic lumber", "Upgrade your sawmill equipment", "Hire more workers", "Process different wood types", "Expand your lumber operations"],
    rating: 4.6,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/idle-lumber-mill" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Idle Lumber Mill Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/idle-lumber-mill" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 84,
    slug: "ellie-s-recipe-dubai-chocolate-bar",
    title: "Ellie's Recipe: Dubai Chocolate Bar",
    description: "Cook with Ellie! Learn to make the famous Dubai chocolate bar in this delightful cooking game. Follow recipes, mix ingredients, and create delicious treats.",
    category: "casual",
    thumb: "images/ellie-s-recipe-dubai-chocolate-bar.avif",
    iframeUrl: "https://www.crazygames.com/embed/ellie-s-recipe-dubai-chocolate-bar",
    tags: ["casual", "cooking", "recipe", "chocolate", "baking", "food"],
    instructions: ["Follow the recipe steps carefully", "Mix ingredients in correct order", "Use cooking tools properly", "Decorate your chocolate creation", "Share your delicious results"],
    rating: 4.5,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/ellie-s-recipe-dubai-chocolate-bar" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Ellie's Recipe: Dubai Chocolate Bar Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/ellie-s-recipe-dubai-chocolate-bar" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 85,
    slug: "the-most-addicting-sheep-game",
    title: "The Most Addicting Sheep Game",
    description: "Can't stop playing! Guide cute sheep through challenging puzzles and obstacles in this incredibly addictive game that will keep you coming back for more.",
    category: "casual",
    thumb: "images/the-most-addicting-sheep-game.avif",
    iframeUrl: "https://www.crazygames.com/embed/the-most-addicting-sheep-game",
    tags: ["casual", "addictive", "sheep", "puzzle", "cute", "challenging"],
    instructions: ["Guide sheep to the target", "Avoid obstacles and traps", "Collect wool and bonuses", "Solve increasingly difficult puzzles", "Unlock new sheep characters"],
    rating: 4.8,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/the-most-addicting-sheep-game" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "The Most Addicting Sheep Game Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/the-most-addicting-sheep-game" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 86,
    slug: "find-the-pets",
    title: "Find The Pets",
    description: "Hidden object adventure! Search for lost pets in various locations. Use your observation skills to find all the hidden animals and reunite them with their owners.",
    category: "casual",
    thumb: "images/find-the-pets.avif",
    iframeUrl: "https://www.crazygames.com/embed/find-the-pets-cph",
    tags: ["casual", "hidden-object", "pets", "search", "observation", "puzzle"],
    instructions: ["Look carefully at each scene", "Click on hidden pets when found", "Use hints if you get stuck", "Complete levels within time limit", "Find all pets to progress"],
    rating: 4.4,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/find-the-pets-cph" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Find The Pets Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/find-the-pets" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 87,
    slug: "epic-sword-battle-fight-in-arena",
    title: "Epic Sword Battle! Fight in Arena",
    description: "Epic sword fighting arena! Master combat skills, wield legendary weapons, and prove your worth in intense gladiator battles against fierce opponents.",
    category: "action",
    thumb: "images/epic-sword-battle-fight-in-arena.avif",
    iframeUrl: "https://www.crazygames.com/embed/epic-sword-battle-fight-in-arena",
    tags: ["action", "sword", "fighting", "arena", "combat", "gladiator"],
    instructions: ["Use WASD keys to move your warrior", "Click to attack with your sword", "Block enemy attacks with right click", "Collect power-ups during battle", "Defeat all opponents to win"],
    rating: 4.6,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/epic-sword-battle-fight-in-arena" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Epic Sword Battle! Fight in Arena Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/epic-sword-battle-fight-in-arena" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 88,
    slug: "penguin-dash",
    title: "Penguin Dash",
    description: "Fast-paced penguin adventure! Help the adorable penguin dash through icy landscapes, avoid obstacles, and collect fish in this exciting arctic journey.",
    category: "action",
    thumb: "images/penguin-dash.avif",
    iframeUrl: "https://www.crazygames.com/embed/penguin-dash-ixp",
    tags: ["action", "penguin", "dash", "adventure", "arctic", "running"],
    instructions: ["Use arrow keys to move the penguin", "Jump over obstacles with spacebar", "Collect fish for bonus points", "Avoid falling into water", "Reach the finish line safely"],
    rating: 4.4,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/penguin-dash-ixp" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Penguin Dash Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/penguin-dash" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 89,
    slug: "simple-words",
    title: "Simple Words",
    description: "Strategic word puzzle game! Challenge your vocabulary and strategic thinking by forming words, planning moves ahead, and outsmarting your opponents.",
    category: "strategy",
    thumb: "images/simple-words.avif",
    iframeUrl: "https://www.crazygames.com/embed/simple-words",
    tags: ["strategy", "words", "puzzle", "vocabulary", "thinking", "letters"],
    instructions: ["Form words using available letters", "Plan your moves strategically", "Score points with longer words", "Block opponent's word opportunities", "Use bonus tiles for extra points"],
    rating: 4.5,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/simple-words" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Simple Words Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/simple-words" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 90,
    slug: "ashline-racing-born-to-burn",
    title: "Ashline Racing: Born To Burn",
    description: "High-speed racing action! Burn rubber on dangerous tracks, customize your ride, and compete in adrenaline-pumping races to become the ultimate racing champion.",
    category: "sports",
    thumb: "images/ashline-racing-born-to-burn.avif",
    iframeUrl: "https://www.crazygames.com/embed/ashline-racing-born-to-burn-tmr",
    tags: ["sports", "racing", "cars", "speed", "competition", "adrenaline"],
    instructions: ["Use arrow keys to steer your car", "Press spacebar for nitro boost", "Avoid crashes and obstacles", "Collect power-ups on the track", "Cross the finish line first to win"],
    rating: 4.7,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/ashline-racing-born-to-burn-tmr" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Ashline Racing: Born To Burn Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/ashline-racing-born-to-burn" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 91,
    slug: "soccer-arena-x",
    title: "Soccer Arena X",
    description: "Ultimate soccer arena experience! Compete in fast-paced matches, score amazing goals, and lead your team to victory in this exciting football simulation.",
    category: "sports",
    thumb: "images/soccer-arena-x.avif",
    iframeUrl: "https://www.crazygames.com/embed/soccer-arena-x",
    tags: ["sports", "soccer", "football", "arena", "competition", "team"],
    instructions: ["Control players with arrow keys", "Pass the ball with spacebar", "Shoot goals with X key", "Defend your goal area", "Score more goals than opponent"],
    rating: 4.6,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/soccer-arena-x" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Soccer Arena X Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/soccer-arena-x" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 92,
    slug: "car-sky-survival",
    title: "Car Sky Survival",
    description: "Sky-high car survival challenge! Drive through floating platforms in the clouds, perform death-defying stunts, and survive the ultimate aerial driving course.",
    category: "sports",
    thumb: "images/car-sky-survival.avif",
    iframeUrl: "https://www.crazygames.com/embed/car-sky-survival",
    tags: ["sports", "car", "survival", "sky", "driving", "stunts"],
    instructions: ["Accelerate with up arrow key", "Brake with down arrow key", "Steer left and right carefully", "Land safely on platforms", "Avoid falling off the track"],
    rating: 4.5,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/car-sky-survival" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Car Sky Survival Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/car-sky-survival" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 93,
    slug: "diver-hero",
    title: "Diver Hero",
    description: "Underwater adventure awaits! Dive deep into the ocean, explore mysterious underwater worlds, collect treasures, and save marine life in this heroic diving quest.",
    category: "adventure",
    thumb: "images/diver-hero.avif",
    iframeUrl: "https://www.crazygames.com/embed/diver-hero",
    tags: ["adventure", "diving", "underwater", "ocean", "exploration", "hero"],
    instructions: ["Navigate underwater with arrow keys", "Collect oxygen bubbles to breathe", "Gather treasures and artifacts", "Rescue trapped sea creatures", "Avoid dangerous sea predators"],
    rating: 4.4,
    dateAdded: "2025-06-29"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/diver-hero" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "Diver Hero Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/diver-hero" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  },
  {
    id: 94,
    slug: "live",
    title: "LIVE",
    description: "Intense survival adventure! Experience life-or-death situations, make critical decisions under pressure, and fight to stay alive in this thrilling survival game.",
    category: "adventure",
    thumb: "images/live.avif",
    iframeUrl: "https://www.crazygames.com/embed/live-rby",
    tags: ["adventure", "survival", "intense", "decisions", "thriller", "challenge"],
    instructions: ["Make quick survival decisions", "Manage your resources carefully", "React fast to danger situations", "Explore your environment", "Stay alive as long as possible"],
    rating: 4.3,
    dateAdded: "2025-06-30"
  ,
    gameEmbed: {
      controls: ["Spacebar/Click to jump"],
      aspectRatio: "16:9",
      fullScreen: true,
      sandbox: "allow-same-origin allow-scripts allow-pointer-lock",
      referrerPolicy: "no-referrer"
    },
    howToPlay: [
      { step: "Basic controls", detail: "Use spacebar or click to jump and navigate through obstacles." },
      { step: "Level progression", detail: "Complete sections to advance through the level and overcome challenges." },
      { step: "Skill mastery", detail: "Practice timing and precision to master the game mechanics." }
    ],
    goalsAndScoring: { win: "Complete the level by navigating through all obstacles successfully.", score: "Completion time and accuracy." },
    levels: [
      { name: "Introduction", strategy: "Learn basic controls and get comfortable with the game mechanics." },
      { name: "Skill Building", strategy: "Practice timing and precision to improve your gameplay." },
      { name: "Mastery", strategy: "Perfect your technique and complete the level with optimal performance." }
    ],
    proTips: [
      "Practice timing and precision for better performance",
      "Stay focused and maintain steady rhythm",
      "Learn from mistakes and improve gradually",
      "Use visual cues to anticipate obstacles",
      "Keep practicing difficult sections"
    ],
    compatibility: { mobile: "Optimized", pc: "Chrome/Edge", issues: [] },
    faq: [
      { q: "How do I control the game?", a: "Use spacebar or click to jump and navigate through obstacles." },
      { q: "What's the goal?", a: "Complete the level by successfully navigating through all obstacles." },
      { q: "Any tips for beginners?", a: "Start slow, practice timing, and gradually improve your skills." }
    ],
    attribution: { source: "crazygames.com", publisher: "Original rights holder", sourceUrl: "https://www.crazygames.com/embed/live-rby" },
    author: { name: "Editorial Team", role: "Editor" },
    lastUpdated: "2025-08-20",
    seo: { metaTitle: "LIVE Online + Game Guide | wavesdash", metaDescription: "Game controls, strategies, tips, FAQs.", canonicalUrl: "https://wavesdash.com/game/live" },
    structuredData: { useGame: true, useFAQ: true, useBreadcrumb: true }
  }
]; 
