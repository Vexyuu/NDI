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

// -------------------------
// Village Numérique Résistant
// -------------------------

const villageBuildingData = {
    materiel: {
        title: "La Forge – Réemploi du matériel",
        text:
            "À la Forge, on refuse de jeter des machines encore utilisables. " +
            "On installe des systèmes libres (Linux, etc.), on remplace seulement les pièces nécessaires " +
            "et on organise des ateliers pour prolonger la durée de vie du parc.",
        actions: [
            "Faire un inventaire du parc actuel (âge, état, usages).",
            "Tester Linux sur quelques postes pilotes plutôt que tout renouveler.",
            "Mettre en place un partenariat avec un atelier de réparation ou une association locale."
        ]
    },
    logiciels: {
        title: "La Bibliothèque – Logiciels libres & communs",
        text:
            "La Bibliothèque du village regorge de logiciels libres, de ressources éducatives ouvertes " +
            "et de communs numériques co-construits. Ici, on choisit des outils que l'on peut partager, adapter et améliorer.",
        actions: [
            "Remplacer progressivement des logiciels propriétaires par des alternatives libres (suite bureautique, navigateur, etc.).",
            "Participer à la création ou la traduction de ressources éducatives libres.",
            "Documenter les outils choisis et partager les guides avec d'autres établissements."
        ]
    },
    donnees: {
        title: "Le Grenier – Souveraineté des données",
        text:
            "Dans le Grenier, on stocke les données à l'abri de l'empire. " +
            "On sait où elles sont, qui y a accès, et on respecte le RGPD. " +
            "On privilégie des clouds académiques ou européens.",
        actions: [
            "Identifier tous les services où les données des élèves sont stockées (clouds, ENT, applications…).",
            "Migrer vers un cloud éducatif souverain ou une solution hébergée dans l’UE.",
            "Mettre en place des règles claires de gestion des comptes et des sauvegardes."
        ]
    },
    sobriete: {
        title: "L’Atelier du Druide – Sobriété numérique",
        text:
            "L’Atelier du Druide prépare des potions de sobriété : moins de vidéos inutiles, " +
            "moins de mails en copie pour rien, plus de pratiques simples et efficaces pour réduire l’empreinte carbone.",
        actions: [
            "Limiter le streaming vidéo HD en classe quand ce n’est pas indispensable.",
            "Privilégier des supports légers (PDF, textes, activités déconnectées).",
            "Sensibiliser les élèves et enseignants à l’empreinte énergétique du numérique."
        ]
    },
    communs: {
        title: "La Place du Village – Communs & entraide",
        text:
            "Sur la Place du Village, tout le monde se retrouve pour partager des idées, des ressources, " +
            "et construire ensemble des solutions. C’est le cœur de la communauté NIRD.",
        actions: [
            "Participer à un collectif (comme NIRD) pour partager retours d'expérience et ressources.",
            "Publier des fiches de bonnes pratiques en licence libre pour que d'autres puissent les reprendre.",
            "Organiser des ateliers ou événements autour du numérique responsable dans l’établissement."
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("village-modal");
    const modalTitle = document.getElementById("village-modal-title");
    const modalText = document.getElementById("village-modal-text");
    const modalActions = document.getElementById("village-modal-actions");
    const modalClose = modal?.querySelector(".village-modal-close");

    if (!modal || !modalTitle || !modalText || !modalActions) return;

    // Clic sur un bâtiment
    document.querySelectorAll(".village-building").forEach((building) => {
        building.addEventListener("click", () => {
            const key = building.getAttribute("data-building");
            const data = villageBuildingData[key];
            if (!data) return;

            modalTitle.textContent = data.title;
            modalText.textContent = data.text;

            // Nettoyer les anciennes actions
            modalActions.innerHTML = "";
            data.actions.forEach((action) => {
                const li = document.createElement("li");
                li.textContent = action;
                modalActions.appendChild(li);
            });

            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
        });
    });

    // Fermeture
    const closeModal = () => {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
    };

    modalClose?.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("open")) {
            closeModal();
        }
    });
});

// -------------------------
// Comparaison Big Tech vs NIRD
// -------------------------

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("comparisonToggleBtn");
    const detailedRows = document.querySelectorAll(".detailed-row");

    if (!toggleBtn || !detailedRows.length) return;

    let showDetailed = false;

    // Cacher les lignes détaillées au chargement en ajoutant la classe `hidden`
    detailedRows.forEach((row) => {
        row.classList.add('hidden');
    });

    console.debug('Comparison toggle init:', { toggleBtnExists: !!toggleBtn, detailedCount: detailedRows.length });

    const updateToggleLabel = () => {
        toggleBtn.textContent = showDetailed
            ? "Masquer la version détaillée"
            : "Voir la version détaillée";
    };

    toggleBtn.addEventListener("click", () => {
        showDetailed = !showDetailed;

        detailedRows.forEach((row) => {
            if (showDetailed) row.classList.remove('hidden');
            else row.classList.add('hidden');
        });

        // Accessibilité: indiquer l'état
        try {
            toggleBtn.setAttribute('aria-expanded', String(showDetailed));
        } catch (e) { /* silent */ }

        console.debug('Comparison toggle clicked, showDetailed=', showDetailed);

        updateToggleLabel();
    });

    updateToggleLabel();
});