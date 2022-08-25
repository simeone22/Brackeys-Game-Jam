let canvas = document.getElementById("bgCanvas");

canvas.width = document.getElementsByTagName('body')[0].clientWidth;
canvas.height = document.getElementsByTagName('body')[0].clientHeight;

let ctx = canvas.getContext('2d');

let pl = new player(0, 0, 100, 100);

animate();

function animate(){
    pl.update();
    pl.draw(ctx);

    requestAnimationFrame(animate);
}