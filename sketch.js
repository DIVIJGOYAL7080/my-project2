var bullet,wall,speed,weight,thickness;






function setup() {
 thickness=random(22,83)
  createCanvas(1600,400);
 bullet= createSprite(100, 200, 90, 20);
 wall=createSprite(1200,200,thickness,height/2);
 weight=random(400,1500);
 speed=random(55,90);
 bullet.velocityX=speed/2;

}

function draw() {
  background(255,255,255);  
  if (bullet.x-wall.x>bullet.width/2+wall.width/2) {
   var damage=0.5*weight*speed*speed/thickness*thickness*thickness
    bullet.velocityX=0;
    bullet.x=bullet.x-90;
    if(damage<10){


      wall.shapeColor="green";
    }if(damage>10){

      wall.shapeColor="red";
    }
  }
  drawSprites();
}