var bg_img, bg, missile, ship_img, ship;

function preload(){
  bg_img = loadImage("assets/bg.png");
  ship_img = loadImage("assets/ship.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  ship = createSprite(50,200,10,10);
  ship.addImage(ship_img);
  ship.scale = 0.18; 
}

function draw() {
  background(bg_img);  

  drawSprites();
}