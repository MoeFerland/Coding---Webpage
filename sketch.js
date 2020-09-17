let img;
let flegreiReg;
  function preload() {
    flegreiReg = loadFont('43886.otf');
  }

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

  img= loadImage('80spattern.jpg');


}

function draw() {
  image(img,0,0,1000,1000);

    textFont(flegreiReg);
    fill(205,92,92);
    textSize(150);
    text('HELLO.',100,300,);


}
