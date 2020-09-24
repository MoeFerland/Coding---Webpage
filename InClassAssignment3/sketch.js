
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(100,100,70);

let flegreiReg;
  function preload() {
    flegreiReg = loadFont('43886 copy.otf');

}

function draw() {
  //Put draw code here
for (let xpos = 0; xpos < random(0,width, xpos = xpos + 10)){
  fill(0,0,255);
  rect(xpos, xpos, 10);}
}
