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
  text('Interact to reveal the femininity for today.',60,100,600,500);

  //triangle button
  fill(255,36,0);
  noStroke();
  triangle(60,300,85,250,110,300);

  //circle button
  noStroke();
  fill(255,36,0);
  circle(85,400,50);

  //rounded line button that looks like a mike & ike
  strokeCap(ROUND);
  strokeWeight(40);
  stroke(255,36,0);
  line(85,500,110,500);
}
