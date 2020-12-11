
let xpos = 1;
let ypos = 1;
let textspeedY = 1;
let womxntext;
let ladybody;
let womxnBLK;
let xloc = 1;
let yloc = 1;

  function preload(){
    //'womxn'text
   womxntext = loadImage('WOMXN-codingfinal.png');
    //lady body image
   ladybody = loadImage('Ladybody1.png');
    //'womxn' text black
   womxnBLK = loadImage('WOMXN-codingfinalBLACK.png');
}


function setup() {

createCanvas(515,800);
background(0,0,0);

}

function draw(){

  tint(255,128);
  womxntext.resize(503,115);
  image(womxntext,xpos,ypos);

  ypos = ypos + textspeedY;

  //womxn text image black

image(womxnBLK,xloc,yloc);

if (yloc > height){
  textspeedY = -textspeedY;
}

if (yloc < 0){
  textspeedY =  -textspeedY;
}

//ladybody image
image(ladybody,0, 0, width, height);
}
