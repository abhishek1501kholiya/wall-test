var wall,thickness;

var bullet,speed,weight;


//var lbullet;
//var lwall;
//var bulletRightAngle;
//var wallLeftAngle;
function setup(){
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "grey";
  bullet = createSprite(50,200,40,10);
  bullet.shapeColor = "white";

  
}
function draw(){
  background(0,0,0)
  bullet.velocityX = speed;
  
 
  if(hasCollided(wall,bullet)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage<10){
      wall.shapeColor = "green";
    }
  }
 
  drawSprites();
}
function hasCollided(lwall,lbullet){
  bulletRightAngle  = lbullet.x + lbullet.width;
  wallLeftAngle = lwall.x;
  if(bulletRightAngle>=wallLeftAngle){
    return true
  }
  return false;

}
