  //declaring red value for bg
    let rcol = 184
  //declaring blue value for bg
    let bcol= 180
  //decaring green value for bg
    let gcol =160
  //setting up variable to for movement
    var moveD = 150

    var rc = floor( random(150) );
    var gc = floor( random(150) );
    var bc = floor( random(150) );

function setup(){
  //creating canvas
  createCanvas( windowWidth, 625);
//chose not to setup background here so I could create background effect in draw
}

function draw(){
  //declaring moveD to have value of moveD so it will move obects
  moveD = moveD + 1;

  //setting up walls to constrain teal ellipse
    let wall1 = 5 ;
    let wall2 = windowWidth - 200;
  //creating var to constrain teal ellipse
    let conE = constrain( moveD, wall1, wall2 );

  //setting up walls to constrain white ellipse
    let wall3 = 10 ;
    let wall4 = 450;

  //setting up var to constrain white ellipse
    let conO = constrain( moveD, wall3, wall4 );

  //Using var and map to create background color effect
     rcol = map( mouseX, 0, 1000, 0, 255);
  //setting background color using vars from above
     background( rcol, gcol, bcol);

  //Setting fill to color ellipse white
      fill( 'white' );
  //creating moving white oval
      ellipse( conO, 10, 200, 70);

  //creating moving teal circle to be placed below oval
  fill( 'teal');
  ellipse( conE, 46, 55, 55);


  fill( rc, gc, bc );
  ellipse( windowWidth/2, 400, 90, 90);
  stroke('white');




  stroke('white');
  for (var i=0; i<width; i++){
    var y = i%150;
    line ( 0, i, y , i);}

  stroke( 'teal');
  for (var i=0; i<width; i++){
    var y = i%200;
    line ( 0, i, y , i);}

    //translate( 900, 300);
    scale(10.0);
    for (var rl = 0; rl < 100; rl++) {
    var r = random(500);
    stroke(r * 3);
    point(r,r);
  }


}
