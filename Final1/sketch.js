
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

tint(255,255,255);
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
image(womxnBLK,xloc,500);



//ladybody image
image(ladybody,0, 0, width, height);
}
