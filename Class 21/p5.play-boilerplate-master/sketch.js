var MR;
var FR;
var O1, O2, O3, O4;


function setup() {
  createCanvas(1200,400);
  MR = createSprite(400, 200, 50, 50);
  MR.shapeColor = "black";
  FR = createSprite(400, 300, 50, 50);
  FR.shapeColor = "grey";
  MR.debug = true;
  FR.debug = true;
  O1 = createSprite(600, 200, 50, 50);
  O1.shapeColor = "green";
  O2 = createSprite(600, 300, 50, 50);
  O2.shapeColor = "red";
  O3 = createSprite(800, 200, 50, 50);
  O3.shapeColor = "blue";
  O4 = createSprite(1000, 300, 50, 50);
  O4.shapeColor = "purple";
}

function draw() {
  background(255,255,255);  
  MR.x = mouseX;
  MR.y = mouseY;
  if(fun(MR,FR)){
  MR.shapeColor = "yellow";
  FR.shapeColor = "yellow";
  }
  else if(fun(MR,O1)){
    MR.shapeColor = "yellow";
    O1.shapeColor = "yellow";
    }
    else if(fun(MR,O2)){
      MR.shapeColor = "yellow";
      O2.shapeColor = "yellow";
      }
      else if(fun(MR,O3)){
        MR.shapeColor = "yellow";
        O3.shapeColor = "yellow";
        }
        else if(fun(MR,O4)){
          MR.shapeColor = "yellow";
          O4.shapeColor = "yellow";
          }
  else {
    MR.shapeColor = "black";
    FR.shapeColor = "grey";
    O1.shapeColor = "green";
    O2.shapeColor = "red";
    O3.shapeColor = "blue";
    O4.shapeColor = "purple";
  }

  drawSprites();
}
function fun(MR,FR){
  if (MR.x - FR.x < FR.width/2 + MR.width/2
    && FR.x - MR.x < FR.width/2 + MR.width/2
    && MR.y - FR.y < FR.height/2 + MR.height/2
    && FR.y - MR.y < FR.height/2 + MR.height/2) {
      return true;
}
else {
  return false;
}
}