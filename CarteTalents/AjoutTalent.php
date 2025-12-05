<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ajouter un Talent</title>
 
    <style>
        .form-container {
            width: 450px;
            margin: 40px auto;
            background: rgba(255,255,255,0.1);
            padding: 25px;
            border-radius: 12px;
            backdrop-filter: blur(8px);
            color: white;
        }

        label { display: block; margin-top: 15px; }

        select, input, textarea {
            width: 100%;
            padding: 10px;
            margin-top: 8px;
            border-radius: 8px;
            border: none;
        }

        button {
            margin-top: 20px;
            padding: 12px 20px;
            background: #4a90e2;
            border: none;
            color: white;
            font-size: 18px;
            border-radius: 8px;
            cursor: pointer;
        }

        button:hover {
            background: #357ac8;
        }
    </style>

    <link rel="stylesheet" href="../styles/CarteTalents.css">
    <link rel="stylesheet" href="../style.css">
</head>
<body>

<div class="form-container">
    <h2>Ajouter un Talent</h2>

    <form method="POST" action="AjoutTalent_action.php">

        <label>Nom :</label>
        <input type="text" name="Nom_Talent" required>

        <label>Prénom :</label>
        <input type="text" name="Prenom_Talent" required>

        <label>Compétences :</label>
        <textarea name="Competences_Talent" rows="3" required></textarea>

        <label>Passion :</label>
        <textarea name="Passion_Talent" rows="3" required></textarea>

        <label>Langue :</label>
            <select name="Langue_Talent" id="Langue_Talent">
            <option value="Français">Français</option>
            <option value="English">English</option>
            <option value="Deutsch">Deutsch</option>
            <option value="Italian">Italian</option>
            </select>

        <label>Projet(s) réalisé(s) :</label>
        <textarea name="ProjetPerso_Talent" rows="3" required></textarea>

        <button type="submit">Enregistrer</button>
    </form>
</div>

<a href="CarteTalent.php" class="btn-retour"> Retour aux Talents</a>


</body>
</html>
