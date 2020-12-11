//loading font into sketch
let narlyFONT;
  function preload() {
    narlyFONT = loadFont('NarlyOT_Outline_coding.otf');
}
//"womxn" text
let womxntext;
  function preload(){
   womxntext = loadImage('WOMXN-codingfinal.png');
}
let xpos = 0;
let ypos = 0;
let textspeedY = 3


function setup() {
  // put setup code here
createCanvas(515,800);
background(0,0,0);
}


function draw(){
  //womxn text image
  tint(255,128);
  womxntext.resize(503,115);
  image(womxntext,xpos,ypos);

  xpos = xpos;
  ypos = ypos + textspeedY;

  if (ypos > height - 115){
    textspeedY = -textspeedY;
  }

  if (ypos < 115){
    textspeedY = - textspeedY;
  }
}
