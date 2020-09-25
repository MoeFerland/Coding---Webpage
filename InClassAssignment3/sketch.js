
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(0,0,255);

}

function draw() {
  //Put draw code here
for (let xpos = 0; xpos < width; xpos = xpos + 10){
let rCol = 0; rCol < 255; rCol = rCol + 5
  fill(rCol,50,50);
  rect(xpos,xpos, 10);

}
}
