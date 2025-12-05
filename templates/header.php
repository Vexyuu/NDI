<?php
// header.php

if (!isset($pageTitle)) {
    $pageTitle = "Le Village Numérique Résistant - Nuit de l'Info 2025";
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars($pageTitle) ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Application web ludique pour découvrir comment les établissements scolaires peuvent résister aux Big Tech avec la démarche NIRD.">
    <?php $rootPath = $rootPath ?? ''; ?>
    <!-- Main Stylesheets -->
    <link rel="stylesheet" href="<?= $rootPath ?>style.css">
    <!-- Feature-specific Stylesheets -->
    <link rel="stylesheet" href="<?= $rootPath ?>styles/qcm.css">
    <link rel="stylesheet" href="<?= $rootPath ?>styles/CarteTalents.css">
    <link rel="stylesheet" href="<?= $rootPath ?>styles/HiddenSnake.css">
    <link rel="stylesheet" href="<?= $rootPath ?>styles/ChatAbruti.css">
    <link rel="stylesheet" href="<?= $rootPath ?>styles/snake.css">
    <link rel="stylesheet" href="<?= $rootPath ?>styles/theme.css">
</head>
<body>
<header class="site-header">
    <div class="header-inner">
        <div class="header-wrapper">
            <div class="logo-zone">
                <img src="<?= $rootPath ?>assets/images/logo-nird.png" alt="NIRD" class="logo">
                <div class="site-title">
                    <h1>Le Village Numérique Résistant</h1>
                    <p class="subtitle">Comment les établissements scolaires peuvent tenir tête aux Big Tech ?</p>
                </div>
            </div>
            <div class="header-controls">
                <button id="theme-toggle" class="theme-toggle-btn" title="Basculer le thème" aria-label="Basculer le thème clair/sombre">
                    <span id="theme-icon">🌙</span>
                </button>
            </div>
        </div>
        <nav class="main-nav">
            <a href="/NDI/#intro">Accueil</a>
            <a href="/NDI/#scenarios">Scénarios</a>
            <a href="/NDI/#score">Score NIRD</a>
            <a href="/NDI/#about">À propos</a>
            <a href="/NDI/HiddenSnake/snake.php">Snake</a> <!-- Hidden Snake -->
            <a href="/NDI/QCM/qcm.php">QCM</a> <!-- QCM Decathlon -->
            <a href="/NDI/CarteTalents/CarteTalent.php">Carte des Talents</a> <!-- Carte Talents -->
        </nav>
    </div>
</header>
<main class="site-main">