
let array_1 = [50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450];
let colA = [222, 250, 200, 255, 244, 234, 204, 209, 225, 237, 249, 212, 240, 211, 230, 222];

//creating vars for lines
let lX = 100; let lY = 100; let lX_2 = lX + 100; let lY_2 = lX + 100;
function setup(){
  createCanvas(windowWidth, 600);
  background('black');


}

  function draw(){


//Using an array to create a line of points
 for (let i = 0; i < 16; i++) {

   strokeWeight(10);
   rotate(mouseX/ 100.0);
   point(array_1[i], 200);

   stroke(colA[i]);
   //using stripes function
   stripes(100, 0, 130, 30);
   stripes(160, 0, 165, 30);
   stripes(50, 0, 60, 30);
   stripes(600, 0, 660, 30);
}

function stripes(lX, lY, lX_2, lY_2){
  line(lX,lY, lX_2, lY_2);
}

//for (var rl = 0; rl < 400; rl++) {
//  var rl = random(500);
//  stroke(rl * 10);
//  point(rl,rl);

}
