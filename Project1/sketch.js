//loading font for prompts
let carBOLD;
  function preload() {
    carBOLD = loadFont('carbonBOLD.otf');
  }

function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(0,0,255);

}

function draw() {
  //femininity prompt text
  textFont(carBOLD);
  fill(255,36,0);
  textSize(50);
  text('Interact to reveal the femininity for today.',60,100,500,500);


}
