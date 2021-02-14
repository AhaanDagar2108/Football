var Goalp, Goalc
var Paul
var Bob
var ball
var coinflip
var scoreP=0
var scoreC=0
var edges
var gameState="Start"
function preload(){
  ballimage=loadImage("game.png")
  
}

function setup(){
  createCanvas(displayWidth,displayHeight)
  fill("green")
  Goalp=createSprite(0,height/2,50,200)
  Goalc=createSprite(width-25,height/2,50,200)
  Goalp.debug=true
   Goalc.debug=true
  Paul=createSprite(width/2-100,height/2,20,20)
  Bob=createSprite(width/2+100,height/2,20,20)
ball=createSprite(width/2,height/2,10,10)
  ball.addImage(ballimage)
  ball.scale=0.1
  edges=createEdgeSprites()
}

function draw(){
  //start
  background("green")
  ball.bounceOff(edges)
  stroke("white")
  strokeWeight(5)
  fill("green")
  ellipse(400,400,200,200)
  line(400,0,400,800)
  fill ("white")
  ellipse(400,400,50,50)
  //ellipse(75,400,10,10)
  fill("green")
  rect(0,250,150,300)
    rect(650,250,150,300)

  fill("white")
    ellipse(75,400,10,10)
  ellipse(700,400,10,10)
  stroke("white")
  Goalp.shapeColor="gray"
  Paul.shapeColor="red"
  Bob.shapeColor="yellow"
  
  if(keyDown("up")) {
    Paul.y=Paul.y-5
  }
  
  if(keyDown("down")) {
    Paul.y=Paul.y+5
  }
  
  if(keyDown("left")) {
    Paul.x=Paul.x-5
  }
  
    if(keyDown("right")) {
    Paul.x=Paul.x+5
  }
  if(gameState==="Start"){
      ball.x=400
    ball.y=400
    Paul.x=300
    Paul.y=400
    Bob.x=500
    Bob.y=400
  }
  //play
if(keyDown("space")){
  coinflip=Math.round(random(1,2))

  switch(coinflip){
    case 1:ball.velocityX=1
          ball.velocityY=random(-1,1)
      break;
      case 2:ball.velocityX=-1
      ball.velocityY=random(-1,1)
    
      break;
      default:break;
  }
  gameState="Play"
}
  if(ball.isTouching(Bob) && gameState==="Play"){
    ball.bounceOff(Bob)
    Bob.velocityX=ball.velocityX
        Bob.velocityY=ball.velocityY
    

  }
  
  
  if(ball.isTouching(Paul)&& gameState==="Play"){
    ball.bounceOff(Paul)
     Bob.velocityX=ball.velocityX
        Bob.velocityY=ball.velocityY
  }
  
  if(ball.isTouching(Goalp) || ball.isTouching(Goalc)){
    if(ball.isTouching(Goalp)){
      scoreC=scoreC+1
      console.log("hi")
    }
      if(ball.isTouching(Goalc)){
      scoreP=scoreP+1
         console.log("hi2")
    }
    fill("Black")
    textSize(18)
    text("Goalazo!",390,400)
    
    gameState="Start"
   
  }
  drawSprites();
  if(scoreC===2 || scoreP===2){
    gameState="End"
   text("Game Over",400,400)
    text("Press R to restart",400,450)
    console.log("End")
    ball.setVelocity(0,0)
    Paul.setVelocity(0,0)
        Bob.setVelocity(0,0)

  }
  if(ball.x>400 &&  gameState==="Play"){
    Bob.velocityX=-random(1,2)
        //Bob.velocityY=ball.velocityY
     Bob.velocityX=ball.velocityX
        Bob.velocityY=ball.velocityY
  }
  
  //if (gameState==="End"){
    
  //}
  if(keyDown("r")){
    scoreC=0
    scoreP=0
    gameState="Start"
  }
  fill("red")
  textSize(30)
  text(scoreP,250,100)
  fill("Yellow")
  text(scoreC,550,100)
  
}