// result.js - Rendering the Story
// Imports removed. Relies on generateLife being global.

document.addEventListener('DOMContentLoaded', () => {
    const inputsString = localStorage.getItem('userInputs');

    if (!inputsString) {
        // Redirect if no data
        window.location.href = 'index.html';
        return;
    }

    const inputs = JSON.parse(inputsString);

    // Check if generateLife exists
    if (typeof generateLife === 'undefined') {
        console.error("Engine not loaded!");
        return;
    }

    const timeline = generateLife(inputs); // Generate the story

    // Render Summary
    renderSummary(inputs);

    // Render Cinematic Story
    if (typeof generateNarrative !== 'undefined') {
        const storyText = generateNarrative(timeline, inputs);
        document.getElementById('cinematicStory').innerText = storyText;
    }

    // Render Reflection
    if (typeof getReflection !== 'undefined') {
        const reflection = getReflection(inputs);
        document.getElementById('reflectionTitle').innerText = reflection.title;
        document.getElementById('reflectionText').innerText = reflection.text;
    }

    // Render Moral Question
    if (typeof getMoralQuestion !== 'undefined') {
        document.getElementById('moralQuestion').innerText = getMoralQuestion();
    }

    // Render Timeline
    const timelineContainer = document.getElementById('timeline');
    if (timelineContainer) {
        timeline.forEach((event, index) => {
            const eventEl = createEventElement(event, index);
            timelineContainer.appendChild(eventEl);
        });
    }

    // Start Animations
    initObserver();
});

function renderSummary(inputs) {
    const subtitle = document.getElementById('storySubtitle');
    if (subtitle) {
        subtitle.innerText = `${inputs.risk} Risk · ${inputs.personality} · ${inputs.career} in ${inputs.country}`;
    }
}

function createEventElement(event, index) {
    const div = document.createElement('div');
    div.className = 'timeline-event';

    div.innerHTML = `
        <div class="event-marker"></div>
        <div class="event-content">
            <span class="event-age">Age ${event.age}</span>
            <p class="event-text">${event.text}</p>
        </div>
    `;
    return div;
}

function initObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.timeline-event').forEach(el => {
        observer.observe(el);
    });
}
