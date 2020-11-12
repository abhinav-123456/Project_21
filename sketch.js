var bullet,wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1400,400);

  speed=random(223,321)
  weight=random(400,1500)
  thickness=random(22,83)

  wall= createSprite(1300,200,thickness,height/2);
 
  bullet=createSprite(100,200,30,10);
  bullet.velocityX=speed;
bullet.shapeColor=color("white")
 
}

function draw() {
  background(0); 

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness );

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
   
  }

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
if(bulletRightEdge>= wallLeftEdge){
  return true;
}
return false;
}