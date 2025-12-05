<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Décathlon — QCM Profil Sportif</title>
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="style.css">
  <script src="../js/theme.js" defer></script>
  <script src="../js/theme-ui.js" defer></script>
</head>
<body>
  <div class="container">
    <header>
      <h1>Devenez le CTO de Votre Santé Posturale</h1>
      <p class="subtitle">Profilage sportif — Niveau 1</p>
    </header>

    <main>
      <form id="qcmForm" class="card" autocomplete="off">
        <section>
          <h2>Niveau sportif</h2>
          <label><input type="radio" name="niveau" value="Débutant" required> Débutant</label>
          <label><input type="radio" name="niveau" value="Intermédiaire"> Intermédiaire</label>
          <label><input type="radio" name="niveau" value="Avancé"> Avancé</label>
        </section>

        <section>
          <h2>Sports pratiqués</h2>
          <label><input type="checkbox" name="sport" value="Course"> Course</label>
          <label><input type="checkbox" name="sport" value="Musculation"> Musculation</label>
          <label><input type="checkbox" name="sport" value="Yoga"> Yoga</label>
          <label><input type="checkbox" name="sport" value="Cyclisme"> Cyclisme</label>
        </section>

        <section>
          <h2>Objectif principal</h2>
          <label><input type="radio" name="objectif" value="Perte de poids" required> Perte de poids</label>
          <label><input type="radio" name="objectif" value="Prise de muscle"> Prise de muscle</label>
          <label><input type="radio" name="objectif" value="Bien-être / Santé"> Bien-être / Santé</label>
        </section>

        <div class="actions">
          <button type="submit" class="btn">Valider et générer conseils</button>
        </div>

        <div class="progress-wrap" style="display:none" aria-hidden="true">
          <div class="progress"> <div class="bar" id="progressBar"></div> </div>
          <small class="progress-text">Progression : <span id="progressPercent">0%</span></small>
        </div>
      </form>

      <div id="loader" class="loader hidden" aria-hidden="true">
        <div class="spinner"></div>
        <p>Génération des recommandations...</p>
      </div>

    </main>

    <footer>
      <p>Projet Nuit de l'Info — Décathlon Digital</p>
      <div class="footer-actions">
        <button id="theme-toggle" class="theme-toggle-btn" title="Basculer le thème" aria-label="Basculer le thème clair/sombre">
          <span id="theme-icon">🌙</span>
        </button>
      </div>
    </footer>
  </div>

  <script src="app.js"></script>
</body>
</html>
