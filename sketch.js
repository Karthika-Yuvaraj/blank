var b
function preload()
{
 
}
function setup() {
  createCanvas(2000,2000);
 b= createSprite(400, 200, 50, 50);
b.velocityX=-5

  
}

function draw() {
  background("black"); 
 
  drawSprites();
}