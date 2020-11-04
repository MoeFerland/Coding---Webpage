let yummybackground;
let gif;


function preload(){
   //background image
   yummybackground = loadImage('https://i.imgur.com/fvTFr2O.png');

   //loading gif
   gif = loadImage('https://i.imgur.com/nlWiFq8.gif');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

 imageMode(CORNER);
 background(yummybackground);

       //gif
 imageMode(CENTER)
 image(gif, width/2, height/2, 600, 600);

}
