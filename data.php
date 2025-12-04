<?php
// data.php
// Données des scénarios NIRD côté PHP

$scenarios = [
    [
        "id" => "materiel_obsolete",
        "title" => "Matériel obsolète ?",
        "description" => "Ton établissement dispose d'un parc de 50 PC sous Windows 10. Le support s'arrête bientôt. Que fais-tu ?",
        "choices" => [
            [
                "id" => "bigtech",
                "text" => "Tout remplacer par des PC neufs sous Windows 11.",
                "impactScore" => -20,
                "feedback" => "Tu restes très dépendant à un fournisseur unique, le coût est élevé et l’impact environnemental est fort."
            ],
            [
                "id" => "nird",
                "text" => "Tester Linux sur les PC encore fonctionnels et réemployer le matériel.",
                "impactScore" => 30,
                "feedback" => "Bravo ! Tu prolonges la durée de vie du matériel, réduis les coûts et fais un pas vers plus de souveraineté."
            ]
        ]
    ],
    [
        "id" => "donnees_cloud",
        "title" => "Données et cloud",
        "description" => "Les élèves et les enseignant·e·s stockent leurs documents sur un cloud américain grand public.",
        "choices" => [
            [
                "id" => "status_quo",
                "text" => "Continuer comme ça, tout le monde a l'habitude.",
                "impactScore" => -10,
                "feedback" => "Solution confortable mais problématique pour la souveraineté des données et le respect du RGPD."
            ],
            [
                "id" => "cloud_souverain",
                "text" => "Migrer progressivement vers un cloud européen ou académique basé sur des logiciels libres.",
                "impactScore" => 25,
                "feedback" => "Très bon choix : tu améliores la maîtrise des données et encourages les communs numériques éducatifs."
            ]
        ]
    ],
    [
        "id" => "sobriete_numerique",
        "title" => "Sobriété numérique en classe",
        "description" => "Les cours s’appuient massivement sur des vidéos en streaming HD pour chaque séance.",
        "choices" => [
            [
                "id" => "tout_video",
                "text" => "Continuer avec des vidéos HD systématiques, c'est plus 'moderne'.",
                "impactScore" => -15,
                "feedback" => "Gros impact sur la bande passante et l’empreinte carbone, sans bénéfice pédagogique clair."
            ],
            [
                "id" => "mix_sobre",
                "text" => "Alterner supports sobres (PDF, textes, activités sans écran) et vidéos seulement quand nécessaires.",
                "impactScore" => 20,
                "feedback" => "Bonne pratique de sobriété numérique, tout en gardant un apport multimédia pertinent."
            ]
        ]
    ]
];

// Si on appelle ce fichier directement en HTTP, on renvoie le JSON
if (php_sapi_name() !== 'cli') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($scenarios, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}