var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var button = document.querySelector('button');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
  return Math.floor(Math.random()*number);
}

function random1() {
  return Math.floor((Math.random()*255) + 50);
}

button.onclick = function(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        var randomColor1 = random1();
        var randomColor2 = random1();
        var randomColor3 = random1();
        //document.write(randomColor + '<br>');
        //ctx.fillStyle = 'rgba(' + randomColor1 + ',' randomColor2 + ',' + randomColor3 + ',0.5)';
        //ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.fillStyle = 'rgba(' + randomColor1+ ',' + randomColor2 + ',' + randomColor3 + ',0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}


   
      
    



      
    