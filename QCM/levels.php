<?php
$pageTitle = "Décathlon — Conseils personnalisés";
$rootPath = '../';
include __DIR__ . '/../templates/header.php';
?>
<div class="container">
    <header>
      <img src="/NDI/assets/images/logo-decathlon.png" alt="Décathlon" style="height:60px; display:block; margin:auto;">
      <h1>Conseils personnalisés</h1>
      <p class="subtitle">Instructions, illustrations et produits</p>
    </header>

      <div id="dynamic" class="card">
      </div>

      <div class="actions">
        <a id="backBtn" class="btn outline" href="/NDI/QCM/qcm.php">Modifier mon profil</a>
        <a class="btn outline" href="/NDI/#intro">Accueil</a>
      </div>

    </div>

<?php include __DIR__ . '/../templates/footer.php'; ?>
