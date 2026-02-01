// engine.js - Cartoon Simulation Logic

function generateLife(inputs) {
    const timeline = [];

    // 0. Intro Event (Personalized)
    timeline.push({
        age: 18,
        text: `${inputs.name} left ${inputs.city} with big dreams and zero certainty.`,
        type: 'intro'
    });

    // 1. Add Career Events
    if (careers[inputs.career]) {
        careers[inputs.career].forEach(e => timeline.push({ ...e, type: 'career' }));
    }

    // 2. Add Country Context (Personalized Flavor)
    const flavor = locationFlavor(inputs.country);
    timeline.push({
        age: 23,
        text: `Life in ${inputs.country} taught you ${flavor}.`,
        type: 'context'
    });

    // 3. Inject Twists based on Risk
    const numTwists = Math.floor(Math.random() * 3) + 3; // 3 to 5 twists
    for (let i = 0; i < numTwists; i++) {
        const twist = getTwist(inputs.risk);
        const age = Math.floor(Math.random() * 40) + 20;
        timeline.push({ age: age, text: twist.text, type: twist.type || 'random' });
    }

    // 4. Sort by Age
    timeline.sort((a, b) => a.age - b.age);

    return timeline;
}

function locationFlavor(country) {
    const c = country.toLowerCase();
    if (c.includes("japan")) return "fast-paced discipline and neon nights";
    if (c.includes("india")) return "resilience amidst the chaos";
    if (c.includes("usa") || c.includes("america")) return "unapologetic ambition";
    if (c.includes("germany")) return "efficiency and appreciation for order";
    return "a unique perspective on the world";
}

function getTwist(riskLevel) {
    let pool = [...twists.Common];

    if (riskLevel === 'High') {
        pool = [...pool, ...twists.HighRisk];
    } else if (riskLevel === 'Safe') {
        pool = [...pool, ...twists.Safe];
    } else {
        pool = [...pool, ...twists.Safe, ...twists.HighRisk];
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
}

// RESTORED: Rich Narrative Logic
function generateNarrative(timeline, inputs) {
    // A simple mad-libs style story generator
    // Usage of 'inputs.name' and 'inputs.city' for personalization
    const start = `It began in ${inputs.city}. ${inputs.name}, a ${inputs.personality.toLowerCase()} soul, sought to become a ${inputs.career}.`;

    // Find a 'bad' or 'risky' event for conflict
    const conflictEvent = timeline.find(e => e.type === 'bad' || e.type === 'risky');
    const conflict = conflictEvent
        ? `But life rarely goes to plan. At ${conflictEvent.age}, ${conflictEvent.text.toLowerCase()}.`
        : `The years passed with a steady rhythm.`;

    // Find a 'good' event for resolution/climax
    const climaxEvent = timeline.find(e => e.type === 'good' || e.type === 'career');
    const climax = climaxEvent
        ? `Yet there were moments of brilliance. By ${climaxEvent.age}, you had ${climaxEvent.text.toLowerCase()}.`
        : `You found your way forward, step by step.`;

    const ending = `Looking back, it was a life entirely your own.`;

    return `${start} ${conflict} ${climax} ${ending}`;
}

function getReflection(inputs) {
    return reflections[inputs.risk] || reflections.Balanced;
}

function getMoralQuestion() {
    const idx = Math.floor(Math.random() * moralQuestions.length);
    return moralQuestions[idx];
}
