// data.js - Event Databases
// Removed 'export' to work as a standard script

const careers = {
    Engineer: [
        { age: 22, text: "Graduated with a B.S. in Computer Science" },
        { age: 24, text: "Landed first job at a tech startup" },
        { age: 27, text: "Promoted to Senior Engineer" },
        { age: 30, text: "Burnout hit hard. Took a 3-month sabbatical" },
        { age: 32, text: "Became a Tech Lead managing a team of 5" },
        { age: 40, text: "Founded a boutique consultancy firm" },
        { age: 55, text: "Retired early to focus on open source projects" }
    ],
    Artist: [
        { age: 20, text: "Dropped out of college to pursue art full-time" },
        { age: 23, text: "Hosted first gallery exhibition in a small cafe" },
        { age: 28, text: "Struggled financially, worked part-time as a barista" },
        { age: 33, text: "Viral success on a new digital platform" },
        { age: 38, text: "Commissioned for a major city mural" },
        { age: 45, text: "Opened a private studio and mentorship program" },
        { age: 60, text: "Art was featured in a national museum retrospective" }
    ],
    Entrepreneur: [
        { age: 21, text: "Launched first startup (it failed within 6 months)" },
        { age: 24, text: "Pivot! Co-founded a fintech app" },
        { age: 29, text: "Raised Series A funding ($5M)" },
        { age: 31, text: "Featured in 30 Under 30 lists" },
        { age: 35, text: "Market crash almost wiped out the company" },
        { age: 42, text: "Successfully exited (sold company for $50M)" },
        { age: 50, text: "Became an angel investor" }
    ],
    Doctor: [
        { age: 26, text: "Finished Medical School" },
        { age: 29, text: "Completed Residency (80-hour work weeks)" },
        { age: 32, text: "Specialized in Neurology" },
        { age: 38, text: "Saved a high-profile patient, gained recognition" },
        { age: 45, text: "Published groundbreaking research paper" },
        { age: 55, text: "Appointed Head of Surgery at Metro Hospital" },
        { age: 65, text: "Retired but continues to lecture occasionally" }
    ],
    Lawyer: [
        { age: 25, text: "Passed the Bar exam on the first try" },
        { age: 28, text: "Working 90 hours a week at a top corporate firm" },
        { age: 34, text: "Made Partner after a high-stakes merger deal" },
        { age: 40, text: "Left corporate life to start a non-profit legal clinic" },
        { age: 50, text: "Won a landmark human rights case in the Supreme Court" },
        { age: 60, text: "Wrote a best-selling book on justice reform" }
    ],
    Chef: [
        { age: 19, text: "Started as a dishwasher in a local bistro" },
        { age: 24, text: "Became Sous Chef under a volatile mentor" },
        { age: 29, text: "Opened a food truck that gathered a cult following" },
        { age: 35, text: "Opened your first brick-and-mortar restaurant" },
        { age: 37, text: "Won a Michelin Star" },
        { age: 50, text: "Hosted a popular travel-cooking travelogue show" }
    ],
    Athlete: [
        { age: 18, text: "Scouted by a top tier university team" },
        { age: 21, text: "Drafted into the professional league" },
        { age: 24, text: "Suffered a major injury, but rehabbed successfully" },
        { age: 28, text: "Won the championship MVP title" },
        { age: 33, text: "Retired from pro sports to start a fitness brand" },
        { age: 45, text: "Became a commentator for the major networks" }
    ],
    Scientist: [
        { age: 22, text: "Published first paper in an undergraduate journal" },
        { age: 27, text: "Completed PhD in Astrophysics" },
        { age: 32, text: "Granted tenure at a prestigious university" },
        { age: 40, text: "Led a team that discovered a new exoplanet" },
        { age: 55, text: "Received the Nobel Prize for Physics" },
        { age: 70, text: "Advocated for global science literacy" }
    ]
};

const countryContext = {
    USA: {
        events: [
            { age: 18, text: "moved to a college dorm in a new state" },
            { age: 25, text: "Bought first car on a loan" }
        ]
    },
    Japan: {
        events: [
            { age: 18, text: "Enjoyed the cherry blossoms with high school friends for the last time" },
            { age: 22, text: "Started navigating the strict corporate culture" }
        ]
    },
    India: {
        events: [
            { age: 19, text: "Family pressured for career stability" },
            { age: 26, text: "Attended a massive family wedding" }
        ]
    },
    Germany: {
        events: [
            { age: 18, text: "Went backpacking across Europe during gap year" },
            { age: 28, text: "Bought a high-performance bicycle for commuting" }
        ]
    }
};

const twists = {
    Common: [
        { text: "Adopted a stray dog", type: "neutral" },
        { text: "Met a significant other at a coffee shop", type: "good" },
        { text: "Broke a leg skiing", type: "bad" },
        { text: "Won a small lottery prize", type: "good" }
    ],
    HighRisk: [
        { text: "Invested everything in a volatile crypto coin", type: "risky" },
        { text: "Quit job impulsively to travel the world", type: "risky" },
        { text: "Lost huge savings in a scam", type: "bad" },
        { text: "Viral fame overnight", type: "good" }
    ],
    Safe: [
        { text: "Started a savings account", type: "good" },
        { text: "Took up gardening", type: "neutral" },
        { text: "Celebrated 10 years at the same company", type: "good" }
    ]
};

const reflections = {
    High: {
        title: "The Icarus Paradox",
        text: "You flew close to the sun. The highs were blindingly bright, but the shadows you cast were just as deep. Was the adrenaline worth the instability?"
    },
    Safe: {
        title: "The Quiet Garden",
        text: "You built a fortress of security. Nothing could hurt you, but perhaps nothing could truly move you either. Peace is a prize, but did it come at the cost of passion?"
    },
    Balanced: {
        title: "The Middle Path",
        text: "You walked the line between chaos and order. A life well-lived, measured and steady. But in your quiet moments, do you wonder what would have happened if you let go?"
    }
};

const moralQuestions = [
    "If you could go back to age 25 and change one choice, would you?",
    "Did you live for yourself, or for the approval of others?",
    "What will you be remembered for when the timeline ends?",
    "Was your happiness found in achievement or connection?"
];
