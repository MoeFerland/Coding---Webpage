
let xpos = 1;
let ypos = 1;
let textspeedY = 9;
let textspeedY2 = 9;
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


  womxntext.resize(503,115);
  image(womxntext,xpos,ypos);

  ypos = ypos + textspeedY;

  if (ypos > height){
    textspeedY = -textspeedY;
  }

  if (ypos < 0){
    textspeedY =  -textspeedY;
  }

  //womxn text image black
womxnBLK.resize(503,115);
image(womxnBLK,xloc,yloc);

yloc = yloc + textspeedY2;

if (yloc > height){
  textspeedY = -textspeedY2;
}

if (yloc < 0){
  textspeedY =  -textspeedY2;
}

//ladybody image
image(ladybody,0, 0, width, height);
}
