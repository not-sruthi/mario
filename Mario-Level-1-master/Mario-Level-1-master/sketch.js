var mario, mario_running, mario_collide;
var bg,bgimg;
var ground;
var edge;
function preload(){
mario_running=loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
bgimg=loadImage("images/bgnew.jpg");
}

function setup() {
createCanvas(1000, 600);
bg=createSprite(580,300);
edge=createSprite(200,0,400,1);
bg.scale=0.5;
ground=createSprite(200,600,400,30);
mario=createSprite(150,500,20,50);
mario.addAnimation("running",mario_running);
mario.scale=0.3;
bg.addImage(bgimg);
ground.visible=false;
edge.visible=false;
}

function draw() {
drawSprites();
mario.collide(ground);
mario.collide(edge);
if (keyDown("space")){
    mario.velocityY=-16;
}
mario.velocityY=mario.velocityY+0.5
}
