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

        // Show Next Button
        nextContainer.style.opacity = '1';
        nextContainer.style.pointerEvents = 'all';
        nextContainer.style.transform = 'translateY(0)';
    });
});

// Next Button Logic
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (state.step < state.totalSteps) {
            // Move to next step
            document.getElementById(`step${state.step}`).classList.remove('active');
            state.step++;
            document.getElementById(`step${state.step}`).classList.add('active');

            // Reset button
            nextContainer.style.opacity = '0';
            nextContainer.style.pointerEvents = 'none';
            updateProgress();
        } else {
            // Finish Simulation
            finishSimulation();
        }
    });
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
