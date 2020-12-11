//loading font into sketch
let narlyFONT;
  function preload() {
    narlyFONT = loadFont('NarlyOT_Outline_coding.otf');
}

let womxntext;
  function preload(){
   womxntext = loadImage('WOMXN-codingfinal.png');
}



function setup() {
  // put setup code here
createCanvas(515,800);
background(0,0,0);


//womxn text iamge
blendMode(SCREEN);
tint(255,128);
womxntext.resize(470,115);
image(womxntext,0,0);

}
