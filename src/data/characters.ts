import type { Character } from "@/types";

/**
 * Trash Pandas — character bible (indexed entries first; legacy Flower draft dossiers kept for script links).
 */

const LEDGER_SCENE_IDS = [
  "scene-01",
  "scene-02",
  "scene-03",
  "scene-04",
  "scene-05",
  "scene-06",
  "scene-07",
  "scene-08",
  "scene-09",
  "scene-10",
  "scene-11",
  "scene-12",
  "scene-13",
  "scene-14",
  "scene-15",
  "scene-16",
  "scene-17",
  "scene-18",
  "scene-19",
  "scene-20",
  "scene-21",
  "scene-22",
  "scene-23",
  "scene-24",
  "scene-25",
  "scene-26",
] as const;

export const characters: Character[] = [
  {
    id: "ledger",
    slug: "ledger",
    name: "Ledger",
    role: "Protagonist",
    archetype:
      "Highly analytical survivor: believes structure and predictability prevent catastrophe after losing his family in a chaotic trash collapse. Sees randomness as failure; treats optimization as moral duty.",
    desire: "If systems are mapped, categorized, and optimized, nothing irrecoverable will happen again.",
    flaw: "Equates emotion and disorder with error—imposes city-logic on worlds that breathe through chaos.",
    lie: "Complete control is the only responsible way to protect anyone.",
    truth: "Adaptability—not total control—is what lets life survive; unpredictability is sometimes necessary.",
    arc: "Order-at-all-costs → repeated failure in the trash world → accepts acting without certainty → integrates instinct with care.",
    speechPattern:
      "Precise, structured sentences; minimal emotional language; analyzes aloud with logical connectors (“if,” “then,” “therefore”); corrects vagueness; rarely slang; controlled, slightly impatient; under stress—more rigid, directive, instructional rather than emotional.",
    notes:
      "Family lost to unstable trash collapse → obsessive risk reduction. Tries to impose order on chaos-native environments; methods fail in the vortex world until he reframes survival.",
    moodLighting:
      "Sterile city read while “surface-safe”; shifted warm-debris bounce when the trash world breaks his grids.",
    image16x9: "/characters/ledger.png",
    image2x1: "/characters/ledger.png",
    linkedSceneIds: [...LEDGER_SCENE_IDS],
    linkedSetIds: [
      "flower-district",
      "residential-petal-ring",
      "bloom-festival-auditorium",
      "flower-high-atrium",
      "woodland-fringe-path",
      "wild-waterfall",
      "equalizer-core",
    ],
  },
  {
    id: "bloom",
    slug: "bloom",
    name: "Bloom",
    role: "Emotional core / truth holder",
    archetype:
      "Trash-world raccoon: curiosity and openness as instinct, not slogan. Sees possibility in disorder; flows with the environment; solves by exploration, not planning. Holds the thematic truth that the discarded and unpredictable often enable survival.",
    desire: "Let living systems stay porous—protect what the surface tried to erase.",
    flaw: "Challenges Ledger chiefly by existing differently, which he misreads as refusal or naïveté.",
    lie: "Exposure alone will make him choose the right world.",
    truth: "What systems discard or can’t predict often holds the key to survival; her sacrifice gives the finale its cost.",
    arc: "Quiet counter-example to Ledger’s grid → emotional anchor as stakes peak → truth that makes the final sacrifice land.",
    speechPattern:
      "Simple, clear, quietly confident; short insightful lines; observational (“look,” “see,” “it’s still working”); no analytical jargon; rarely raises voice; redirects instead of arguing; warm, curious, grounded under danger.",
    notes:
      "Does not defeat Ledger in debate—embodies another way of being. Bloom (character) is distinct from any in-universe “Bloom” machinery in older draft materials.",
    moodLighting:
      "Amber, copper, bioluminescent junk-glow—organic warmth against Ledger’s controlled cool.",
    image16x9: "/characters/bloom.png",
    image2x1: "/characters/bloom.png",
    linkedSceneIds: [
      "scene-06",
      "scene-07",
      "scene-08",
      "scene-09",
      "scene-10",
      "scene-11",
      "scene-12",
      "scene-14",
      "scene-16",
      "scene-17",
      "scene-18",
      "scene-20",
      "scene-21",
      "scene-22",
      "scene-23",
      "scene-24",
      "scene-25",
      "scene-26",
    ],
    linkedSetIds: ["wild-waterfall", "woodland-fringe-path", "flower-district", "flower-high-atrium"],
  },
  {
    id: "scraps",
    slug: "scraps",
    name: "Scraps",
    role: "Chaos / instinct",
    archetype:
      "Street-smart raccoon: survives on reflex, risk, and improvisation. Distrusts structure—sees Ledger’s control as dangerous latency. Raw survival without philosophy until he learns chaos needs trust.",
    desire: "Move first, think never—speed is honesty.",
    flaw: "Treats planning as cowardice; can disconnect from the reality others need time to face.",
    lie: "Only instinct keeps you alive; hesitation is how you die.",
    truth: "Chaos alone isn’t enough—it pairs with trust in others. Counterbalance beats permanent opposition.",
    arc: "Pure reactor → friction with Ledger → ally as counterweight, not enemy.",
    speechPattern:
      "Fast, loose, fragments; slang and contractions; reactive, interruptive; emotionally driven; implication over explanation; alive and unfiltered.",
    notes:
      "Antagonizes Ledger’s methodology until both learn complementary roles. Scene ties to be synced as raccoon draft replaces legacy spine.",
    moodLighting:
      "Staccato urban contrast—stolen neon, skid-motion blur, grit that refuses a grid.",
    image16x9: "/characters/scraps.png",
    image2x1: "/characters/scraps.png",
    linkedSceneIds: [],
    linkedSetIds: [],
  },
  {
    id: "brick",
    slug: "brick",
    name: "Brick",
    role: "Enforcer of order",
    archetype:
      "Disciplined pit bull: obedience and clarity of mission—maintain order, remove disruption, protect the system. Not cruel; efficient. Peak expression of what Ledger initially mistakes for ideal strength.",
    desire: "Zero variance. Clean perimeter. Mission closed.",
    flaw: "No internal questioning—alignment without reflection.",
    lie: "The mandate is always justified if execution is clean.",
    truth: "An immovable force Ledger cannot reason with—only outmaneuver.",
    arc: "Constant ideological and physical pressure; embodiment of absolute structure.",
    speechPattern:
      "Short direct statements; simple declaratives; authoritative; no slang, humor, or emotional language; calm, firm, final; explains only when required.",
    notes:
      "Pit-bull enforcer. Key art shared with Rust until a dedicated Brick plate exists.",
    moodLighting:
      "High-read municipal enforcement: halogen white edge, leash steel, heat ripple off pavement.",
    image16x9: "/characters/dogs.png",
    image2x1: "/characters/dogs.png",
    linkedSceneIds: [],
    linkedSetIds: [],
  },
  {
    id: "rust",
    slug: "rust",
    name: "Rust",
    role: "Discarded / truth of the system",
    archetype:
      "Older pit bull once valued by the system, now shelved. Slow, quiet, watching. Knows both sides—useful and forgotten. Resigned, not bitter; reveals the cost of pure obedience.",
    desire: "Endure without performing belief.",
    flaw: "Resignation can land as fatalism when others need a spark.",
    lie: "If you serve faithfully, the system never retires you.",
    truth: "Obedience purchases temporary belonging; the system eventually retires its instruments.",
    arc: "Isolated truth-teller—in key quiet moments shows Ledger what control costs.",
    speechPattern:
      "Slow, long pauses; simple weighted sentences; rare speech; no slang or filler; conclusions over opinions; tired, calm, reflective.",
    notes:
      "Shares enforcement visual lineage with Brick (`dogs.png`) until a separate Rust still is finalized.",
    moodLighting:
      "Lower luminance, sodium bleed, rusted metal bounce—time-weathered palette.",
    image16x9: "/characters/dogs.png",
    image2x1: "/characters/dogs.png",
    linkedSceneIds: [],
    linkedSetIds: [],
  },
  {
    id: "vanta",
    slug: "vanta",
    name: "Vanta",
    role: "Detached observer / third philosophy",
    archetype:
      "Independent cat between chaos and order—uses structures instrumentally. Sees Ledger’s control as fear camouflaged. Detachment as strategy until she chooses selective intervention.",
    desire: "Stay unowned; borrow systems, never marry them.",
    flaw: "Distance can become permanent abstention from stakes.",
    lie: "Nothing is worth the cost of attachment.",
    truth: "Some outcomes merit influence—even without full belonging.",
    arc: "Cool outsider → targeted interventions → still not fully ‘in,’ but no longer purely absent.",
    speechPattern:
      "Controlled, deliberate; observational more than advisory; dry, subtle irony without comedy; calm, precise, quietly challenging; never over-explains.",
    notes:
      "Reads Ledger immediately. Key art: `vanta2.png`.",
    moodLighting:
      "Silhouette-forward, negative space, cool rim—she never fully shares anyone else’s key.",
    image16x9: "/characters/vanta2.png",
    image2x1: "/characters/vanta2.png",
    linkedSceneIds: [],
    linkedSetIds: [],
  },
  {
    id: "daisy",
    slug: "daisy",
    name: "Daisy",
    role: "Best friend / grounded truth",
    archetype:
      "Internalized system belief made kind; she grounds Rose emotionally without resolving the whole arc herself.",
    desire: "Fitting in keeps things stable—for her and everyone she loves.",
    flaw: "Repeats ‘grow right’ logic as comfort until she sees the cost of Rose gone.",
    lie: "Stability equals everyone matching the same rhythm.",
    truth: "Maybe stability isn’t everything; the district is worse without Rose.",
    arc: "Friendly pragmatist → delivers hard truth at Dark Night without preaching.",
    speechPattern:
      "Clear, simple, direct; no filler. Observations, not philosophy—never explains the theme.",
    notes:
      "Personality: friendly, practical, well-meaning, slightly conditioned by the system. Key lines: sc.2 fit-in seed · sc.3 atrium (aligned baseline vs Rose) · sc.9 Bloom node + hallway ‘or less’ · sc.14 ‘You’re steadier’ (sees containment, doesn’t push) · sc.16 ‘wasn’t just you’ vs ‘It’s… steadier’ (almost validates wrong choice) · sc.19 Dark Night — ‘worse without you’; quietly corrects Iris read on Lemon; ‘just come back.’",
    moodLighting:
      "Neutral-warm daylight and honest faces—low stylization. Emotional baseline when the scene needs a clean read without Iris haze or machine cold.",
    image16x9: "/characters/daisy.png",
    image2x1: "/characters/daisy1.png",
    linkedSceneIds: ["scene-02", "scene-03", "scene-09", "scene-10", "scene-14", "scene-16", "scene-19"],
    linkedSetIds: ["flower-district", "flower-high-atrium", "wild-waterfall"],
    excludeFromIndex: true,
  },
  {
    id: "edelweiss",
    slug: "edelweiss",
    name: "Edelweiss",
    role: "Antagonist — system architect",
    archetype: "Control through ideology; believes he is improving the system, not breaking souls.",
    desire: "District-wide equilibrium—no variance that could read as threat.",
    flaw: "Precision mistaken for compassion; separation framed as protection.",
    lie: "Variation creates instability; sameness is safety.",
    truth: "Imbalance wasn’t the enemy—variation was the missing ingredient.",
    arc: "Measured authority → catalyst observation (sc.4) → atrium lab observation (sc.9) → sc.13 containment / variance / ‘reduction improves stability’ → sc.15 system strain; focus shifts off Rose → sc.16 watches Rose suppress; says nothing; machine rewards → sc.17 festival collapse; public link Rose ↔ failure → sc.25 witnesses atrium core shutdown → quiet realization (variation, not imbalance).",
    speechPattern:
      "Precise, structured sentences; no filler, no emotional vocabulary; speaks in conclusions — e.g. “Feeling is not an indicator of stability.” Never cartoon-villain; never raises voice.",
    notes:
      "Personality: calm, analytical, not performatively emotional; orientation **Equalize the Bloom** duet with **Lotus** (playful teacher energy opening; bridge Disney-clear diction). Key beats: sc.3 orientation + number · sc.4 watches system then Rose · sc.9 atrium lab ‘consistency’ · sc.13 Bad Guys Close In — containment, optimal range, technical satisfaction · sc.15 cascade failure; ‘increase stabilization’; watches machine not Rose · sc.16 atrium — notices minimal Rose; silent approval · sc.17 central courtyard — system then Rose; connection public · sc.21 festival max (not on page) · sc.25 atrium core space — aftermath; ‘variation’ line.",
    moodLighting:
      "Machine authority: sterile whites, glassy cyan, clinical green diagnostics—precision and instrument, not whisper-purple. Separates ideology from Iris framing.",
    image16x9: "/characters/edelweiss.png",
    image2x1: "/characters/edelweiss.png",
    linkedSceneIds: ["scene-03", "scene-04", "scene-09", "scene-13", "scene-15", "scene-16", "scene-17", "scene-25"],
    linkedSetIds: ["flower-high-atrium", "equalizer-core", "flower-district"],
    excludeFromIndex: true,
  },
  {
    id: "lotus",
    slug: "lotus",
    name: "Lotus",
    role: "Teaching assistant — human face of the syllabus",
    archetype:
      "True believer who sells optimization as care; co-leads orientation spectacle with Edelweiss—warmth that still trains the body to obey.",
    desire: "Help every student feel guided into success—no one left behind the beat.",
    flaw: "Equates kindness with tuning people; conflict-avoidant until the cost has a name.",
    lie: "If I help them align, I’m protecting them—not pruning them.",
    truth: "Maintenance without mercy is still control; ‘help’ can humiliate.",
    arc: "Radiant co-anchor (sc.3 duet) → efficient floor presence (sc.9 lab) → containment witness (sc.13) → sees machine exceed people (sc.25)—inventory breaks; room for a later brave small act.",
    speechPattern:
      "Bright, fast, encouraging in public; short clean checks in procedure mode; mirrors Edelweiss’s clarity without his chill—until pressure strips the sparkle.",
    notes:
      "Orientation: **Equalize the Bloom** duet with Edelweiss—ensemble musical staging (call-response, claps, garden-row choreography); bridge delivered Disney-clear. Acts as beloved student proof the system works. Key art: `public/characters/lotus.png`. Sc.9 & sc.13: logistics + smiling efficiency; sc.25: watches core shutdown without a fix-it habit to reach for.",
    moodLighting:
      "Public numbers: warm key, magenta-gold rim light on duet, crowd fill as soft bloom bounce—charm with faint cyan Equalizer underline so it never reads as pure variety show.",
    image16x9: "/characters/lotus.png",
    image2x1: "/characters/lotus.png",
    linkedSceneIds: ["scene-03", "scene-09", "scene-13", "scene-25"],
    linkedSetIds: ["flower-high-atrium", "flower-district"],
    excludeFromIndex: true,
  },
  {
    id: "narcissa",
    slug: "narcissa",
    name: "Narcissa",
    role: "Image / social ideal",
    archetype: "External perfection—the public face of ‘growing right’ until performance cracks.",
    desire: "To be flawless in the open—seen, admired, untouchable.",
    flaw: "Identity is load-bearing; when the Equalizer maxes, the mask shatters in public.",
    lie: "If I’m perfect, I’m safe.",
    truth: "Performance without connection is fragile—Bloom Festival exposes it.",
    arc: "Social dominance (sc.9–10) → festival peak (sc.21) → sc.22 public perfection break — leads machine, then reacts; silence at center → system fights her; collapse at scale (sc.23) → sc.26 off-center; imperfect Bloom, real smile.",
    speechPattern:
      "Polished, declarative, slightly theatrical; always ‘on’; no hesitation in performance mode.",
    notes:
      "Personality: confident, controlled, performative. Dialogue: statements, not questions. Strong intro sc.9 courtyard; sc.10 atrium formation center; social dominance sc.9–10; sc.17 festival center — formation holds until cascade; sc.21 ‘Look at Me’ — system routes through her; sc.22 phased public collapse — slip, overcorrection, stop; sc.23 system fights her — precision useless; sc.26 epilogue — not center; imperfect okay.",
    moodLighting:
      "Spectacle winning: magenta-gold follow-spot and bloom trim—admired, load-bearing shine. When perfection cracks: drain toward ash-rose and desaturated pink—tired glamour, not moral green.",
    image16x9: "/characters/narcissa2.png",
    image2x1: "/characters/narcissa2.png",
    linkedSceneIds: ["scene-09", "scene-10", "scene-17", "scene-21", "scene-22", "scene-23", "scene-26"],
    linkedSetIds: ["flower-district"],
    excludeFromIndex: true,
  },
  {
    id: "nettles",
    slug: "nettles",
    name: "Nettles",
    role: "Student — edge bully",
    archetype:
      "Proximity harm: sting-on-contact pressure; rough dominance that sells ‘natural order’ without Narcissa’s polish—weed at the garden edge.",
    desire: "Keep his lane clear and his status felt—outliers are easy proof he’s winning.",
    flaw: "Escalates when the machine wobbles—panic bullying when blame needs a body.",
    lie: "Someone has to enforce the rhythm—I’m just not fake about it.",
    truth: "Cruelty isn’t gravity; it’s a choice he keeps making.",
    arc: "District friction (sc.2) → hallway / formation edges (sc.9–10) → festival outer ring (sc.17) → chaos scramble (sc.23); witness to pressure, not the thesis.",
    speechPattern:
      "Short, flat, amused cruelty; deflects with a laugh or ‘what?’; no speeches—contact does the work.",
    notes:
      "**Nettle logic:** humiliation lingers like a rash—small contact, lasting sting. Placements: sc.2 path/atrium approach; sc.9 hallway airlock + tight-circle margin; sc.10 outer-ring slot; sc.17 festival formation; sc.23 cross-correction. Look: teenage male, alien-plant world; faint green undertone, spiky hair, guarded smirk; layered streetwear (canvas, denim, olive/dark greens). Pixar-adjacent 3D read; key art `public/characters/nettles.png`.",
    moodLighting:
      "Muted olive and desaturated green in wardrobe bounce; daylight grime—keep him out of Narcissa’s magenta-gold spectacle grammar unless they share a frame by accident.",
    image16x9: "/characters/nettles.png",
    image2x1: "/characters/nettles.png",
    linkedSceneIds: ["scene-02", "scene-09", "scene-10", "scene-17", "scene-23"],
    linkedSetIds: ["flower-district", "flower-high-atrium"],
    excludeFromIndex: true,
  },
  {
    id: "iris",
    slug: "iris",
    name: "Iris",
    role: "Perception manipulator",
    archetype: "Controls narrative, not reality—turns uncertainty into collective belief.",
    desire: "Keep the story simple: fear attaches to the outlier, not the machine.",
    flaw: "Calls spin ‘mercy’; plants ideas instead of owning harm.",
    lie: "A kind lie is better than a destabilizing truth.",
    truth: "Framing truth to wound is still violence—Daisy’s honesty breaks her spell (sc.19: what Lemon ‘meant’ corrected quietly).",
    arc: "Observing (sc.4 catalyst) → sc.10 perception engine (introduced) → sc.14 Lemon reframed (‘he just reacted’) — framing only → sc.17 festival watches; says nothing (doesn’t need to) → sc.18 All Is Lost — still silent; earlier seeds complete Rose’s read → sc.21 festival; still watching → sc.22 spectacle breaks; no frame left → sc.26 watches; narrative obsolete.",
    speechPattern:
      "Calm, suggestive, indirect—never a bald lie; damages by framing — e.g. “I mean… he did pull back.” Plants, doesn’t argue.",
    notes:
      "Personality: observant, subtle, socially intelligent, soft-spoken. Never lies directly — frames. Sc.4: watches glitch, not surprised — narrative seed. Sc.10: ‘followed her,’ ‘maybe she’s just—,’ ‘no one thinks you’re doing it on purpose.’ Sc.14: repeats ‘noticeable’ with new weight; ‘happens around you,’ ‘he just reacted.’ Sc.17: silent witness; crowd does the work. Sc.18: no lines — ‘confirmation’ only; Rose supplies the verdict. Sc.19: not on stage — Daisy undoes the Lemon read quietly. Sc.21: off-center; watching Narcissa + crowd. Sc.22: Narcissa breaks publicly — nothing to say; truth visible. Sc.26: silent; nothing to frame.",
    moodLighting:
      "When Iris’s framing leads: deep desaturated purple in shadow bias — plum, bruised petal, ink violet. Cooler contrast, night-inside-day; velvet suggestion, not neon villain. Keep it pretty enough for family tone.",
    image16x9: "/characters/iris.png",
    image2x1: "/characters/iris2.png",
    linkedSceneIds: ["scene-04", "scene-10", "scene-14", "scene-17", "scene-18", "scene-21", "scene-22", "scene-26"],
    linkedSetIds: ["flower-high-atrium", "flower-district"],
    excludeFromIndex: true,
  },
  {
    id: "bluebell",
    slug: "bluebell",
    name: "Bluebell",
    role: "Ledger’s familiar (glowing blue butterfly)",
    archetype:
      "Silent companion and emotional barometer—connection without language, illegible to the Equalizer’s idea of ‘correct’ life.",
    desire: "Stay with Ledger.",
    flaw: "Fragile presence under machine pressure—can’t shield him from social pain, only mark it.",
    lie: "N/A — non-verbal; reads as pet but functions as familiar bond.",
    truth: "Ledger is never empty; the system just trains everyone not to see what doesn’t scan.",
    arc: "Hidden in district flow · dims at Equalizer peak (sc.4) · woodland ease (sc.6) · bright at waterfall (sc.11–12) · gone at All Is Lost (sc.18) · returns Dark Night (sc.19) · steady Act 3 · witness at shutdown (sc.25–26).",
    speechPattern: "Does not speak. Flutter, land, hide, brighten—action only.",
    notes:
      "Screen rules: no dialogue from Bluebell; Ledger may whisper to it (private, habitual). Others rarely notice; never explain magic on-screen. Glow tracks Ledger’s safety/truth: suppressed = dim/absent; off-system = full. Key art TBD — placeholder stills until butterfly plates exist.",
    moodLighting:
      "Accent only: luminous blue in the familiar’s emissive read—a barometer beat, not a scene-wide wash. Never replace Iris/Rose/machine grammar with butterfly fill.",
    image16x9: "/characters/bluebell1.png",
    image2x1: "/characters/bluebell1.png",
    linkedSceneIds: [
      "scene-01",
      "scene-02",
      "scene-04",
      "scene-11",
      "scene-12",
      "scene-18",
      "scene-19",
      "scene-20",
      "scene-24",
      "scene-25",
      "scene-26",
    ],
    linkedSetIds: [
      "flower-district",
      "residential-petal-ring",
      "woodland-fringe-path",
      "wild-waterfall",
      "flower-high-atrium",
    ],
    excludeFromIndex: true,
  },
];
