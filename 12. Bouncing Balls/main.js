// setup canvas

var canvas = document.querySelector('canvas');
var heading = document.querySelector('h1');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

//Drawing the ball

Ball.prototype.draw = function(){
    ctx.beginPath(); // to state we want to draw a shape
    ctx.fillStyle = this.color;// color of the shape
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)//position, radius, start from 0 degrees until 360 degrees
    //ctx.fillRect(this.x, this.y, this.x + 2, this.y + 3);
    ctx.fill();
}

//Updating the ball's data

Ball.prototype.update = function(){
    if((this.x + this.size) >= width){
        this.velX = -(this.velX);
    }
    
    if((this.x - this.size) <= 0){
        this.velX = -(this.velX);
    }
    
    if((this.y + this.size) >= height){
        this.velY = -(this.velY);
    }
    
    if((this.y - this.size) <= 0){
        this.velY = -(this.velY);
    }
    
    this.x += this.velX;
    this.y += this.velY;
}

//Adding collision detection

Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
}

//Animating the ball
var balls = [];

function loop() {
    heading.innerHTML = "Bouncing Balls";
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
    
    while(balls.length < 25){
        var size = random(10, 20);
        var ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            size
            
        );
        balls.push(ball);
    }
    
    for(var i = 0; i < balls.length; i++){
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }
    
    requestAnimationFrame(loop);
}

loop();























