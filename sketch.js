var barco;
var mar;



function preload(){
barco = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
mar = loadImage("sea.png");




}

function setup(){
  createCanvas(600,200);
barco = createSprite(50, 160, 20, 50);
barco.scale = 1;
mar = createSprite(200, 180, 20, 50);
  mar = addImage("mar", mar);
mar.x = mar.width /2;
mar.velocityX = -4;


}

function draw() {
  background("blue");
    drawSprites();

 
}
