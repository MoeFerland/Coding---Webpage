
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(0,0,255);

//font for MOE
let narlyFONT;
  function preload() {
    narlyFONT = loadFont('NarlyOT_Outline_coding.otf');

textFont(narlyFONT);
fill(255,36,0);
textSize(150);
text('MOE',200,200);


//random popsicle like shapesss
for (let lineNumber = 0; lineNumber < 4; lineNumber = lineNumber + 1){
     let x1 = random(0,width);
     let y1 = random(0,height);
     let x2 = 1500;
     let y2 = 1500;

     let rCol = random(0,255);
     let gCol = random(0,255);
     let bCol = random(0,255);

      strokeCap(ROUND);
      strokeWeight(random(1,100));
      stroke(rCol,gCol,bCol);
      line(x1,y1,x2,y2);
}
//random rectangles
for (let recNumber = 0; recNumber < 2; recNumber = recNumber + 1){

  let rCol = random(0,255);
  let gCol = random(0,255);
  let bCol = random(0,255);

  let recX = random(0,width);
  let recY = random(0,height);
  let recH = random(10,400);
  let recW = random(10,400);

   noStroke();
   fill(rCol,gCol,bCol);
   rect(recX,recY,recW,recH);
}
//random circle
for (let cirNumber = 0; cirNumber < 1; cirNumber = cirNumber + 1){

  let rCol = random(0,255);
  let gCol = random(0,255);
  let bCol = random(0,255);

  let cirX = random(0,width);
  let cirY = random(0,height);
  let diam = random(0,500);

  fill(rCol,gCol,bCol);
  circle(cirX,cirY,diam);
}
}
