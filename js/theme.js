// theme.js - Gestion du thème clair/sombre

class ThemeManager {
    constructor() {
        this.STORAGE_KEY = 'ndi-theme-preference';
        this.THEME_ATTRIBUTE = 'data-theme';
        this.DARK_THEME = 'dark';
        this.LIGHT_THEME = 'light';
        this.init();
    }

    init() {
        // Récupérer la préférence sauvegardée ou détecter la préférence système
        const savedTheme = this.getSavedTheme();
        const systemTheme = this.getSystemTheme();
        const theme = savedTheme || systemTheme;

        // Appliquer le thème
        this.setTheme(theme);

        // Ajouter l'écouteur pour les changements système
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!this.getSavedTheme()) {
                    this.setTheme(e.matches ? this.DARK_THEME : this.LIGHT_THEME);
                }
            });
        }
    }

    getSavedTheme() {
        return localStorage.getItem(this.STORAGE_KEY);
    }

    getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return this.DARK_THEME;
        }
        return this.LIGHT_THEME;
    }

    getCurrentTheme() {
        return document.documentElement.getAttribute(this.THEME_ATTRIBUTE) || this.DARK_THEME;
    }

    setTheme(theme) {
        if (![this.DARK_THEME, this.LIGHT_THEME].includes(theme)) {
            theme = this.DARK_THEME;
        }

        document.documentElement.setAttribute(this.THEME_ATTRIBUTE, theme);
        localStorage.setItem(this.STORAGE_KEY, theme);

        // Émettre un événement personnalisé
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    }

    toggleTheme() {
        const currentTheme = this.getCurrentTheme();
        const newTheme = currentTheme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
        this.setTheme(newTheme);
        return newTheme;
    }

    isDarkMode() {
        return this.getCurrentTheme() === this.DARK_THEME;
    }
}

// Initialiser le gestionnaire de thème au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.themeManager = new ThemeManager();
    });
} else {
    window.themeManager = new ThemeManager();
}
