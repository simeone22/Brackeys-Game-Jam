let canvas = document.getElementById("bgCanvas");

canvas.width = document.getElementsByTagName('body')[0].clientWidth;
canvas.height = document.getElementsByTagName('body')[0].clientHeight;

let ctx = canvas.getContext('2d');

animate();

function animate(){
    

    requestAnimationFrame(animate);
}