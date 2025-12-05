<?php
$pageTitle = "Snake - Le Village NIRD";
$rootPath = '../';
include '../templates/header.php';
?>
<div id="snakeContainer">
    <div id="snakeUI">
        <div class="scores">
            <span id="scoreDisplay">Score: 0</span>
            <span id="highScoreDisplay">Meilleur: 0</span>
        </div>
        <p class="info">🎮 ZQSD pour bouger — Espace = Rejouer — Échap = Quitter</p>
        <canvas id="snakeCanvas" width="400" height="400"></canvas>
    </div>
</div>

<?php
include '../templates/footer.php';
?>