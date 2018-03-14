
var mvRec;
mvRec = mvRec + 1;



  function setup() {
    //Assigning coShift to shift color in background


    //Setting up canvas making it match window w+h
      createCanvas( 1300, 650 );

  }

  function draw(){

    //coShift = coShift + 1;
      background( 'rgb(165, 197, 222)');
      translate( 600,325);
      // Leaf
      fill( 'rgb(118, 119, 117)');
      smooth();
        scale(1.5)
      strokeWeight(6)
      stroke( 'rgb(0, 0, 0)');

 //Ending sandbox
   pop();

        arc( 50, 160, 80, 80, 0, QUARTER_PI + mouseX);
 //Creating hair using circleY variable.

        ellipse( mouseX, mouseY, -200 );
        rect( mvRec, 0, 80, 34);






  }
