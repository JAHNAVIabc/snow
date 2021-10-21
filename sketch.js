var bgImg,santaAnimation;
var santa;

function preload() {

bgImg= loadImage("snow2.jpg");

santaAnimation= loadAnimation("sc1.png","sc2.png","sc3.png","sc4.png");



}

function setup() {
  createCanvas(800,400);
  santa=createSprite(70, 330, 50, 50);
  santa.addAnimation("running",santaAnimation);

  ground=createSprite(400, 390, 800, 10);
}

function draw() {
  background(bgImg);  
  
  if (keyDown("space")){
santa.velocityY=-5;
}

santa.velocityY=santa.velocityY+1;
santa.collide(ground)

  drawSprites();

  
}

