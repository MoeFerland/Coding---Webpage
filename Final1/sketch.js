
let xpos = 0;
let ypos = 0;
let textspeedY = 3
let womxntext;
let ladybody;

//"womxn" text
  function preload(){
   womxntext = loadImage('WOMXN-codingfinal.png');
}
//ladybody 1
  function preload(){
    ladybody = loadImage('Ladybody1.png');
  }

function setup() {

createCanvas(515,800);
background(0,0,0);

//insert ladybody image
image(ladybody,0,0,width,height);

}

function draw(){
  //womxn text image
  tint(255,128);
  womxntext.resize(503,115);
  image(womxntext,xpos,ypos);

  xpos = xpos;
  ypos = ypos + textspeedY;

  if (ypos > height - 115){
    textspeedY = - textspeedY;
  }

  if (ypos < 115){
    textspeedY = - textspeedY;
  }
}
