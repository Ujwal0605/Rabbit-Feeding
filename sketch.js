var garden,rabbit;
var gardenImg,rabbitImg;
var apple

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createApples() {
  
 // if(frameCount % 80 === 0) {
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.y = Math.round(random(100,275));
    apple.scale = 0.05;
    apple.velocityY = 2;
    apple.lifetime = 375;
 // }
 

}

function createLeaves() {

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  drawSprites();

  var select_sprites = Math.round(random(1,2));
  if(frameCount % 80 === 0){
    if(select_sprites === 1){
      createApples();
    }
    else{createLeaves()}
  }
  
}