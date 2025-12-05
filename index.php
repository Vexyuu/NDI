<?php
// index.php
$pageTitle = "Le Village Numérique Résistant - Accueil";
include 'templates/header.php';
?>

<section id="intro" class="section intro-section">
    <div class="section-inner">
        <h2>Bienvenue dans le Village Numérique Résistant</h2>
        <p>
            À l'heure où la fin du support de Windows 10 met en évidence la dépendance structurelle aux Big Tech,
            ton établissement peut devenir un village résistant, ingénieux, autonome et créatif, à l'image du célèbre
            village d'Astérix.
        </p>
        <p>
            Dans cette application, tu vas incarner une équipe éducative et faire des choix pour réduire les dépendances
            numériques de ton établissement, en suivant la démarche
            <strong>NIRD : Numérique Inclusif, Responsable et Durable</strong>.
        </p>
        <button id="startExperienceBtn" class="btn primary-btn">
            Commencer l'expérience
        </button>
    </div>

    <!-- Chat'bruti Widget -->
    <div id="chatabruti-icon" class="chatabruti-icon">
        <img src="assets/images/chatBot.webp" alt="Chat'bruti">
    </div>
    <div id="chatabruti-window" class="chatabruti-window">
        <div class="chatabruti-header">
            <span class="chatabruti-title">Chat'bruti 🤪</span>
            <button id="chatabruti-close" class="chatabruti-close-btn">&times;</button>
        </div>
        <div id="chatabruti-messages" class="chatabruti-messages"></div>
        <form id="chatabruti-form" class="chatabruti-form">
            <input 
                id="chatabruti-input" 
                class="chatabruti-input" 
                type="text" 
                placeholder="Pose ta question inutile..." 
                autocomplete="off"
                aria-label="Message input"
            >
            <button type="submit" class="chatabruti-submit">Envoyer</button>
        </form>
    </div>
</section>

<section id="scenarios" class="section scenarios-section">
    <div class="section-inner">
        <h2>Scénarios NIRD</h2>
        <p class="section-description">
            Chaque scénario représente une situation concrète dans un établissement (matériel obsolète, logiciels,
            stockage des données, sobriété numérique, etc.). Fais tes choix et observe l'impact sur le score
            de résistance numérique.
        </p>

        <div id="scenarioContainer" class="scenario-container">
            <p class="placeholder">
                Clique sur <strong>Commencer l'expérience</strong> pour découvrir le premier scénario.
            </p>
        </div>

        <div class="scenario-navigation">
            <button id="prevScenarioBtn" class="btn secondary-btn" disabled>Scénario précédent</button>
            <button id="nextScenarioBtn" class="btn secondary-btn" disabled>Scénario suivant</button>
        </div>
    </div>
</section>

<section id="score" class="section score-section">
    <div class="section-inner">
        <h2>Score de Résistance Numérique</h2>
        <p>
            Ton score NIRD reflète le niveau de résistance de ton village numérique face aux Big Tech.
            Plus tu privilégies le réemploi, les logiciels libres, la sobriété numérique et la souveraineté des données,
            plus ton score augmente.
        </p>

        <div class="score-display">
            <div class="score-value">
                <span id="scoreValue">0</span> / 100
            </div>
            <div class="score-bar-outer">
                <div id="scoreBar" class="score-bar-inner"></div>
            </div>
        </div>

        <p id="scoreMessage" class="score-message">
            Fais des choix dans les scénarios pour voir évoluer ton score.
        </p>
    </div>
</section>

<section id="about" class="section about-section">
    <div class="section-inner">
        <h2>À propos de la démarche NIRD</h2>
        <p>
            La démarche <strong>NIRD (Numérique Inclusif, Responsable et Durable)</strong> vise à aider les établissements
            scolaires à reprendre la main sur leur environnement numérique : sobriété, réemploi, logiciels libres,
            souveraineté des données, co-construction de communs numériques éducatifs, etc.
        </p>
        <p>
            Cette application propose une porte d'entrée ludique pour comprendre les enjeux
            et imaginer un plan d'action concret pour ton établissement.
        </p>
        <p class="note">
            Pendant la Nuit de l'Info, n'hésite pas à échanger avec les membres du collectif NIRD pour approfondir certains
            aspects ou vérifier la pertinence de tes scénarios.
        </p>
    </div>
</section>

<?php
include 'templates/footer.php';
?>