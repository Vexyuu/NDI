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
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="styles/ChatAbruti.css">
</head>
<body>
<header class="site-header">
    <div class="header-inner">
        <div class="logo-zone">
            <img src="assets/images/logo-nird.png" alt="NIRD" class="logo">
            <div class="site-title">
                <h1>Le Village Numérique Résistant</h1>
                <p class="subtitle">Comment les établissements scolaires peuvent tenir tête aux Big Tech ?</p>
            </div>
        </div>
        <nav class="main-nav">
            <a href="#intro">Accueil</a>
            <a href="#scenarios">Scénarios</a>
            <a href="#score">Score NIRD</a>
            <a href="#about">À propos</a>
            <a href="HiddenSnake/snake.html">Snake</a> <!-- futur lien vers tes défis -->
        </nav>
    </div>
</header>
<main class="site-main">