// theme-ui.js - Gestion de l'interface du thème

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    if (!themeToggleBtn || !window.themeManager) return;

    // Mettre à jour l'icône au changement de thème
    const updateIcon = () => {
        const isDark = window.themeManager.isDarkMode();
        themeIcon.textContent = isDark ? '☀️' : '🌙';
    };

    // Initialiser l'icône
    updateIcon();

    // Ajouter l'écouteur de clic
    themeToggleBtn.addEventListener('click', () => {
        window.themeManager.toggleTheme();
        updateIcon();
    });

    // Écouter les changements de thème
    window.addEventListener('themechange', updateIcon);
});
