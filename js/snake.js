document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");
    const grid = 20;

    // ------------------------------------------------------
    // VARIABLES DU SNAKE
    // ------------------------------------------------------
    let snake = [];
    let dx = grid, dy = 0;
    let food = {};
    let speed = 120;
    let lastTime = 0;
    let running = true;
    let score = 0;
    let highScore = localStorage.getItem("snakeHighScore") || 0;

    const overlay = document.getElementById("snakeContainer");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const highScoreDisplay = document.getElementById("highScoreDisplay");

    // Messages fun pour les jalons
    const messages = [
        { score: 5, text: "Pas mal ! 🔥" },
        { score: 10, text: "Tu chauffes ! 🚀" },
        { score: 15, text: "INCROYABLE ! 💥" },
        { score: 20, text: "T'ES UN DIEU ! 👑" },
        { score: 30, text: "INARRÊTABLE ! ⚡" }
    ];

    // ------------------------------------------------------
    // FONCTION DE MESSAGES FUN
    // ------------------------------------------------------
    function showMessage(text, duration = 1500) {
        const msgDiv = document.createElement("div");
        msgDiv.className = "game-message";
        msgDiv.textContent = text;
        document.getElementById("snakeUI").appendChild(msgDiv);

        setTimeout(() => {
            msgDiv.style.opacity = "0";
            setTimeout(() => msgDiv.remove(), 300);
        }, duration);
    }

    // ------------------------------------------------------
    // FONCTION DE GENERATION DE NOURRITURE
    // ------------------------------------------------------
    function generateFood() {
        let newFood;
        let validPosition = false;

        // Éviter de placer la nourriture sur le serpent
        while (!validPosition) {
            newFood = {
                x: Math.floor(Math.random() * 20) * grid,
                y: Math.floor(Math.random() * 20) * grid
            };

            validPosition = !snake.some(segment =>
                segment.x === newFood.x && segment.y === newFood.y
            );
        }

        return newFood;
    }

    // ------------------------------------------------------
    // MISE À JOUR DU SCORE
    // ------------------------------------------------------
    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem("snakeHighScore", highScore);
            highScoreDisplay.textContent = `Meilleur: ${highScore}`;
        }

        // Messages de félicitation
        const milestone = messages.find(m => m.score === score);
        if (milestone) {
            showMessage(milestone.text, 1200);
        }
    }

    // ------------------------------------------------------
    // INITIALISATION DU JEU
    // ------------------------------------------------------
    function startSnake() {
        snake = [
            { x: 200, y: 200 },
            { x: 180, y: 200 },
            { x: 160, y: 200 }
        ];
        dx = grid;
        dy = 0;
        food = generateFood();
        running = true;
        score = 0;
        speed = 120;

        updateScore();
        highScoreDisplay.textContent = `Meilleur: ${highScore}`;

        showMessage("🎉 Bienvenue au Snake secret ! 🐍", 2000);
        requestAnimationFrame(loop);
    }

    // ------------------------------------------------------
    // BOUCLE DE JEU
    // ------------------------------------------------------
    function loop(time) {
        if (!running) return;

        requestAnimationFrame(loop);

        if (time - lastTime < speed) return;
        lastTime = time;

        update();
        draw();
    }

    // ------------------------------------------------------
    // UPDATE DU SNAKE
    // ------------------------------------------------------
    function update() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // Collision murs
        if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
            gameOver();
            return;
        }

        // Collision queue
        for (let i = 0; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                gameOver();
                return;
            }
        }

        snake.unshift(head);

        // Mange nourriture
        if (head.x === food.x && head.y === food.y) {
            score++;
            updateScore();
            food = generateFood();

            // Augmenter la difficulté progressivement
            if (score % 5 === 0 && speed > 60) {
                speed -= 5;
                showMessage("🏃 Plus rapide !", 800);
            }
        } else {
            snake.pop();
        }
    }

    // ------------------------------------------------------
    // DESSIN DU JEU
    // ------------------------------------------------------
    function draw() {
        // Fond avec grille subtile
        ctx.fillStyle = "#111";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Grille
        ctx.strokeStyle = "#1a1a1a";
        ctx.lineWidth = 0.5;
        for (let i = 0; i <= canvas.width; i += grid) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
        }

        // Nourriture avec animation pulsante
        const pulseSize = Math.sin(Date.now() / 200) * 2 + (grid / 2 - 2);
        ctx.fillStyle = "#ff0044";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ff0044";
        ctx.beginPath();
        ctx.arc(food.x + grid / 2, food.y + grid / 2, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Snake avec dégradé
        for (let i = 0; i < snake.length; i++) {
            const p = snake[i];
            const opacity = 1 - (i / snake.length) * 0.5; // Dégradé de transparence
            ctx.fillStyle = i === 0 ? "#00ffaa" : `rgba(0, 255, 136, ${opacity})`;

            if (i === 0) {
                // Tête plus grosse et brillante
                ctx.shadowBlur = 10;
                ctx.shadowColor = "#00ffaa";
            }

            ctx.beginPath();
            ctx.arc(p.x + grid / 2, p.y + grid / 2, grid / 2 - 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.shadowBlur = 0;
        }
    }

    // ------------------------------------------------------
    // GAME OVER
    // ------------------------------------------------------
    function gameOver() {
        running = false;

        // Afficher le message de game over sur le canvas
        ctx.save();
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ff0044";
        ctx.font = "bold 40px Arial";
        ctx.textAlign = "center";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#ff0044";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 30);

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.shadowBlur = 0;
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 10);

        ctx.font = "16px Arial";
        ctx.fillStyle = "#00ff88";
        ctx.fillText("Espace = Rejouer | Échap = Quitter", canvas.width / 2, canvas.height / 2 + 50);
        ctx.restore();

        showMessage("💀 Game Over !", 2000);
    }

    // ------------------------------------------------------
    // REDÉMARRER LE JEU
    // ------------------------------------------------------
    function restart() {
        startSnake();
    }

    // ------------------------------------------------------
    // CONTRÔLES ZQSD + ÉCHAP + ESPACE
    // ------------------------------------------------------
    document.addEventListener("keydown", (e) => {
        // Restart avec Espace si game over
        if (!running && e.key === " ") {
            e.preventDefault();
            restart();
            return;
        }

        if (!running) {
            // Échap pour quitter même en game over
            if (e.key === "Escape") {
                showMessage("🏃‍♂️ Retour à l'accueil...", 1000);
                setTimeout(() => {
                    window.location.href = "../index.php";
                }, 1000);
            }
            return;
        }

        // Contrôles du jeu
        if (e.key === "z" && dy === 0) { dx = 0; dy = -grid; }
        else if (e.key === "s" && dy === 0) { dx = 0; dy = grid; }
        else if (e.key === "q" && dx === 0) { dx = -grid; dy = 0; }
        else if (e.key === "d" && dx === 0) { dx = grid; dy = 0; }
        else if (e.key === "Escape") {
            showMessage("🏃‍♂️ Retour à l'accueil...", 1000);
            setTimeout(() => {
                window.location.href = "../index.php";
            }, 1000);
        }
    });

    // ------------------------------------------------------
    // LANCEMENT DU JEU
    // ------------------------------------------------------
    overlay.classList.remove("hidden");
    startSnake();
});