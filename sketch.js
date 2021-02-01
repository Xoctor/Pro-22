var car, wall;
var speed, weight;
var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  speed = random(223,321)
  weight = random(30,52)

  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);

  thickness = random(22,83)

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
  function hasCollided(lbullet,lwall)
  {
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage > 10)
    {
      wall.shapeColor = color(255,0,0);

    }

    if (damage < 10)
    {
      wall.shapeColor = color(0,255,0);
      
    }
  }

  drawSprites();
}