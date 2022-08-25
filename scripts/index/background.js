const canvas = document.getElementById('bgCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
console.log(ctx);
const pl = new Player(69, 69, 100, 100);

animate();

function animate(){
    pl.update();

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    pl.draw(ctx);

    requestAnimationFrame(animate);
}