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
  image(womxntext,100,100);
}
