var g = 0;

  function setup() {


   //Setting up the canvas
    createCanvas(windowWidth, 600);
      background( 'black');
}
  //Setting up draw
  function draw() {

    //Using for loop to create a slanted half grid of circles with a y ellipse placement for every x ellipse
      for(let y = 10; y <= height; y+= 15) {
        for(let x = 12; x <= width; x +=15) {
        // Getting rid of the fill and adding a random function to change stroke between colors on the greyscale.
        noFill();
        stroke(random(10,255));

        ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
        }


        }

      }
