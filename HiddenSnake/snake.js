// --- Activation secrète (code Konami) ---
const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];
let position = 0;
document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[position]) {
        position++;
        if (position === konamiCode.length) {
            revealSnakeGame();
            position = 0;
        }
    } else {
        position = 0;
    }
});

// Affiche le jeu
function revealSnakeGame() {
    document.getElementById("secretContainer").classList.remove("hidden");
    startSnake();
}

// --- Jeu Snake ---
function startSnake() {
    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");

    const grid = 20;
    let snake = [{ x: 160, y: 160 }];
    let dx = grid;
    let dy = 0;
    let food = randomFood();
    let speed = 0;

    function randomFood() {
        return {
            x: Math.floor(Math.random() * 20) * grid,
            y: Math.floor(Math.random() * 20) * grid
        };
    }

    function gameLoop() {
        requestAnimationFrame(gameLoop);

        if (++count < 4) return;
        count = 0;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Déplacement
        let head = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(head);

        // Mange nourriture
        if (head.x === food.x && head.y === food.y) {
            food = randomFood();
        } else {
            snake.pop();
        }

        // Collision mur
        if (
            head.x < 0 || head.x >= canvas.width ||
            head.y < 0 || head.y >= canvas.height
        ) {
            return alert("💀 Game Over !");
        }

        // Collision queue
        for (let i = 4; i < snake.length; i++) {
            if (snake[i].x === head.x && snake[i].y === head.y) {
                return alert("💀 Game Over !");
            }
        }

        // Dessin nourriture
        ctx.fillStyle = "#ff0055";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#ff0055";
        ctx.fillRect(food.x, food.y, grid - 2, grid - 2);
        ctx.shadowBlur = 0;

        // Dessin serpent
        ctx.fillStyle = "#00ff88";
        snake.forEach((part) => {
            ctx.fillRect(part.x, part.y, grid - 2, grid - 2);
        });
    }

    let count = 0;
    requestAnimationFrame(gameLoop);

    document.addEventListener("keydown", (e) => {
        if (e.key === "z" && dy === 0) {
            dx = 0; dy = -grid;
        } else if (e.key === "s" && dy === 0) {
            dx = 0; dy = grid;
        } else if (e.key === "q" && dx === 0) {
            dx = -grid; dy = 0;
        } else if (e.key === "d" && dx === 0) {
            dx = grid; dy = 0;
        }
    });
}
