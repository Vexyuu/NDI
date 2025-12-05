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
                window.location.href = "HiddenSnake/snake.php";
                kPos = 0;
            }
        } else kPos = 0;
    });
});
</script>

<script src="js/main.js"></script>
<script src="js/ChatAbruti.js"></script>
</body>
</html>
