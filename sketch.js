let img;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  img= loadImage('80spattern.jpg');

}

function draw() {
  image(img,0,0,windowWidth,windowHeight);

}
