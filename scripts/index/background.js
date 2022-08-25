const canvas = document.getElementById('bgCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
console.log(ctx);
const pl = new Player(69, 69, 100, 100);

const image = document.createElement('img');
image.src = '/images/background.png';

animate();

function animate(){
    pl.update();

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    ctx.beginPath();
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0,0,0,0.96)';
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.closePath();


    pl.draw(ctx);

    requestAnimationFrame(animate);
}