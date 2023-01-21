var verticalV1; verticalV2; horizontalV
var verticalA1; verticalA2; horizontalA1; horizontalA2
var verticalL; horizontalL
var verticalE; horizontalE1; horizontalE2; horizontalE3

function setup() {
  createCanvas(1000, 400);
  //Crea los sprites necesarios para formar tu nombre
  verticalV1 = createSprite(200,200,20,90);
  verticalV1.shapeColor = "blue";
  verticalV2 = createSprite(250,200,20,90);
  verticalV2.shapeColor = "blue";
  horizontalV = createSprite(225,250,50,20);
  horizontalV.shapeColor = "blue";

  verticalA1 = createSprite(300,215,20,90);
  verticalA1.shapeColor = "#10ec22";
  verticalA2 = createSprite(350,215,20,90);
  verticalA2.shapeColor = "#10ec22";
  horizontalA1 = createSprite(325,165,50,20);
  horizontalA1.shapeColor = "#10ec22";
  horizontalA2 = createSprite(325,215,70,20);
  horizontalA2.shapeColor = "#06c100";

  verticalL = createSprite(400,205,20,100);
  verticalL.shapeColor = "yellow";
  horizontalL = createSprite(415,250,50,20);
  horizontalL.shapeColor = "#ff7a00";

  verticalE = createSprite(480,205,20,100);
  verticalE.shapeColor = "pink";
  horizontalE1 = createSprite(500,250,60,20);
  horizontalE1.shapeColor = "#ff06ce";
  horizontalE2 = createSprite(500,165,60,20);
  horizontalE2.shapeColor = "#ff2706";
  horizontalE3 = createSprite(500,200,30,20);
  horizontalE3.shapeColor = "#edbcff";
}


function draw() {
  background("black");

  drawSprites();
  
}