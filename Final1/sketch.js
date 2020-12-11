
let xpos = 1;
let ypos = 1;
let textspeedY = 3;
let womxntext;
let ladybody;


  function preload(){
    //'womxn'text
   womxntext = loadImage('WOMXN-codingfinal.png');
    //lady body image
   ladybody = loadImage('Ladybody1.png');
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
}
