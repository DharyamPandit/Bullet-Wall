//Bullet, Speed, Weight, Wall
var Bullet, Wall;
var Speed,Weight, Thickness;
var Damage;

function setup() {
  createCanvas(1600,400);
  //Making Bullet, Wall
  Bullet = createSprite(50, 200, 50, 50);
  Bullet.velocityX = Speed;
  Bullet.shapeColor = "white";
  Wall =createSprite(1200,200,Thickness,height/2);
  //Speed, Weight, Thickness
  Speed = random(223,321) ;
  Weight = random(30, 52) ;
  Thickness = random(22, 83) ;
}

function draw() {
  //Background
  background(255,255,255);  
  background("black");
 drawSprites();
}

function hasCollided(LBullet, LWall)
{
  BulletRightEdge = LBullet.x + LBullet.width;
  WallLeftEdge = LWall.x;
  if (BulletRightEdge >= WallLeftEdge)
  {
    return true;
  }
  return false;

  //If Bullet and Wall has colli8ded
 if (hasCollided(Bullet, Wall))
 {
   Bullet.velocityX = 0;
   var Damage = 0.5*BulletWeight*BulletSpeed*BulletSpeed/(Thickness*Thickness*Thickness);
   if (Damage>10)
   {
     Wall.shapeColor = color(225,0,0) ;
   }
   if (Damage<10)
   {
     Wall.shapeColor = color(0,225,0) ;
   }
 }
}


