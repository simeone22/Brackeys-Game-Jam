const canvas = document.getElementById('bgCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

const pl = new Player(0, 0, 100, 100);

animate();

function animate(){
    pl.update();
    pl.draw(ctx);

    requestAnimationFrame(animate);
}