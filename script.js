// main.js

// Données de scénarios (démo simple)
// À terme, vous pourrez générer ça en PHP (JSON) depuis data.php
const scenarios = [
    {
        id: 'materiel_obsolete',
        title: 'Matériel obsolète ?',
        description:
            "Ton établissement dispose d'un parc de 50 PC sous Windows 10. Le support s'arrête bientôt. Que fais-tu ?",
        choices: [
            {
                id: 'bigtech',
                text: 'Tout remplacer par des PC neufs sous Windows 11.',
                impactScore: -20,
                feedback:
                    "Tu restes très dépendant à un fournisseur unique, le coût est élevé et l’impact environnemental est fort."
            },
            {
                id: 'nird',
                text: 'Tester Linux sur les PC encore fonctionnels et réemployer le matériel.',
                impactScore: +30,
                feedback:
                    'Bravo ! Tu prolonges la durée de vie du matériel, réduis les coûts et fais un pas vers plus de souveraineté.'
            }
        ]
    },
    {
        id: 'donnees_cloud',
        title: 'Données et cloud',
        description:
            "Les élèves et les enseignant·e·s stockent leurs documents sur un cloud américain grand public.",
        choices: [
            {
                id: 'status_quo',
                text: "Continuer comme ça, tout le monde a l'habitude.",
                impactScore: -10,
                feedback:
                    "Solution confortable mais problématique pour la souveraineté des données et le respect du RGPD."
            },
            {
                id: 'cloud_souverain',
                text: 'Migrer progressivement vers un cloud européen ou académique basé sur des logiciels libres.',
                impactScore: +25,
                feedback:
                    "Très bon choix : tu améliores la maîtrise des données et encourages les communs numériques éducatifs."
            }
        ]
    }
];

let currentScenarioIndex = 0;
let score = 0;
let hasAnsweredCurrent = false;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startExperienceBtn');
    const prevBtn = document.getElementById('prevScenarioBtn');
    const nextBtn = document.getElementById('nextScenarioBtn');

    startBtn?.addEventListener('click', () => {
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
    if (!container) return;

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

    scenario.choices.forEach(choice => {
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
    // clamp du score entre 0 et 100
    score = Math.max(0, Math.min(score, 100));
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

    if (prevBtn) prevBtn.disabled = currentScenarioIndex === 0;
    if (nextBtn) nextBtn.disabled = currentScenarioIndex === scenarios.length - 1;
}