 //let rand1= random( 20, 600);
//  var coTr = map( mouseX, 0, 1200, 0, 183);
  let rcol = 184
 //let pos1 = windowWidth - 80
 bcol= 180
 gcol =160

 var moveD = 150
function setup(){



   createCanvas( windowWidth, 625);


}

function draw(){
     rcol = map( mouseX, 0, 1000, 0, 255);
  moveD = moveD + 1;
  background( rcol, gcol, bcol);
  fill( 'white' );
  ellipse( moveD, 10, 200, 70);

  fill( 'teal');
  ellipse( moveD, 46, 55, 55);
  let red = floor( random(150) );
    let green = floor( random(150) );
    let blue = floor( random(150) );
  fill( red, green, blue );
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
