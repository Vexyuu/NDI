<?php
// footer.php
?>
</main>

<footer class="site-footer">
    <div class="footer-inner">
        <p>
            Projet réalisé dans le cadre de la Nuit de l'Info 2025.<br>
            Démarche : Numérique Inclusif, Responsable et Durable (NIRD).
        </p>
        <p class="license">
            Code et contenus sous licence libre (MIT, GPL, CC-BY-SA, etc.).<br>
            Images et ressources : uniquement des ressources libres de droit.
        </p>
    </div>
</footer>

<!-- Theme Scripts -->
<script src="<?= $rootPath ?? '' ?>js/theme.js"></script>
<script src="<?= $rootPath ?? '' ?>js/theme-ui.js"></script>

<!-- Feature Scripts -->
<script src="<?= $rootPath ?? '' ?>js/main.js"></script>
<script src="<?= $rootPath ?? '' ?>js/qcm.js"></script>
<script src="<?= $rootPath ?? '' ?>js/snake.js"></script>
<script src="<?= $rootPath ?? '' ?>js/ChatAbruti.js"></script>

<!-- Konami Code -->
<script>
document.addEventListener("DOMContentLoaded", () => {
    const konamiCode = [
        "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
        "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
        "b","a"
    ];
    let kPos = 0;

    document.addEventListener("keydown", (e) => {
        console.log(e);
        
        if (e.key === konamiCode[kPos]) {
            kPos++;
            if (kPos === konamiCode.length) {
                // Redirection vers la page du jeu
                window.location.href = "<?= $rootPath ?? '' ?>HiddenSnake/snake.php";
                kPos = 0;
            }
        } else kPos = 0;
    });
});
</script>
</body>
</html>
