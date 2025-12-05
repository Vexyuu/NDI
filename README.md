# 🌐 Le Village Numérique Résistant - Nuit de l'Info 2025

Application web ludique et éducative réalisée dans le cadre de la **Nuit de l'Info 2025**.

## 🎯 Objectif Principal

Illustrer comment un établissement scolaire peut **tenir tête aux Big Tech** en adoptant la démarche **NIRD : Numérique Inclusif, Responsable et Durable**.

L'application propose une expérience interactive complète avec :
- 🎮 **Des scénarios interactifs** inspirés de situations réelles
- 📊 **Un score de "résistance numérique"** évolutif
- 🏆 **Plusieurs défis intégrés** (QCM santé, Chat'bruti, Snake secret, Carte des Talents)
- 🎨 **Un design sobre et accessible** avec mode sombre

---

## 🏗️ Architecture du Projet

### Site Principal (Mère)

Le site principal héberge tous les défis et fournit une infrastructure commune :

```
nuit-info-2025/
├── NDI/                      # Racine du projet
    ├── index.php             # Page d'accueil principale
    ├── style.css             # Styles globaux
    ├── README.md             # Ce fichier
    │
    ├── assets/               # Ressources communes
    │   └── images/           # Images libres de droit
    │       ├── chatBot.webp  # Avatar du chatbot
    │       ├── Verified_Gold.png              # Badge "Talent Verified"
    │       └── Indieground_Holographic_Texture.jpg  # Texture holographique
    │
    ├── templates/            # Composants réutilisables
    │   ├── header.php        # En-tête commun (navigation)
    │   └── footer.php        # Pied de page (licence, scripts, Konami Code)
    │
    ├── js/                   # Scripts globaux
    │   ├── main.js           # Logique scénarios + score
    │   ├── theme.js          # Gestion du thème clair/sombre
    │   └── theme-ui.js       # Interface du sélecteur de thème
    │
    ├── styles/               # Styles globaux
    │   └── theme.css         # Variables CSS pour les thèmes
    │
    └── [DÉFIS]/              # Dossiers des défis (voir ci-dessous)
```

---

## 🎪 Les Défis Intégrés

Le site principal héberge **5 défis indépendants** accessibles via navigation ou easter eggs :

### 1. 🐍 Hidden Snake (Easter Egg Secret)

**Accès** : Code secret (`F B G P A D`) sur n'importe quelle page

Un jeu Snake classique caché dans le site avec :
- ✨ Visuels néon (grille, effets glow, animations)
- 🏆 Système de score avec meilleur score sauvegardé (localStorage)
- 🎯 Difficulté progressive (accélération tous les 5 points)
- 💬 Messages de félicitations à certains jalons
- 🎨 Tête du serpent avec yeux expressifs qui suivent la direction
- 🍎 Nourriture pulsante avec effet lumineux
- 🎮 Contrôles : ZQSD pour bouger, Espace pour rejouer, Échap pour quitter

```
HiddenSnake/
└── snake.php               # Page du jeu
```

**JavaScript et CSS** : `/js/snake.js` et `/styles/snake.css`

**Comment le trouver ?**
1. Va sur n'importe quelle page du site
2. Tape le code secret : `F B G P A D`
3. Tu seras automatiquement redirigé vers le Snake !

---

### 2. 🤪 Chat'bruti - Le Chatbot Complètement Débile

Widget de chatbot présent sur toutes les pages (icône flottante en bas à droite).

**Caractéristiques** :
- 🎭 **Personnalité absurde** : Philosophe du dimanche qui détourne/oublie les questions
- 🍌 **Obsessions** : Bananes, nuages roses, girafes, théières, cactus
- 🎪 **6 comportements** : Deflection, Forgetfulness, Sublimation, Delusions, Misunderstanding, Ultra-absurdité
- 💬 **+40 réponses contextuelles** selon mots-clés
- 🎨 **Design carré moderne** avec animations playful

```
ChatAbruti/
└── ChatAbrutiREADME.md # Documentation détaillée
```

**JavaScript et CSS** : `/js/ChatAbruti.js` et `/styles/ChatAbruti.css`

**Exemples de dialogues** :
- "Qui es-tu ?" → "Moi je suis Chat'bruti, philosophe du dimanche." 🤪
- "Pourquoi ?" → "Parce que... euh... oui, pourquoi pas !" 🤷
- "Aide-moi" → "De l'aide ? Ha ha ! C'est le truc que je fais le MOINS bien ! 😅"

---

### 3. 🏃 Décathlon Digital - CTO de Votre Santé Posturale

QCM interactif en 4 niveaux pour des conseils santé personnalisés.

**Parcours** :
1. **Niveau 1** : QCM sur le profil sportif (âge, activité, problèmes posturaux)
2. **Niveau 2** : Conseils personnalisés selon profil
3. **Niveau 3** : Illustrations et vidéos d'exercices
4. **Niveau 4** : Recommandations de produits Decathlon adaptés

**Fonctionnalités** :
- 💾 Profil sauvegardé dans `localStorage`
- 📊 Progress bar animée
- 🎨 Mode sombre persistant
- 🔄 Loader de génération avant redirection

```
QCM/
├── qcm.php             # Niveau 1 (QCM)
└── levels.php          # Niveaux 2-4 (résultats)
```

**JavaScript et CSS** : `/js/qcm.js` et `/styles/qcm.css`

---

### 4. 🎴 Carte des Talents

Plateforme collaborative pour partager et découvrir les compétences de chacun.

**Objectif** : Créer une communauté où les participants peuvent :
- 📝 **Décrire leurs talents** : compétences techniques, linguistiques, artistiques, projets personnels
- 🔍 **Rechercher des collaborateurs** pour projets, aide mutuelle, etc.
- 🏆 **Obtenir un badge "Talent Verified"** validé par un responsable
- 🌐 **Visualiser** : carte interactive ou nuage de compétences

**Fonctionnalités** :
- ✍️ **Profil complet** : nom, photo, compétences, passions, langues, projets réalisés
- 🔎 **Recherche avancée** : filtrer par compétence, langue, disponibilité
- ☁️ **Nuage de compétences** : visualisation globale des talents de la communauté
- 🤝 **Section "Trouver un collaborateur"** : matching pour projets
- ✅ **Badge "Talent Verified"** avec image gold holographique

**Pages** :
- `CarteTalent.php` : Galerie des profils avec recherche
- `AjoutTalent.php` : Formulaire de création de profil
- `NuageCompetences.php` : Visualisation du nuage de mots des compétences
- `AjoutTalent_action.php` : Traitement backend (sauvegarde profil)

**Assets** :
- `Verified_Gold.png` : Badge de validation doré
- `Indieground_Holographic_Texture.jpg` : Texture pour effets visuels

```
CarteTalents/
├── CarteTalent.php         # Galerie des profils
├── AjoutTalent.php         # Formulaire d'ajout
├── AjoutTalent_action.php  # Traitement PHP
└── NuageCompetences.php    # Nuage de compétences
```

**CSS** : `/styles/CarteTalent.css`

---

### 5. 📚 Scénarios NIRD Interactifs

Module intégré dans `index.php` qui propose des situations réelles :
- 💻 Matériel obsolète (fin de support Windows 10)
- ☁️ Stockage des données (cloud vs souveraineté)
- 🆓 Logiciels propriétaires vs libres
- 🔒 Vie privée et tracking
- ♻️ Impact environnemental

**Score de résistance** : Évolue selon les choix et affiche un message de synthèse.

---

## 🚀 Installation et Lancement

### Prérequis
- Serveur web (Apache, Nginx) avec support PHP
- Navigateur moderne (Chrome, Firefox, Safari, Edge)

### Étapes

1. **Clone le repository**
```bash
git clone https://github.com/votre-repo/nuit-info-2025.git
cd nuit-info-2025
```

2. **Configure ton serveur**
```bash
# Exemple avec PHP built-in server
cd NDI
php -S localhost:8000
```

3. **Accède au site**
```
http://localhost:8000/index.php
```

4. **Explore les défis** :
   - 🏠 Page principale : scénarios NIRD
   - 🤪 Chat'bruti : clique sur l'icône flottante
   - 🏃 QCM Décathlon : via navigation
   - 🎴 Carte Talents : via navigation
   - 🐍 **Snake secret** : tape le Konami Code !

---

## 🎨 Personnalisation

### Thèmes
Le site supporte le mode clair/sombre avec persistance :
```javascript
// Dans theme.js
localStorage.getItem('theme'); // 'light' ou 'dark'
```

### Ajouter un nouveau défi

1. **Crée un dossier** dans `/NDI/`
```
MonNouveauDefi/
├── defi.php
├── defi.js
└── defi.css
```

2. **Ajoute le lien** dans `header.php`
```php
<a href="MonNouveauDefi/defi.php">Mon Défi</a>
```

3. **Inclus les templates** dans `defi.php`
```php
<?php include '../templates/header.php'; ?>
<!-- Ton contenu -->
<?php include '../templates/footer.php'; ?>
```

### Modifier Chat'bruti

**Obsessions** :
```javascript
// Dans ChatAbruti.js
this.obsessions = ["tes nouveaux trucs", "d'autres délires", ...];
```

**Réponses par mots-clés** :
```javascript
this.keywordResponses = {
    "ton-mot": ["réponse 1", "réponse 2", ...]
};
```

### Modifier le Snake

**Vitesse initiale** :
```javascript
// Dans snake.js
let speed = 120; // ms entre chaque frame (plus bas = plus rapide)
```

**Taille de la grille** :
```javascript
const grid = 20; // Taille d'une case en pixels
```

**Couleurs** :
```javascript
ctx.fillStyle = "#ta-couleur"; // Pour le serpent/nourriture
```

---

## 🛠️ Technologies Utilisées

- **Frontend** : HTML5, CSS3, JavaScript (ES6+)
- **Backend** : PHP 7.4+
- **Stockage** : localStorage (scores, thèmes, profils)
- **Canvas API** : Rendu du jeu Snake
- **Design** : Flexbox, Grid, CSS Variables, Animations
- **Accessibilité** : Contrastes WCAG, navigation clavier

---

## 📊 Fonctionnalités Communes

### Header (`templates/header.php`)
- 🧭 Navigation principale
- 🎨 Sélecteur de thème (clair/sombre)
- 📱 Menu responsive (burger sur mobile)

### Footer (`templates/footer.php`)
- 📝 Informations sur le projet NIRD
- 🎮 **Code Secret Listener** (F B G P A D → Snake)
- 📜 Chargement des scripts globaux

### Thèmes
```css
/* Variables CSS dans theme.css */
:root {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  /* ... */
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
  /* ... */
}
```

---

## 🎯 Easter Eggs et Secrets

1. **🐍 Snake Game**
   - Code : `F B G P A D`
   - Disponible sur toutes les pages

2. **🤪 Réponses cachées de Chat'bruti**
   - Tape "NIRD" → confusion hilarante
   - Tape "banane" → obsession activée
   - Messages ultra-absurdes (10% de chance)

3. **🏆 High Score Snake**
   - Sauvegardé dans localStorage
   - Défie tes amis !

---

## 📝 Licences

### Code
- Libre d'utilisation pour projets éducatifs


### Contributions
Projet réalisé pour la Nuit de l'Info 2025 — Démarche NIRD.

---

## 🤝 Contributeurs

- FIEVET Killian - Chef d'équipe
- HADJ-AISSA Raouf
- TOUITOU Ilan
- GHOUAR-TOUSSAINT Rafaël

---

## 📞 Support

- 📧 **Contact** : killianfievet@gmail.com

---

## 🎉 Roadmap Future

- [ ] Mode multijoueur pour Snake
- [ ] Plus de scénarios NIRD
- [ ] Classement global des scores
- [ ] Intégration d'un vrai assistant IA (pas Chat'bruti 😂)

---

## 🏆 Remerciements

Merci à l'organisation de la Nuit de l'Info 2025 et à tous les participants !

**"Résistons ensemble pour un numérique libre, inclusif et durable !"** 🌱

---

*Dernière mise à jour : 5 Décembre 2025*