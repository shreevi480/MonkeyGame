
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,ground;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



  function setup() {
      createCanvas(400, 400);



  monkey= createSprite(45,300,20,20);
    monkey.addAnimation("monkey",monkey_running);
    monkey.scale=0.1;

    ground=createSprite(150,335,800,10);
    //ground.velocityX=-4;

    bananaGroup=createGroup();
    obsGroup=createGroup();
  }


function draw() {
    background("white");

    ground.velocityX = -4;

  if(ground.x<0){ 

    ground.x=ground.width/2; } 

    if (keyDown("space")&& monkey.y >= 100){

      monkey.velocityY=-10;

    }
    monkey.velocityY = monkey.velocityY + 0.8

      monkey.collide(ground)  

    food();
  obstacles();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,200,40);
  
    drawSprites();
}

function food(){
  
  if(frameCount % 80 === 0){

    var banana=createSprite(400,200,30,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);

    banana.velocityX=-5;
    banana.lifetime = 400;
    banana.scale=0.1;

    bananaGroup.add(banana);

  }
}

function obstacles(){
  
    if(frameCount % 300 === 0){

      var obs=createSprite(350,305,30,20);
      obs.addImage(obstaceImage);

      obs.velocityX=-5;
      obs.lifetime = 400;
      obs.scale=0.2;

      obsGroup.add(obs);
    }
  
  
}

