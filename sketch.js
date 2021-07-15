var garden,rabbit;
var gardenImg,rabbitImg;
var AppleImage,Apples;
var Leaf,LeafImage,L2,L2Img,L3,L3Img;
var score = 0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImage = loadImage("apple.png");
  LeafImage = loadImage("orangeLeaf.png");
  L2Img = loadImage("leaf.png");
  L3Img = loadImage("redImage.png");
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

function SpawnApples(){
  if(frameCount % 80 === 0){

  Apples = createSprite(200,-10);
  Apples.velocityY = 10;
  Apples.addImage(AppleImage);
  Apples.lifetime = 35;

  var B = Math.round(random(30,370));
  Apples.x = B; 
  
  Apples.scale = 0.09;
  }
  
}

function SpawnLeaf1(){
  if(frameCount % 80 === 0){
  Leaf = createSprite(200,-10);
  Leaf.velocityY = 7;
  Leaf.addImage(LeafImage);
  Leaf.lifetime = 50;
  
  var B = Math.round(random(30,370));
  Leaf.x = B; 
    
  Leaf.scale = 0.09;
  }
}

function SpawnLeaf2(){
  if(frameCount % 80 === 0){
  L2 = createSprite(200,-10);
  L2.velocityY = 9;
  L2.addImage(L2Img);
  L2.lifetime = 40;

  var B = Math.round(random(30,370));
  L2.x = B; 
  
  L2.scale = 0.09;
  }
}

function SpawnLeaf3(){
  if(frameCount % 80 === 0){
  L3 = createSprite(200,-10);
  L3.velocityY = 5;
  L3.addImage(L3Img);
  L3.lifetime = 70;

  var B = Math.round(random(30,370));
  L3.x = B; 
  
  L3.scale = 0.09;
  }
}

function draw() {
  background(0);

//Controling Rabbit with Mouse  
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  SpawnApples();
  SpawnLeaf1();
  SpawnLeaf2();
  SpawnLeaf3();

  drawSprites();

}

