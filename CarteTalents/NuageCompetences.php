<?php
include '../templates/header.php';

// ==== Connexion BDD ====
$host = "localhost";
$user = "root";
$pass = "mysql";
$dbname = "nuitinfo";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) { die("Erreur : " . $conn->connect_error); }

// ==== Récupérer compétences ====
$sql = "SELECT Competences_Talent FROM talent";
$result = $conn->query($sql);

$competencesCount = [];

while ($row = $result->fetch_assoc()) {
    $list = explode(",", strtolower($row["Competences_Talent"]));

    foreach ($list as $c) {
        $c = trim($c);
        if ($c !== "") {
            if (!isset($competencesCount[$c])) {
                $competencesCount[$c] = 1;
            } else {
                $competencesCount[$c]++;
            }
        }
    }
}
$conn->close();

// === Préparer les données pour JavaScript ===
$labels = json_encode(array_keys($competencesCount));
$values = json_encode(array_values($competencesCount));
?>

<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Statistiques Compétences</title>
<link rel="stylesheet" href="../styles/CarteTalents.css">
<link rel="stylesheet" href="../style.css">
<style>
.container-chart {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    text-align: center;
}

canvas {
    background: rgba(255,255,255,0.05);
    padding: 20px;
    border-radius: 15px;
}
</style>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>
<body>


<div class="container-chart">
    <canvas id="competenceChart" height="150"></canvas>
</div>

<script>
// === Données depuis PHP ===
const labels = <?php echo $labels; ?>;
const values = <?php echo $values; ?>;

// === Graphique Chart.js ===
const ctx = document.getElementById("competenceChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: labels,
        datasets: [{
            label: "Nombre de Talents par compétence",
            data: values,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});
</script>

<br>
<a href="CarteTalent.php" class="btn-retour"> Retour aux Talents</a>

</body>
</html>
