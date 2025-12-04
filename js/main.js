// main.js

let scenarios = [];
let currentScenarioIndex = 0;
let score = 0;
let hasAnsweredCurrent = false;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startExperienceBtn');
    const prevBtn = document.getElementById('prevScenarioBtn');
    const nextBtn = document.getElementById('nextScenarioBtn');

    // Charger les scénarios depuis data.php (JSON)
    fetch('data.php')
        .then((response) => response.json())
        .then((data) => {
            scenarios = data;
            updateNavButtons();
        })
        .catch((err) => {
            console.error('Erreur lors du chargement des scénarios :', err);
            const container = document.getElementById('scenarioContainer');
            if (container) {
                container.innerHTML =
                    '<p class="placeholder">Impossible de charger les scénarios. Vérifie data.php.</p>';
            }
        });

    startBtn?.addEventListener('click', () => {
        if (!scenarios.length) return;
        currentScenarioIndex = 0;
        score = 0;
        hasAnsweredCurrent = false;
        renderScenario();
        updateScoreDisplay();
        updateNavButtons();
        startBtn.disabled = true;
    });

    prevBtn?.addEventListener('click', () => {
        if (currentScenarioIndex > 0) {
            currentScenarioIndex--;
            hasAnsweredCurrent = false;
            renderScenario();
            updateNavButtons();
        }
    });

    nextBtn?.addEventListener('click', () => {
        if (currentScenarioIndex < scenarios.length - 1) {
            currentScenarioIndex++;
            hasAnsweredCurrent = false;
            renderScenario();
            updateNavButtons();
        }
    });

    updateNavButtons();
    updateScoreDisplay();
});

function renderScenario() {
    const container = document.getElementById('scenarioContainer');
    if (!container || !scenarios.length) return;

    const scenario = scenarios[currentScenarioIndex];
    container.innerHTML = '';

    const title = document.createElement('h3');
    title.className = 'scenario-title';
    title.textContent = scenario.title;

    const desc = document.createElement('p');
    desc.className = 'scenario-description';
    desc.textContent = scenario.description;

    const choicesList = document.createElement('div');
    choicesList.className = 'choices-list';

    scenario.choices.forEach((choice) => {
        const btn = document.createElement('button');
        btn.className = 'btn secondary-btn choice-btn';
        btn.textContent = choice.text;
        btn.addEventListener('click', () => handleChoice(choice));
        choicesList.appendChild(btn);
    });

    const feedback = document.createElement('p');
    feedback.className = 'choice-feedback';
    feedback.id = 'choiceFeedback';

    container.appendChild(title);
    container.appendChild(desc);
    container.appendChild(choicesList);
    container.appendChild(feedback);
}

function handleChoice(choice) {
    if (hasAnsweredCurrent) return; // empêche de cliquer plusieurs fois

    score += choice.impactScore;
    score = Math.max(0, Math.min(score, 100)); // clamp 0–100
    hasAnsweredCurrent = true;

    const feedbackEl = document.getElementById('choiceFeedback');
    if (feedbackEl) {
        feedbackEl.textContent = choice.feedback;
    }

    updateScoreDisplay();
}

function updateScoreDisplay() {
    const scoreValue = document.getElementById('scoreValue');
    const scoreBar = document.getElementById('scoreBar');
    const scoreMessage = document.getElementById('scoreMessage');

    if (scoreValue) scoreValue.textContent = score.toString();
    if (scoreBar) scoreBar.style.width = `${score}%`;

    if (scoreMessage) {
        if (score <= 30) {
            scoreMessage.textContent =
                'Ton village numérique est encore très dépendant des Big Tech. Explore les scénarios et tente d’autres choix.';
        } else if (score <= 70) {
            scoreMessage.textContent =
                'Ton village commence à résister ! Continue à privilégier le réemploi, les logiciels libres et les communs numériques.';
        } else {
            scoreMessage.textContent =
                'Félicitations ! Ton village est un véritable bastion de la résistance numérique NIRD.';
        }
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevScenarioBtn');
    const nextBtn = document.getElementById('nextScenarioBtn');

    if (!scenarios.length) {
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        return;
    }

    if (prevBtn) prevBtn.disabled = currentScenarioIndex === 0;
    if (nextBtn) nextBtn.disabled = currentScenarioIndex === scenarios.length - 1;
}
