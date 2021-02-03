
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

Block8=new block(330,235,30,40);
block9=new block(360,235,30,40);
Block10=new block(390,235,30,40);
Block11=new block(420,235,30,40);
Block12=new block(450,235,30,40);
Block13=new block(360,195,30,40);
Block14=new block(420,195,30,40);
Block15=new block(390,195,30,40);
Block16=new block(390,155,30,40);

}

function draw() {
  background(255,255,255);  
  Block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  drawSprites();
}