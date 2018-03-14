//Creating circleY variable to use for hair animation.
var circleY = -290;

  function setup() {


    //Setting up canvas
      createCanvas( 1300, 650 );
        background( 'rgb(96, 150, 156)' );
        translate( 325, 162.5);

//Nose
    strokeWeight(10);
      line(-200, -100, -160, 350);
      line(-160, 350, -140, 400);

///Head
        strokeWeight(2)
        fill( 'rgba(187, 124, 71, 0.81)' );
          rect(-500, - 200, 850, 700, 10);
//Eyebrow
            strokeWeight(20);
            stroke( 'rgb(0, 0, 0)' );
              line(-140, -120, 120, -140);
              line( 120, -140, 160, -132);
            strokeWeight(15);
              line(160, -132, 185, -120);
//Eyeball
          strokeWeight(2)
          fill('white');
          scale(2.0);
            ellipse( 0, 0, 130, 60);

        //I set the face as part of the background so I could draw over it.

  }

  function draw(){
   //Asigning value of circleY + 1 to circleY
    circleY = circleY + 1;
    translate( 325, 162.5);

    //Sun
     //Using width and height variables to place the Sun.
        fill('rgb(253, 255, 135)');
          ellipse( width/2, height/20, 300, 300);

    //Eye pupil
        strokeWeight(1);
        fill('black');
        scale(0.5);
          ellipse( 0, 0, 110);

   //Reflection in eye
        fill('white');
          rect(15, -30, 10, 14);

    //Starting sandbox
        push()

    //Creating eye animation using mouseX, and rotate variable.
        rotate(mouseX/ 100.0);
    // (This "rotate(mouseX/ 100.0);" code is based on an example in Getting Started with p5.js pg. 96 example 6-4)

        fill( 'rgb(34, 83, 36)' );

        triangle( 58, 20, 85, 85, 10, 75);
      fill( 'rgb(51, 101, 53)' );
        triangle(58, 20, 85, 50, 30, 75);

 //Ending sandbox
   pop();

 //Creating hair using circleY variable.
  fill('rgb(102, 22, 1)');

    ellipse(700, circleY, 90, 300 );
    ellipse(800, circleY, 90, 300 );
    ellipse(900, circleY, 90, 300 );

    //adding text using width and height function
      textSize(20);
        text("width: " + width, 1500, 840);
        text("height: " + height, 1500, 880);





  }
