let xposList = [100,150,200,250,300,350,400,450,500];
let yposList = [100,100,100,100,100,100,100,100,100];
let sizeList = [35,35,35,35,35,35,35,35,35];
let yspeedList = [1,2,3,4,5,4,3,2,1];
let xspeedList = [1,2,3,4,5,4,3,2,1];
let visiblecircle = [1,1,1,1,1,1,1,1,1];


function setup() {
createCanvas(windowWidth, windowHeight);

} //end setup

function draw() {
  background(255,204,246);

  for(let i = 0; i < xposList.length; i = i + 1){

    if(visiblecircle[i] === 1){

    fill(225, 173, 1);
    circle(xposList[i], yposList[i], sizeList[i]);

                 } // close visiblecircle check

      xposList[i] = xposList[i] + xspeedList[i];
      yposList[i] = yposList[i] + yspeedList[i];

    if(xposList[i] > width){
      xspeedList[i] = -xspeedList[i];
    }

    if(xposList[i] < 0){
      xspeedList[i] = -xspeedList[i];
    }

    if(yposList[i] > height){
      yspeedList[i] = -yspeedList[i];
    }

    if(yposList[i] < 0){
      yspeedList[i] = -yspeedList[i];
    }

    // makes circle disappear
    if(mouseIsPressed & dist(mouseX, mouseY, xposList[i], yposList[i]) < sizeList[i]/2){
        visiblecircle[i] = 0;
    }
           //adding stage check
           let stagecheck = 0;
              for(let i = 0; i < xposList.length; i = i +1){
              stagecheck = stagecheck + visiblecircle[i];
                                                           }

    // NEXT STAGE IN GAME
    if(stagecheck === 0){
         for(let i = 0; i < xposList.length; i = i + 1){
           visiblecircle[i] = 1;

           //change in xspeed
           if(xspeedList[i] > 0){
             xspeedList[i] = xspeedList[i] + 1;
                    }
           else{
             xspeedList[i] = xspeedList[i] - 1;
                    }

          // change in yspeed
          if(yspeedList[i] > 0){
            yspeedList[i] = yspeedList[i] + 1;
                    }
          else{
            yspeedList[i] = yspeedList[i] - 1;
                    }

            }// end loop

            }// end if statement for NEXT STAGE



            } //end loop for first stage

} //end draw
