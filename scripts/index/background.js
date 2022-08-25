const canvas = document.getElementById("bgCanvas");

canvas.width = 700;
canvas.height = 700;

const ctx = canvas.getContext('2d');

const pl = new player(0, 0, 100, 100);

animate();

function animate(){
    pl.update();
    pl.draw(ctx);

    requestAnimationFrame(animate);
}