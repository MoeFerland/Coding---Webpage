let roots;
let upclose;
let flowervertical;
let flowerhorizantle;

function preload(){
  //loading roots
  roots = loadImage('https://i.imgur.com/hu9yVeY.jpg');

  //loading upclose image
  upclose = loadImage('https://i.imgur.com/kwJvNWF.jpg');

  //loading vertical string of flowers
  flowervertical = loadImage('https://i.imgur.com/xgWjoCA.jpg');

  //laoding horizantle string of flowers
  flowerhorizantle = loadImage('https://i.imgur.com/UhclACt.jpg');

}
function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
background(0,0,0);



}

function draw(){


  //ROOTS image editing
  blendMode(MULTIPLY);
  roots.resize(width, height);
  image(roots,0,0);

      //pieces of roots
       let partIMG6 = get(50,50,1000,50);

       blendMode(SCREEN);
       image(partIMG6,100,100);





  //VERTICAL image editing
  blendMode(SCREEN);
  flowervertical.resize(700,1000);
  image(flowervertical,200,0);

      //pieces of flowervertical
       let partIMG1 = get(800,0,30,1000);
       let partIMG2 = get(800,0,500,500);
       let partIMG3 = get(700,700,40,1000);
       blendMode(BURN);
       image(partIMG1,500,10);

       blendMode(DODGE);
       image(partIMG2,550,200);

       blendMode(DODGE);
       image(partIMG3,3000, 200);




  // HORIZANTLE image editing
  blendMode(SCREEN);
  flowerhorizantle.resize(width, height);
  image(flowerhorizantle,0,0);

      //pieces of flowerhorizantle
       let partIMG4 = get(1700,0,60,1000);
       let partIMG7 = get(120,280,170,100);

       blendMode(SCREEN);
       partIMG7.resize(250,170);
       tint(255,0,0)
       image(partIMG7,5,400);

       blendMode(SCREEN);
       noTint();
       image(partIMG4, 1000, 200);

       //repeating bud sequences
       for(let i = 930; i < width; i = i + 30){
         blendMode(SOFT_LIGHT);
         image(partIMG7,i, 460);
       }

       for(let m = 750; m < 850; m = m + 30){
         blendMode(SCREEN);
         image(partIMG7,m, 600);
       }

       for(let j = 10; j < 300; j = j + 40){
         for(let k = 20; k < 250; k = k + 15){
           blendMode(LIGHTEST);
           image(partIMG7,j,k);

         }
       }





  //UPLCLOSE iamge editing
  blendMode(BURN);
  upclose.resize(width,height);
  image(upclose,0,0);

      //pieces of upclose
      let partIMG5 = get(1000,0,35,1000);

      blendMode(BURN);
      image(partIMG5,1000,200);

      blendMode(ADD);
      image(partIMG5, 1200,10);




}
