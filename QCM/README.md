# Decathlon — CTO de votre santé posturale

Mini-projet pour la Nuit de l'Info : QCM -> conseils personnalisés -> illustrations -> produits Decathlon.

## Structure
- `index.html` : QCM (niveau 1)
- `levels.html` : affichage des niveaux 2 à 4 (instructions, illustrations, produits)
- `style.css` : styles + mode sombre + animations
- `app.js` : logique JS (stockage profil, génération dynamique, progress bar, loader)

## Installation et lancement
1. Créer un dossier local `decathlon-ctoposture`.
2. Copier les fichiers `index.html`, `levels.html`, `style.css`, `app.js`, `README.md` dans ce dossier.
3. Ouvrir `index.html` dans un navigateur (ou servir via un serveur local simple, ex: `npx http-server`).

## Personnalisation rapide
- Remplacer l'URL du repository GitHub : ouvrir `levels.html` -> clic sur "Voir le repo GitHub" affichera une alerte si non renseigné. Ajoute l'URL dans `app.js` (variable `repoBtn.href`) ou modifie directement l'attribut `href` dans `levels.html`.
- Remplacer ou affiner les liens produits dans `app.js` (objet `PRODUCTS`).
- Ajouter plus d'illustrations ou vidéos (balise `<video>` ou `<iframe>`).

## Détails techniques
- Le profil utilisateur est stocké dans `localStorage` sous `profilSportif`.
- Le mode sombre est persistant via `localStorage` clé `theme`.
- La progress bar et le loader simulent un temps de génération avant redirection.

## Licence
Exemple pédagogique — réutilisation libre pour travaux scolaires.

