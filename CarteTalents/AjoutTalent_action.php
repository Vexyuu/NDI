<?php
// Connexion à la BDD
$host = "localhost";
$user = "root";
$pass = "mysql"; 
$dbname = "nuitinfo";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}

// Sécurisation des entrées
$nom = htmlspecialchars($_POST['Nom_Talent']);
$prenom = htmlspecialchars($_POST['Prenom_Talent']);
$competences = htmlspecialchars($_POST['Competences_Talent']);
$passion = htmlspecialchars($_POST['Passion_Talent']);
$langue = htmlspecialchars($_POST['Langue_Talent']);
$projets = htmlspecialchars($_POST['ProjetPerso_Talent']);

// Requête SQL
$sql = "INSERT INTO talent (Nom_Talent, Prenom_Talent, Competences_Talent, Passion_Talent, Langue_Talent, ProjetPerso_Talent)
        VALUES ('$nom', '$prenom', '$competences', '$passion', '$langue', '$projets')";

// Exécution
if ($conn->query($sql) === TRUE) {
    // Redirection vers la liste des talents
    header("Location: CarteTalent.php?success=1");
    exit();
} else {
    echo "Erreur : " . $conn->error;
}

$conn->close();
?>
