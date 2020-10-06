//loading font for prompts
let carBOLD;
  function preload() {
    carBOLD = loadFont('carbonBOLD.otf');
  }

function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(3,37,126);

resetSKETCH();
}

function draw() {
  //femininity prompt text
  textFont(carBOLD);
  noStroke();
  fill(255,36,0);
  textSize(50);
  text('Interact to reveal the femininity for today.',60,80,600,500);

  //triangle button
  fill(255,36,0);
  noStroke();
  triangle(60,300,85,250,110,300);

  //circle button
  let cirX = 85;
  let cirY = 400;
  let cirD = 50;
  noStroke();
  fill(255,36,0);
  circle(85,400,50);

  //rectangle/line button
  strokeWeight(35);
  strokeCap(ROUND);
  stroke(255,36,0);
  line(80,510,100,510);

  //circle interaction
  if (mouseIsPressed & dist(mouseX, mouseY, 85, 400) < 25){
      let rCol = random(0,255);
      let gCol = random(0,255);
      let bCol = random(0,255);

      let cirX = random(250,width);
      let cirY = random(250,height);
      let diam = random(5,300);

      noStroke();
      fill(rCol,gCol,bCol);
      circle(cirX,cirY,diam);
  }


  //triangle interaction
  if (mouseIsPressed & dist(mouseX,mouseY,85,275) < 25){
      let triX1 = random(250,width);
      let triY1 = random(250,height);
      let triX2 = random(250,width);
      let triY2 = random(250,height);
      let triX3 = random(250,width);
      let triY3 = random(250,height);

      let rCol = random(0,255);
      let gCol = random(0,255);
      let bCol = random(0,255);

      noStroke();
      fill(rCol,gCol,bCol);
      triangle(triX1,triY1,triX2,triY2,triX3,triY3);
  }

  //rect/line interaction
  if (mouseIsPressed & dist(mouseX,mouseY,92,510) < 20){
    let linX1 = random(250,width);
    let linY1 = random(250,height);
    let linX2 = random(250,width);
    let linY2 = random(250,height);

    let rCol = random(0,255);
    let gCol = random(0,255);
    let bCol = random(0,255);

    stroke(rCol,gCol,bCol);
    strokeCap(random(ROUND,SQUARE));
    strokeWeight(random(3,100));
    line(linX1,linY1,linX2,linY2);

  }
}
function keyPressed(){
  if (keyCode === DELETE){
    resetSKETCH();
  }
}
