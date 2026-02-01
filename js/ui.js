// ui.js - Handling the Cartoon Simulation UI

// Retrieve initial user info or default
const initialUser = JSON.parse(localStorage.getItem('userInfo')) || {};

const state = {
    step: 1,
    totalSteps: 3,
    inputs: {
        name: initialUser.name || "Traveler",
        age: initialUser.age || 18,
        city: initialUser.city || "Unknown City",
        country: initialUser.country || "Unknown Land",
        career: null,
        personality: null,
        risk: null
    }
};

// DOM Elements
const nextBtn = document.getElementById('nextBtn');
const nextContainer = document.getElementById('nextContainer');
const progressBar = document.getElementById('progressBar');
const currentStepNum = document.getElementById('currentStepNum');

// Initialize
updateProgress();

// Event Listeners for Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent multiple clicks if already moving
        if (card.classList.contains('selected')) return;

        // Deselect siblings
        const parent = card.parentElement;
        parent.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));

        // Select clicked
        card.classList.add('selected');

        // Save selection to state
        const value = card.dataset.value;
        const stepId = card.closest('.step').id;

        // Mapped to new 3-step flow
        if (stepId === 'step1') state.inputs.career = value;
        if (stepId === 'step2') state.inputs.personality = value;
        if (stepId === 'step3') state.inputs.risk = value;

        // Auto-Advance after short delay for visual feedback
        setTimeout(() => {
            goToNextStep();
        }, 600);
    });
});

// Logic to move straight to next step
function goToNextStep() {
    if (state.step < state.totalSteps) {
        // Move to next step
        const currentStepEl = document.getElementById(`step${state.step}`);
        const nextStepEl = document.getElementById(`step${state.step + 1}`);

        // 1. Animate Out
        currentStepEl.classList.remove('active');
        currentStepEl.classList.add('exiting');

        // Wait for animation to finish
        setTimeout(() => {
            currentStepEl.classList.remove('exiting');
            currentStepEl.style.display = 'none'; // Ensure it's gone

            // 2. State Update
            state.step++;

            // 3. Animate In
            nextStepEl.style.display = 'block'; // Prepare for animation
            // Force reflow
            void nextStepEl.offsetWidth;
            nextStepEl.classList.add('active');

            updateProgress();
        }, 400);

    } else {
        // Finish Simulation
        finishSimulation();
    }
}

function updateProgress() {
    if (!progressBar) return;
    const percent = (state.step / state.totalSteps) * 100;
    progressBar.style.width = `${percent}%`;
    if (currentStepNum) currentStepNum.innerText = state.step;

    if (nextBtn && state.step === state.totalSteps) {
        nextBtn.innerText = "Reveal My Life 🔮";
    }
}

function finishSimulation() {
    // Save all data to localStorage
    localStorage.setItem('userInputs', JSON.stringify(state.inputs));

    // Animate out
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = 'result.html';
    }, 600);
}
