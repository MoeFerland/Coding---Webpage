let img;
let flegreiReg;
  function preload() {
    flegreiReg = loadFont('43886.otf');
  }
//ball movement
let xpos = 60;
let ypos = 0;
let ballspeedY = 5

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

  img= loadImage('80spattern.jpg');


}

function draw() {

image(img,0,0,1000,1000);

//HELLO
textFont(flegreiReg);
fill(205,92,92);
textSize(150);
text('HELL   .',80,300,);

//ball
noStroke();
circle(xpos,ypos,120);
fill(205,92,92);

   ypos = ypos + ballspeedY;

   if (ypos > height){
     ballspeedY = - ballspeedY;
   }

   if (ypos < 0){
     ballspeedY = - ballspeedY;
   }


}
