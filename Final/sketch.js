//loading font into sketch
let narlyFONT;
  function preload() {
    narlyFONT = loadFont('NarlyOT_Outline_coding.otf');
}

let womxntext;
  function preload(){
   womxntext = loadImage('WOMXN-codingfinal.png');
}



function setup() {
  // put setup code here
createCanvas(1000, 2500);
background(0,0,0);

}

function draw(){
  blendMode(SCREEN);
  womxntext.resize(width,height);
  image(womxntext,0,0);
}
