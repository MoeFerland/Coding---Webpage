
let xpos = 1;
let ypos = 1;
let textspeedY = 3;
let womxntext;
let ladybody2;
let womxnBLK;


  function preload(){
    //'womxn'text
   womxntext = loadImage('WOMXN-codingfinalBLUE.png');
   //lady body 2
   ladybody2 = loadImage('Ladybody2.png');
    //'womxn' text black
   womxnBLK = loadImage('WOMXN-codingfinalBLACK.png');
}


function setup() {

createCanvas(515,800);
background(0,0,0);



}

function draw(){
  //womxn text image
  womxntext.resize(500,115);
  image(womxntext,xpos,ypos);

  ypos = ypos + textspeedY;

image(womxnBLK,0,300, 500, 115);

//ladybody image
image(ladybody2,0, 0, width, height);


}
