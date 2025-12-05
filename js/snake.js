document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");
    const grid = 20;

    let snake = [
        { x: 200, y: 200 },
        { x: 180, y: 200 },
        { x: 160, y: 200 }
    ];
    let dx = grid, dy = 0;
    let food = generateFood();
    let speed = 120;
    let lastTime = 0;
    let running = true;

    function generateFood() {
        return {
            x: Math.floor(Math.random() * 20) * grid,
            y: Math.floor(Math.random() * 20) * grid
        };
    }

    function loop(time) {
        if (!running) return;
        requestAnimationFrame(loop);
        if (time - lastTime < speed) return;
        lastTime = time;

        update();
        draw();
    }

    function update() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // collision murs
        if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
            return restart();
        }

        // collision queue
        for (let i = 0; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) return restart();
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            food = generateFood();
        } else {
            snake.pop();
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // food
        ctx.fillStyle = "#ff0044";
        ctx.beginPath();
        ctx.arc(food.x + grid / 2, food.y + grid / 2, grid / 2 - 2, 0, Math.PI * 2);
        ctx.fill();

        // snake
        ctx.fillStyle = "#00ff88";
        for (let p of snake) {
            ctx.beginPath();
            ctx.arc(p.x + grid / 2, p.y + grid / 2, grid / 2 - 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function restart() {
        snake = [
            { x: 200, y: 200 },
            { x: 180, y: 200 },
            { x: 160, y: 200 }
        ];
        dx = grid;
        dy = 0;
        food = generateFood();
    }

    document.addEventListener("keydown", (e) => {
        if (!running) return;
        if (e.key === "z" && dy === 0) { dx = 0; dy = -grid; }
        else if (e.key === "s" && dy === 0) { dx = 0; dy = grid; }
        else if (e.key === "q" && dx === 0) { dx = -grid; dy = 0; }
        else if (e.key === "d" && dx === 0) { dx = grid; dy = 0; }
        else if (e.key === "Escape") {
            running = false;
            window.location.href = "index.php"; // retour à l'accueil
        }
    });

    requestAnimationFrame(loop);
});
