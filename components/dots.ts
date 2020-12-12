export function dots(ctx, width, height) {
    let amount = 200; // количество точек
    let speedMax = 1; // максимальная скорость точек
    let line = 50; // размер лини между точками

    (function() {
        var requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        window.requestAnimationFrame = requestAnimationFrame;
    })();



    function Dot(w, h, speedMax) { // конструктор объекта(точки)
        this.x = getRandomInt(0, w);
        this.y = getRandomInt(0, h);
        this.speed = getRandomInt(1, speedMax) / 0.5;
        this.dx = getRandomInt(-this.speed, this.speed);
        this.dy = getRandomInt(-this.speed, this.speed);
        this.rad = getRandomInt(1, 3);
    }

    var dots = new Array; // создаем массив

    for (var i = 0; i < amount; i++) { // добавляем в массив объекты(точки) через конструктор
        dots.push(new Dot(width, height, speedMax));
    }

    function drawline() { // рисуем линии между точками
        dots.forEach(function(item, i, arr) { // перебираем массив объектов
            dots.forEach(function(item2, i2, arr2) { // еще раз перебираем массив объектов
                if(item.x > item2.x - line && item.x < item2.x + line && item.y > item2.y - line && item.y < item2.y + line ) { // на line расстояние
                    ctx.strokeStyle = "#999"; // цвет линии
                    ctx.beginPath();
                    ctx.moveTo( item.x, item.y );
                    ctx.lineTo( item2.x, item2.y );
                    ctx.stroke();
                }
            });
        });
    }

    function drawDots() { // рисуем точки
        dots.forEach(function(item, i, arr) {
            if(item.x >= width) item.dx = -item.speed; // ограничиваем полет
            if(item.x <= 0) item.dx = item.speed;
            if(item.y >= height) item.dy = -item.speed;
            if(item.y <= 0) item.dy = item.speed;
            item.x += item.dx;
            item.y += item.dy;
            ctx.fillStyle = "#999"; // цвет точки
            ctx.beginPath();
            ctx.arc(item.x, item.y, item.rad, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function draw() { // рисуем холст
        requestAnimationFrame(draw);
        ctx.clearRect(0, 0, width, height); // чистим холст
        drawDots();
        drawline();
    }

    draw();

    function getRandomInt(min, max) { // рандом для точек
        var rand = min + Math.random() * (max + 1 - min);
        //rand = Math.floor(rand); // округляем рандомное число
        return rand;
    }
}