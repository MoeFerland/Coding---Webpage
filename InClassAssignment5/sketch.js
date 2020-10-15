let yummybackground;

var gif_loadImg, gif_createImg;

function preload(){
  gif_loadImg = loadImage('https://i.imgur.com/nlWiFq8.gif');
  gif_createImg = createImg('https://i.imgur.com/nlWiFq8.gif');
}

function preload(){
  yummybackground = loadImage('https://i.imgur.com/fvTFr2O.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {

 image(yummybackground,0,0, width, height);

 imageMode(CENTER);
 image(gif_loadImg, width/2, height/2);

 gif_createImg.position(width/2, height/2);

}
