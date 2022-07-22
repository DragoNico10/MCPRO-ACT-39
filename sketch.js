var p1, p2, ball, ballImage, p1count, p2count, b1, b2
function preload(){
  ballImage=loadImage("./assets/ball.png")
  b1=loadImage("./assets/B1.png")
  b2=loadImage("./assets/B2.png")
}

function setup(){
  createCanvas(400,400);
  p1=createSprite(40, 200, 15, 100)
  p2=createSprite(360, 200, 15, 100)
  ball=createSprite(200, 200, 10, 10)
  ball.setCollider("circle")
  ball.addImage("image", ballImage)
  p1.addImage("image", b1)
  p2.addImage("image", b2)
  ball.scale=0.4
  edges=createEdgeSprites()
  ball.velocityX=4
  ball.velocityY=-4
  p1count=0
  p2count=0
  p1.setCollider("rectangle", 0, -30, 70, 130)
  p2.setCollider("rectangle", -1, -30, 60, 110)
  //for(sprite of World.allSprites){sprite.debug=true}
}

function draw(){
  background(0)
  ball.bounceOff(p1)
  ball.bounceOff(p2)
  ball.bounceOff(edges)
  if(p2.y-30<ball.y){
    p2.y+=3
  }
  if(p2.y-30>ball.y){
    p2.y-=3
  }
  if(ball.x<0){
    ball.x=200
    ball.velocityX=-4
    ball.velocityY=randYSpeed()
    p2count++
  }
  if(ball.x>400){
    ball.x=200
    ball.velocityX=4
    ball.velocityY=randYSpeed()
    p1count++
  }  
  if(keyDown(DOWN_ARROW)){
    p1.y+=4
  }
  if(keyDown(UP_ARROW)){
    p1.y+=-4
  }
  textSize(20)
  text(p1count, 150, 40)
  text(p2count, 250, 40)
  for(let recty=5;recty<450;recty+=30){
    rectMode(CENTER)
    rect(200, recty, 5, 10)
  }
  drawSprites()
}

function randYSpeed(){let i=[-4, 4];let val=random(i);return val}