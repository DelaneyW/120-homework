function setup(){
  //Setting up canvas to draw my self-portrait on

  createCanvas( 600,600 )

  //promting background color
  background( 'rgb(36, 0, 54)');

  //placing everything in the center

    translate( 300, 300);
//Hair
  noStroke();
  fill( 'rgb( 33, 18, 1 )' );
  triangle( 0, 60, -110, 195, 100, 195);
  ellipse( 0, 60, 185, 255);

//Neck
  fill('rgb(204, 162, 137)');
  rect(-55, 105, 105, 200);

//Face
  fill('rgb(217, 164, 142)');
   ellipse( 0, 60, 155, 200 );

//Nose
  fill('rgb(230, 174, 150)');
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
  strokeWeight(13);
  stroke( 'rgb(0, 0, 0)');
  point( 32, 50);


    //Body
  noStroke();
  fill( 'rgb( 223, 184, 84 )');
  rect(-200, 180, 400, 295, 80);
}
