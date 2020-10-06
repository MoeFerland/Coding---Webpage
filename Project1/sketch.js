//loading font for prompts
let carBOLD;
  function preload() {
    carBOLD = loadFont('carbonBOLD.otf');
  }

function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(3,37,126);
}

function draw() {
  //femininity prompt text
  textFont(carBOLD);
  noStroke();
  fill(255,36,0);
  textSize(50);
  text('Interact to reveal the femininity for today.',60,80,600,500);

  //triangle button
  let triX1 = 60;
  let triY1 = 300;
  let triX2 = 85;
  let triY2 = 250;
  let triX3 = 110;
  let triY3 = 300;
  fill(255,36,0);
  noStroke();
  triangle(triX1,triY1,triX2,triY2,triX3,triY3);

  //circle button
  let cirX = 85;
  let cirY = 400;
  let cirD = 50;
  noStroke();
  fill(255,36,0);
  circle(85,400,50);

  //rounded line button that looks like a mike & ike
  let linX1 = 80;
  let linY1 = 510;
  let linX2 = 105;
  let linY2 = 510;
  strokeCap(ROUND);
  strokeWeight(35);
  stroke(255,36,0);
  line(80,510,105,510);

  //circle interaction
  if (mouseIsPressed & dist(mouseX, mouseY, 85, 400) < 25){
      let rCol = random(0,255);
      let gCol = random(0,255);
      let bCol = random(0,255);

      let cirX = random(250,750);
      let cirY = random(250,750);
      let diam = random(5,300);

      noStroke();
      fill(rCol,gCol,bCol);
      circle(cirX,cirY,diam);
  }

}
