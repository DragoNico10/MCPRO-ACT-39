var p1, p2, ball, edges

function setup(){
  createCanvas(400,400);
  p1=createSprite(0, 200, 5, 100)
  p2=createSprite(400, 200, 5, 100)
  ball=createSprite(200, 200, 10, 10)
  ball.draw = function() { ellipse(0,0,10,10) }
}

function draw(){
  clear()
  background(255)
  drawSprites()
}

