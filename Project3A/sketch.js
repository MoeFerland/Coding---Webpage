let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

let offset;

function setup() {
createCanvas(windowWidth,windowHeight);
background(0,0,0);
offset = 0.0;

}

function draw() {

//pink
x1 = noise(offset)* width;
x2 = noise(offset + 5)* width;
x3 = noise(offset + 10)* width;
x4 = noise(offset + 15)* width;

y1 = noise(offset + 20)* height;
y2 = noise(offset + 25)* height;
y3 = noise(offset + 30)* height;
y4 = noise(offset + 35)* height;

noFill();
stroke(255,0,144,2);
strokeWeight(2);
strokeCap(ROUND);
bezier(x1,y1,x2,y2,x3,y3,x4,y4);

offset = offset + 0.01;


//blue
x1 = noise(offset)* 1000;
x2 = noise(offset + 3)* 1000;
x3 = noise(offset + 6)* 1000;
x4 = noise(offset + 9)* 1000;

y1 = noise(offset + 12)* height;
y2 = noise(offset + 15)* height;
y3 = noise(offset + 18)* height;
y4 = noise(offset + 21)* height;

noFill();
stroke(17,0,255,2);
strokeWeight(2);
strokeCap(ROUND);
bezier(x1,y1,x2,y2,x3,y3,x4,y4);

offset = offset + 0.01;



//yellow
x1 = noise(offset)* 2000;
x2 = noise(offset + 4)* 2000;
x3 = noise(offset + 8)* 2000;
x4 = noise(offset + 12)* 2000;

y1 = noise(offset + 16)* height;
y2 = noise(offset + 20)* height;
y3 = noise(offset + 24)* height;
y4 = noise(offset + 28)* height;

noFill();
stroke(255,255,3,0.7);
strokeWeight(2);
strokeCap(ROUND);
bezier(x1,y1,x2,y2,x3,y3,x4,y4);

offset = offset + 0.01;

}
