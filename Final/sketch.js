//loading font into sketch
let narlyFONT;
  function preload() {
    narlyFONT = loadFont('NarlyOT_Outline_coding.otf');
}

let womxntext;
  function preload(){
   womxntext = loadImage('https://github.com/MoeFerland/Coding---Webpage/blob/69941579feb91ac0748240e0a4b6477b341b464c/Final/WOMXN-codingfinal.png');
}



function setup() {
  // put setup code here
createCanvas(1000, 2500);
background(0,0,0);

}

function draw(){
  image(womxntext,100,100);
}
