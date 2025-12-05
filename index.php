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
        <a href="#scenarios" id="startExperienceBtn" class="btn primary-btn" style="text-decoration: none; margin-bottom: 35px;">
            Commencer l'expérience
        </a>
    </div>
    
    <!-- Ajouter après la section #intro -->
<section id="village-map" class="section village-section">
    <div class="section-inner">
        <h2>Explore le Village Numérique Résistant</h2>
        <p class="section-description">
            Chaque lieu du village représente un pilier de la résistance numérique. 
            Clique sur les bâtiments pour découvrir les enjeux et solutions NIRD.
        </p>
        <i style="font-size: 10px;">
            Appuie sur chacune des lettres colorées (sans erreur de frappe 😉)
        </i>
        
        <div class="village-map">
            <div class="village-building" data-building="materiel">
                <h3>🔨 La <span style="color: green;">F</span>orge</h3>
                <p>Réemploi & Matériel</p>
            </div>
            
            <div class="village-building" data-building="logiciels">
                <h3>📚 La <span style="color: green;">B</span>ibliothèque</h3>
                <p>Logiciels Libres</p>
            </div>
            
            <div class="village-building" data-building="donnees">
                <h3>🏛️ Le <span style="color: green;">G</span>renier</h3>
                <p>Souveraineté des Données</p>
            </div>
            
            <div class="village-building" data-building="communs">
                <h3>🏘️ La <span style="color: green;">P</span>lace</h3>
                <p>Communs Numériques</p>
            </div>
            
            <div class="village-building" data-building="sobriete">
                <h3>🌿 L'<span style="color: green;">A</span>telier du <span style="color: green;">D</span>ruide</h3>
                <p>Sobriété Numérique</p>
            </div>
        </div>
        
        <!-- Modal pour afficher les détails de chaque bâtiment -->
        <div id="village-modal" class="village-modal" aria-hidden="true">
            <div class="village-modal-content">
                <button class="village-modal-close" aria-label="Fermer">&times;</button>
                <h3 id="village-modal-title"></h3>
                <p id="village-modal-text"></p>
                <ul id="village-modal-actions" class="village-modal-actions"></ul>
            </div>
        </div>
    </div>
</section>

<section id="comparaison" class="section comparison-section">
    <div class="section-inner">
        <h2>Big Tech vs Village NIRD : Le Match</h2>
        <p class="section-description">
            Les établissements scolaires sont souvent coincés entre des solutions clés en main des Big Tech
            et des alternatives plus autonomes mais moins connues.
            Voici une comparaison concrète pour t’aider à visualiser la différence.
        </p>

        <div class="comparison-toggle">
            <button id="comparisonToggleBtn" class="btn secondary-btn">
                Voir la version détaillée
            </button>
        </div>

        <div id="comparisonTable" class="comparison-table">
            <div class="comparison-header">
                <div class="comparison-col comparison-col--critere">Critère</div>
                <div class="comparison-col comparison-col--bigtech">🏢 Empire Big Tech</div>
                <div class="comparison-col comparison-col--nird">🛡️ Village NIRD</div>
            </div>

            <div class="comparison-row">
                <div class="comparison-col comparison-col--critere">
                    <strong>Coût licences (50 postes)</strong>
                </div>
                <div class="comparison-col comparison-col--bigtech">
                    15 000€ / an en licences et abonnements 💸
                </div>
                <div class="comparison-col comparison-col--nird">
                    ≈ 0€ en licences (logiciels libres) ✅
                </div>
            </div>

            <div class="comparison-row">
                <div class="comparison-col comparison-col--critere">
                    <strong>Durée de vie du matériel</strong>
                </div>
                <div class="comparison-col comparison-col--bigtech">
                    3–4 ans, renouvellement fréquent (obsolescence programmée) ⚠️
                </div>
                <div class="comparison-col comparison-col--nird">
                    7–10 ans grâce au réemploi et à Linux ♻️
                </div>
            </div>

            <div class="comparison-row">
                <div class="comparison-col comparison-col--critere">
                    <strong>Localisation des données</strong>
                </div>
                <div class="comparison-col comparison-col--bigtech">
                    Data centers mondiaux, souvent hors UE 🌍
                </div>
                <div class="comparison-col comparison-col--nird">
                    Cloud académique ou européen, RGPD-friendly 🇪🇺
                </div>
            </div>

            <div class="comparison-row">
                <div class="comparison-col comparison-col--critere">
                    <strong>Autonomie de l'établissement</strong>
                </div>
                <div class="comparison-col comparison-col--bigtech">
                    Forte dépendance à un fournisseur unique 🔒
                </div>
                <div class="comparison-col comparison-col--nird">
                    Capacité à choisir, adapter et contribuer 🔓
                </div>
            </div>

            <div class="comparison-row comparison-row--extra detailed-row">
                <div class="comparison-col comparison-col--critere">
                    <strong>Impact écologique</strong><br>
                    <span class="comparison-hint">(renouvellement, data, vidéos…)</span>
                </div>
                <div class="comparison-col comparison-col--bigtech">
                    Élevé : renouvellement de masse, streaming intensif, centres de données peu transparents 🔥
                </div>
                <div class="comparison-col comparison-col--nird">
                    Réduit : réemploi, sobriété numérique, mutualisation des ressources 🌱
                </div>
            </div>

            <div class="comparison-row comparison-row--extra detailed-row">
                <div class="comparison-col comparison-col--critere">
                    <strong>Pérennité des outils</strong>
                </div>
                <div class="comparison-col comparison-col--bigtech">
                    Dépend du business model des Big Tech (fermeture de services, changements forcés) 🎲
                </div>
                <div class="comparison-col comparison-col--nird">
                    Basé sur des standards ouverts, des communautés, des communs numériques 🤝
                </div>
            </div>
        </div>

        <p class="comparison-note">
            Les chiffres sont donnés à titre indicatif pour illustrer les ordres de grandeur. 
            L’objectif est de montrer l’intérêt de <strong>penser autrement</strong> les choix numériques 
            d’un établissement, au-delà de la seule habitude ou de la solution la plus visible.
        </p>
    </div>
</section>

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