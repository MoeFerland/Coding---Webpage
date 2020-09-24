
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(100,100,70);

}

function draw() {
  //Put draw code here
for (let counter = 0; counter < width; counter = counter + 10){
  fill(0,0,255);
  rect(counter,counter, 10);
}
}
