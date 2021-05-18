
var ground,groundImg;
var boy,boyImg;
var invisibleGround;
var enemy,enemyImg;
var coin,coinImg;
var lifeImg;
var life1,life2,life3;
var score=0;

function preload() {

  groundImg = loadImage("forest.jpg");
  boyImg = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png");
  enemyImg = loadAnimation("enemy1.png","enemy2.png","enemy3.png","enemy4.png","enemy5.png","enemy6.png","enemy7.png","enemy8.png")
  coinImg = loadImage("coin.png");
  lifeImg = loadImage("life.png");

}


function setup() {
  createCanvas(1200,600);
  imageMode(CENTER);

ground = createSprite(700,250,1000,20);
ground.addImage(groundImg);
ground.scale=2;

invisibleGround=createSprite(600,380,1200,20);
invisibleGround.visible=false;

boy = createSprite(150,350,20,50);
boy.addAnimation("running",boyImg);
boy.scale=0.7;

life1 = createSprite(70,25,10,10);
life1.addImage(lifeImg);
life1.scale=0.01;

life2 = createSprite(105,25,10,10);
life2.addImage(lifeImg);
life2.scale=0.01;

life3 = createSprite(140,25,10,10);
life3.addImage(lifeImg);
life3.scale=0.01;
}

function draw() {
  background("white");  

  ground.velocityX=-3;
  
 if(ground.x < 0 ) {
   ground.x=ground.width/2;
 }

 if(keyDown("space") && boy.y>330) {
   boy.velocityY=-14;
 }
 boy.velocityY=boy.velocityY+0.5;

 boy.collide(invisibleGround);

 spawnEnemys();
 spawnCoins1();
 spawnCoins2();
 spawnCoins3();
 spawnCoins4();
 spawnCoins5();
 spawnCoins6();

  drawSprites();

  textSize(20);
  stroke("Black");
  fill("Black");
  text("Life:",10,30);

  text("Score: "+score,10,60);

}

function spawnEnemys() {
  if(frameCount%300===0) {
    enemy=createSprite(1200,300,20,60);
    enemy.addAnimation("running",enemyImg);
    enemy.velocityX=-8;
    enemy.scale=0.5;
    enemy.lifetime = 200;
  }

}

function spawnCoins1() {
  if(frameCount%250===0) {
    coin=createSprite(1200,150,20,60);
    coin.y=Math.round(random(150,150));
    coin.addImage(coinImg);
    coin.velocityX=-5;
    coin.scale=0.1;
  }
}

function spawnCoins2() {
  if(frameCount%250===0) {
    coin=createSprite(1240,150,20,60);
    coin.y=Math.round(random(150,150));
    coin.addImage(coinImg);
    coin.velocityX=-5;
    coin.scale=0.1;
  }
}

function spawnCoins3() {
  if(frameCount%250===0) {
    coin=createSprite(1280,150,20,60);
    coin.y=Math.round(random(150,150));
    coin.addImage(coinImg);
    coin.velocityX=-5;
    coin.scale=0.1;
  }
}

function spawnCoins4() {
  if(frameCount%130===0) {
    coin=createSprite(1200,300,20,60);
    coin.y=Math.round(random(300,300));
    coin.addImage(coinImg);
    coin.velocityX=-5;
    coin.scale=0.1;
  }
}

function spawnCoins5() {
  if(frameCount%130===0) {
    coin=createSprite(1240,300,20,60);
    coin.y=Math.round(random(300,300));
    coin.addImage(coinImg);
    coin.velocityX=-5;
    coin.scale=0.1;
  }
}

function spawnCoins6() {
  if(frameCount%130===0) {
    coin=createSprite(1280,300,20,60);
    coin.y=Math.round(random(300,300));
    coin.addImage(coinImg);
    coin.velocityX=-5;
    coin.scale=0.1;
  }
}