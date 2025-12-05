// app.js - logique commune pour index.html et levels.html

const PRODUCTS = {
  "tapis_yoga": "https://www.decathlon.fr/p/tapis-de-yoga-doux-epaisseur-4mm-vert-fonce/_/R-p-141487?mc=8506526&c=vert",
  "bandes_resistance": "https://www.decathlon.fr/p/kit-3-training-band-elastiques-15-25-35kg-avec-3-mois-offerts-freeletics/_/R-p-373225?mc=8966621&c=bleu_orange_jaune",
  "corde_sauter": "hhttps://www.decathlon.fr/p/corde-a-sauter-100-noir/_/R-p-309765?mc=8560956",
  "halteres_5kg": "https://www.decathlon.fr/p/paire-d-halteres-fitness-2-5-kg-fonte-a-80percent-recyclee-noir/_/R-p-130443?mc=8336580&c=noir_gris",
  "velo_elliptique": "https://www.decathlon.fr/p/velo-elliptique-el540-noir-auto-alimente-et-connecte-kinomap/_/R-p-329465?mc=8607943&c=noir"
};

// ---------- THEME (mode sombre) ----------
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  // try to attach toggle inputs if present
  const tIndex = document.getElementById('themeToggleIndex');
  const tLevels = document.getElementById('themeToggleLevels');
  if (tIndex) tIndex.checked = saved === 'dark';
  if (tLevels) tLevels.checked = saved === 'dark';

  function bind(toggle) {
    if (!toggle) return;
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        // sync other toggles
        if (tIndex) tIndex.checked = true;
        if (tLevels) tLevels.checked = true;
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        if (tIndex) tIndex.checked = false;
        if (tLevels) tLevels.checked = false;
      }
    });
  }
  bind(tIndex); bind(tLevels);
}
initTheme();

// ---------- QCM page logic ----------
const qcmForm = document.getElementById('qcmForm');
if (qcmForm) {
  qcmForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(qcmForm);
    const niveau = formData.get('niveau');
    const objectif = formData.get('objectif');
    const sports = formData.getAll('sport');

    const profil = { niveau, objectif, sports };
    localStorage.setItem('profilSportif', JSON.stringify(profil));

    // progression
    const progressWrap = document.querySelector('.progress-wrap');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressPercent');
    const loader = document.getElementById('loader');

    progressWrap.style.display = 'block';
    progressBar.style.width = '0%';
    if (progressText) progressText.textContent = '0%';

    // simulate progress with small increments
    for (let perc = 0; perc <= 90; perc += 10) {
      progressBar.style.width = perc + '%';
      if (progressText) progressText.textContent = perc + '%';
      await new Promise(r => setTimeout(r, 90));
    }

    // show loader and finish
    loader.classList.remove('hidden');
    progressBar.style.width = '100%';
    if (progressText) progressText.textContent = '100%';
    await new Promise(r => setTimeout(r, 650));

    // redirect to levels page
    window.location.href = 'levels.php';
  });
}

// ---------- Levels page logic ----------
const dynamic = document.getElementById('dynamic');
if (dynamic) {
  const raw = localStorage.getItem('profilSportif');
  let profil = null;
  try { profil = JSON.parse(raw || 'null'); } catch (e) { profil = null; }

  if (!profil) {
    dynamic.innerHTML = `<p>Profil introuvable — <a href="index.php">Retour au QCM</a></p>`;
  } else {
    dynamic.innerHTML = makeAdvice(profil);

    // add fade-in to images after short delay
    setTimeout(() => {
      document.querySelectorAll('.images').forEach(el => el.classList.add('fade-in'));
    }, 150);
  }

  // repo button (placeholder)
  const repoBtn = document.getElementById('repoBtn');
  if (repoBtn) {
    // Remplacez '#' par l'URL de votre repo
    repoBtn.href = '#';
    repoBtn.addEventListener('click', (e) => {
      if (repoBtn.href === '#') {
        e.preventDefault();
        alert("Ajoute l'URL de ton repository GitHub dans app.js (repoBtn.href).");
      }
    });
  }
}

// ---------- helper: génération du contenu ----------
function makeAdvice(profil) {
  let html = `<h2>Vos conseils personnalisés</h2>`;

  // Objectif
  if (profil.objectif === 'Perte de poids') {
    html += `<h3>Programme cardio & mobilité</h3><p>Intégrez des circuits courts (burpees, squats sautés, corde à sauter) 3x/semaine. Échauffez-vous 5–10 min avant chaque séance.</p>`;
  }
  if (profil.objectif === 'Prise de muscle') {
    html += `<h3>Programme renforcement</h3><p>Préférez 3–5 séries de 6-12 répétitions, concentrez-vous sur la technique (pompes, squats lestés). Récupération : 48h selon intensité.</p>`;
  }
  if (profil.objectif === 'Bien-être / Santé') {
    html += `<h3>Programme mobilité & récupération</h3><p>Yoga, étirements quotidiens et renforcement du tronc (gainage) 10-20 min/jour. Respiration contrôlée.</p>`;
  }

  // Niveau
  if (profil.niveau === 'Débutant') html += `<p><em>Conseil niveau débutant :</em> Commencez progressivement, priorisez la technique plutôt que la vitesse.</p>`;
  if (profil.niveau === 'Intermédiaire') html += `<p><em>Conseil niveau intermédiaire :</em> Augmentez l'intensité progressivement et introduisez la variation.</p>`;
  if (profil.niveau === 'Avancé') html += `<p><em>Conseil niveau avancé :</em> Travaillez la précision, le tempo et la variabilité des exercices.</p>`;

  // Sports spécifiques
  if (profil.sports && profil.sports.includes('Yoga')) {
    html += `<h4>Postures recommandées (ex.)</h4><p>Chaînes posturales, respiration, posture Cobra et chien tête en bas. Pensez à protéger les lombaires.</p>`;
  }
  if (profil.sports && profil.sports.includes('Course')) {
    html += `<h4>Conseils Running</h4><p>Attaque médio-pied, cadence 160–180 pas/minute si possible, posture droite et épaules détendues.</p>`;
  }

  // Illustrations
  html += `<div class="images">
    <img alt="Squat" src="https://media.tenor.com/Pfj8vy41k-0AAAAM/gym.gif">
    <img alt="Pompes" src="https://www.docteur-fitness.com/wp-content/uploads/2020/10/pompe-musculation.gif">
    <img alt="Yoga Cobra" src="https://gymvisual.com/img/p/2/7/2/3/7/27237.gif">
  </div>`;

  // Products selection based on profile
  html += `<h3>Produits recommandés</h3><ul>`;
  const prods = [];
  if (profil.objectif === 'Perte de poids') {
    prods.push(PRODUCTS.corde_sauter, PRODUCTS.tapis_yoga);
  }
  if (profil.objectif === 'Prise de muscle') {
    prods.push(PRODUCTS.halteres_5kg, PRODUCTS.bandes_resistance);
  }
  if (profil.objectif === 'Bien-être / Santé') {
    prods.push(PRODUCTS.tapis_yoga, PRODUCTS.bandes_resistance);
  }
  if (profil.sports && profil.sports.includes('Yoga')) prods.push(PRODUCTS.tapis_yoga);

  // deduplicate
  const uniq = [...new Set(prods)];
  if (uniq.length === 0) {
    html += `<li><em>Aucune recommandation produit spécifique — essayez de préciser votre objectif.</em></li>`;
  } else {
    uniq.forEach(u => {
      const label = productLabelFromUrl(u);
      html += `<li><a target="_blank" rel="noopener" href="${u}">${label}</a></li>`;
    });
  }
  html += `</ul>`;

  // Top 3 movements with short cues
  html += `<h3>3 mouvements clés</h3>
    <ol>
      <li><strong>Squat :</strong> talons ancrés, genoux alignés avec les pieds, regard neutre.</li>
      <li><strong>Pompes :</strong> corps gainé, mains sous les épaules, descente contrôlée.</li>
      <li><strong>Gainage :</strong> bassin neutre, contractions profondes, 3 séries de 30–60s.</li>
    </ol>`;

  // CTA + small note
  html += `<p style="margin-top:12px;color:var(--muted)">Ces conseils sont généraux — en cas de douleur consultez un professionnel de santé.</p>`;

  return html;
}

function productLabelFromUrl(url) {
  if (url.includes('tapis')) return 'Tapis / accessoires Yoga - Decathlon';
  if (url.includes('haltere')) return 'Haltères - Decathlon';
  if (url.includes('corde')) return 'Corde à sauter - Decathlon';
  if (url.includes('elliptiques')) return 'Vélos elliptiques - Decathlon';
  return 'Produit Decathlon';
}
