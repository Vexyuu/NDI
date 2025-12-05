<?php
// footer.php
?>
</main>

<footer class="site-footer">
</footer>
<footer style="background: linear-gradient(90deg, #1a1a2e 0%, #16213e 100%); color: #fff; padding: 2rem 0; text-align: center; font-family: 'Segoe UI', Arial, sans-serif; box-shadow: 0 -2px 16px rgba(0,0,0,0.3);">
    <div style="max-width: 900px; margin: 0 auto;">
        <img src="assets/images/NDI.jpeg" alt="Nuit de l'Info" style="height: 100px; margin-bottom: 1rem; filter: drop-shadow(0 0 6px #fff2);">
        <h2 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; letter-spacing: 2px;">Nuit de l'Info 2025</h2>
        <p style="margin: 0 0 1.5rem 0; font-size: 1.1rem; color: #b2b2b2;">Un projet collaboratif réalisé en une nuit par :</p>
        <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0; display: flex; justify-content: center; gap: 2rem;">
            <li style="background: #22234b; border-radius: 8px; padding: 0.5rem 1.5rem; box-shadow: 0 2px 8px #0002;">Killian Fievet - Chef d'équipe</li>
            <li style="background: #22234b; border-radius: 8px; padding: 0.5rem 1.5rem; box-shadow: 0 2px 8px #0002;">Raouf Hadj-Aissa - Développeur</li>
            <li style="background: #22234b; border-radius: 8px; padding: 0.5rem 1.5rem; box-shadow: 0 2px 8px #0002;">Ilan Touitou - Développeur</li>
            <li style="background: #22234b; border-radius: 8px; padding: 0.5rem 1.5rem; box-shadow: 0 2px 8px #0002;">Rafaël Ghouar Toussaint - Développeur</li>
        </ul>
        <div style="font-size: 0.95rem; color: #888; margin-bottom: 0.5rem;">
            &copy; 2025 Nuit de l'Info. Tous droits réservés.
        </div>
        <div style="font-size: 0.9rem; color: #555;">
            <span style="opacity: 0.7;">#CodeAllNight &nbsp;|&nbsp; #NDI2025</span>
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
