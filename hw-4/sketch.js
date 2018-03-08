function setup(){
  //Setting up canvas to draw my self-portrait on

  createCanvas( 600,600 )

  //promting background color
  background( 'rgb(58, 28, 73)');

  //placing everything in the center

    translate( 300, 300);
//Hair
  noStroke();
  fill( 'rgb( 33, 18, 1 )' );
  triangle( 0, 60, -110, 195, 100, 195);
  ellipse( 0, 60, 185, 255);

//Neck
  fill('rgb(203, 158, 131)');
  rect(-55, 105, 105, 200);

//Face
  fill('rgb(217, 164, 142)');
   ellipse( 0, 60, 155, 200 );

//Nose
  stroke('rgb(204, 142, 114)');
  fill('rgb(220, 172, 147)');
  triangle( 0, 25, 15, 85, -15, 85);

 //Lips
  stroke( 'rgb(215, 94, 86)');
  fill( 'rgb(215, 94, 86)');
 triangle( -20, 120, 25, 120, 0, 130 );

//Eye brows
stroke('rgb( 33, 18, 1 )' );
 strokeWeight( 7 );
   line(15, 25, 55, 26);
  line(-15, 25, -55, 26);
//Eyes
  strokeWeight(20);
  stroke( 'rgb(0, 0, 0)');
  point( 32, 50);
  point( -32, 50);
//Eyeballs
  strokeWeight(18);
  stroke( 'rgb( 255, 255, 255)');
  point( 32, 50);
  point( -32, 50);
//Eyecolor
  strokeWeight(12);
  stroke( 'rgba(15, 87, 24, 0.82)');
  point( 32, 50);
  point( -32, 50);
//Pupils
  strokeWeight(6);
  stroke( 'rgb(0, 0, 0)');
  point( 32, 50);
  point( -32, 50);
//Glasses
 noFill();
 rect( 17, 35, 43, 40, 5);
 rect( -58, 35, 43, 40, 5);
 line(-25, 35, 25, 35);

    //Body
  noStroke();
  fill( 'rgb( 223, 184, 84 )');
  rect(-200, 180, 400, 295, 80);
}
