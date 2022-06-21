var p1, p2, ball, edges

function setup(){
  createCanvas(400,400);
  p1=createSprite(0, 200, 5, 100)
  p2=createSprite(400, 200, 5, 100)
  ball=createSprite(200, 200, 5, 5)
  ball.draw = function() { ellipse(0,0,10,10) }
  ball.velocity.x=1
  ball.velocity.y=1
}

function draw(){
  clear()
  drawSprites()
}

