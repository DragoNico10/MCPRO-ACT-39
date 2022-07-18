var p1, p2, ball, ballImage, p1count, p2count
function preload(){
  ballImage=loadImage("./assets/ball+(1).png")
}

function setup(){
  createCanvas(400,400);
  p1=createSprite(0, 200, 15, 100)
  p2=createSprite(400, 200, 15, 100)
  ball=createSprite(200, 200, 10, 10)
  ball.setCollider("circle")
  ball.addImage("image", ballImage)
  ball.scale=0.04
  edges=createEdgeSprites()
  ball.velocityX=4
  ball.velocityY=-4
  p1count=0
  p2count=0
}

function draw(){
  clear()
  background(0)
  ball.bounceOff(p1)
  ball.bounceOff(p2)
  ball.bounceOff(edges)
  if(p2.y<ball.y){
    p2.y+=3
  }
  if(p2.y>ball.y){
    p2.y-=3
  }
  if(ball.x<0){
    ball.x=200
    ball.velocityX=-4
    ball.velocityY=-4
    p2count++
  }
  if(ball.x>400){
    ball.x=200
    ball.velocityX=4
    ball.velocityY=-4
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

