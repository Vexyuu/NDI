# Le Village Numérique Résistant - Nuit de l'Info 2025

Application web ludique réalisée dans le cadre de la **Nuit de l'Info 2025**.

## Objectif

Illustrer comment un établissement scolaire peut **tenir tête aux Big Tech** en adoptant la démarche
**NIRD : Numérique Inclusif, Responsable et Durable**.

L'application propose :

- Des **scénarios interactifs** inspirés de situations réelles :
  - Matériel obsolète (fin de support de Windows 10),
  - Stockage des données (cloud, souveraineté),
  - Logiciels propriétaires vs logiciels libres, etc.
- Un **score de "résistance numérique"** qui évolue en fonction des choix.
- Un message de synthèse pour encourager l'utilisateur à imaginer son propre **plan d'action NIRD**.

## Structure du projet

```text
nuit-info-2025/
├── index.php         # Page principale (sections : intro, scénarios, score, à propos)
├── assets/
│   ├── header.php    # En-tête commun (HTML, titre, navigation)
│   └── footer.php    # Pied de page commun (licence, scripts)
├── style.css         # Styles globaux (dark mode sobre, responsive)
├── main.js           # Logique côté client (scénarios, score, feedback)
├── data.php          # (Optionnel) Données des scénarios si générées en PHP
├── assets/
│   ├── images/       # Logos, illustrations libres de droit
│   └── fonts/        # Polices utilisées (libres de droit)
└── README.md         # Ce fichier