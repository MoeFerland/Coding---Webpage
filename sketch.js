let myFont;

function preload(){
  myFont = loadFont('43886.otf');
}

let img;


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

  img= loadImage('80spattern.jpg');


}

function draw() {
  image(img,0,0,1000,1000);

    textFont('43886.otf');
    textSize(60);
    fill(205,92,92);
    text('HELLO.',100,100);

}
