<?php 
include '../templates/header.php';
?>

<?php
$host = "localhost";
$user = "root";
$pass = "mysql";  
$dbname = "nuitinfo";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) { die("Erreur de connexion : " . $conn->connect_error); }

// Vérification du terme de recherche
$search = "";
if (isset($_GET['q']) && !empty($_GET['q'])) {
    $search = $conn->real_escape_string($_GET['q']);
    $sql = "
        SELECT * FROM talent
        WHERE Nom_Talent LIKE '%$search%'
        OR Prenom_Talent LIKE '%$search%'
        OR Competences_Talent LIKE '%$search%'
        OR Passion_Talent LIKE '%$search%'
        OR Langue_Talent LIKE '%$search%'
        OR ProjetPerso_Talent LIKE '%$search%'
    ";
} else {
    $sql = "SELECT * FROM talent";
}
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste des Talents</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../styles/CarteTalents.css">
</head>
<body>


<form method="GET" class="search-bar">
    <input type="text" name="q" placeholder="Rechercher un talent..." value="<?php if(isset($_GET['q'])) echo $_GET['q']; ?>">
    <button type="submit">🔍</button>
</form>

<div class="container">
    <img src="" alt="">

<?php
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {

        echo '
        <div class="card">
            <div class="content-card">
                <img class="badge-verif" src="../assets/images/Verified_Gold.png" alt="Badge Compte Vérifié ">
                <div class="info">
                    <h3>'. strtoupper(htmlspecialchars($row["Nom_Talent"])) .'</h3>

                    <p><strong>Prénom :</strong> '. htmlspecialchars($row["Prenom_Talent"]) .'</p>
                    <p><strong>Compétences :</strong> '. htmlspecialchars($row["Competences_Talent"]) .'</p>
                    <p><strong>Passion :</strong> '. htmlspecialchars($row["Passion_Talent"]) .'</p>
                    <p><strong>Langue :</strong> '. htmlspecialchars($row["Langue_Talent"]) .'</p>
                    <p><strong>Projet :</strong> '. htmlspecialchars($row["ProjetPerso_Talent"]) .'</p>
                </div>
            </div>

            <div class="glow"></div>
        </div>';
    }
}
$conn->close();
?>

</div>
<center><a href="AjoutTalent.php" class="btn-ajout">Devenir un Talent</a>

<a href="NuageCompetences.php" class="btn-nuage">☁️ Nuage de Compétences</a></center>


<script src="../js/Carte_tilt.js"></script>
</body>
</html>

<?php 
include '../templates/footer.php';
?>