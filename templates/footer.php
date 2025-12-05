<?php
// footer.php
?>
</main>

<footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
        <div class="brand">
            <img src="<?= $rootPath ?? '' ?>assets/images/NDI.jpeg" alt="Nuit de l'Info">
            <div>
                <h3>Nuit de l'Info 2025</h3>
                <div style="font-size:0.9rem; color:var(--text-muted);">Un projet collaboratif réalisé en une nuit</div>
            </div>
        </div>

        <ul class="team-list" aria-label="Équipe">
            <li>Killian Fievet <strong style="display:block;font-weight:600;">Chef d'équipe</strong></li>
            <li>Raouf Hadj-Aissa <strong style="display:block;font-weight:600;">Développeur</strong></li>
            <li>Ilan Touitou <strong style="display:block;font-weight:600;">Développeur</strong></li>
            <li>Rafaël Ghouar Toussaint <strong style="display:block;font-weight:600;">Développeur</strong></li>
        </ul>

        <div class="meta">
            <div>&copy; 2025 Nuit de l'Info. Tous droits réservés.</div>
            <div style="margin-top:6px; opacity:0.8;">#CodeAllNight &nbsp;|&nbsp; #NDI2025</div>
        </div>
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
        // "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
        // "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
        // "b","a"
        "f", "b", "g", "p", "a", "d"
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
