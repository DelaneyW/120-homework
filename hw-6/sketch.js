 //let rand1= random( 20, 600);
//  var coTr = map( mouseX, 0, 1200, 0, 183);
 var moveD = 150
function setup(){
   createCanvas( windowWidth, 625);
    background( 'rgb(184 , 105, 105)');

}

function draw(){

  moveD = moveD + 1;

  fill( 'white' );
  ellipse( moveD, 10, 200, 70);

  fill( 'teal');
  ellipse( moveD, 46, 55, 55);
  let red = floor( random(150) );
    let green = floor( random(150) );
    let blue = floor( random(150) );
    //fill( red, green, blue );
  ellipse( windowWidth/2, windowHeight/2, 90, 90);
  stroke('white');




  stroke('white');
  for (var i=0; i<width; i++){
    var y = i%150;
    line ( 0, i, y , i);}

  stroke( 'teal');
  for (var i=0; i<width; i++){
    var y = i%200;
    line ( 0, i, y , i);}
}
