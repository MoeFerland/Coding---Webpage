
let xpos = 1;
let ypos = 1;
let textspeedY = 3;
let womxntext;
let ladybody;
let womxnBLK;
let xloc;
let yloc;

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
  //womxn text image
  tint(255,128);
  womxntext.resize(503,115);
  image(womxntext,xpos,ypos);

  ypos = ypos + textspeedY;

//ladybody image
image(ladybody,0, 0, width, height);

//'womxn' black text
womxnBLK.resize(503,115);
image(womxnBLK,)

yloc = yloc + textspeedY;

if (yloc > height - 115){
  textspeedY = -textspeedY;
}

if (yloc < 0){
  textspeedY =  -textspeedY;
}

}
