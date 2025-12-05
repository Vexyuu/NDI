<?php
include '../templates/header.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../styles/snake.css">
</head>
<body>

<div id="snakeContainer">
    <div id="snakeUI">
        <p class="info">🎮 ZQSD pour bouger — Échap pour revenir à l'accueil</p>
        <canvas id="snakeCanvas" width="400" height="400"></canvas>
    </div>
</div>

<script src="../js/snake.js"></script>

<?php
include '../templates/footer.php';
?>
</body>
</html>
