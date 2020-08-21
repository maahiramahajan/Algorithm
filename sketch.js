
var fr,mr;

function setup() {
  createCanvas(800,400);
  fr= createSprite(400, 200, 40, 60);
  fr.shapeColor="green";
  fr.debug=true;
  mr= createSprite(200, 200, 60, 40);
  mr.shapeColor="green";

  mr.debug=true;


}

function draw() {
  background(0,0,0);  
  mr.x=World.mouseX;
  mr.y =World.mouseY;

if (mr.x-fr.x<mr.width/2+fr.width/2
  &&  fr.x-mr.x<mr.width/2+fr.width/2 
  && mr.y-fr.y<mr.height/2+fr.height/2
  && fr.y-mr.y<fr.height/2+mr.height/2){
    
  

  mr.shapeColor="red";
  fr.shapeColor="red";

}else{


  mr.shapeColor="green";
  fr.shapeColor="green";
}

drawSprites();
}