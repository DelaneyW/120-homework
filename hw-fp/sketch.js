

let sonyas = [];
let sonyas_2 = []
let sprite_img;
let sprite_img_2;
let bg;
  let col = 255;
//Loading sprite sheets and a mountain back drop.
function preload() {
    sprite_img_2 = loadImage("sonya_2.png");
    sprite_img = loadImage("sonya.png");
    bg = loadImage("backdrop_m.png");

}


function setup() {
    createCanvas(windowWidth,windowHeight);
    //Setting background to white
    background('white');
      //Conecting arrays to classes
     sonyas[0] = new Sonya(100, 100, sprite_img, 0);
    sonyas_2[1] = new Sonya_2(1015, 100, sprite_img, 1);


}
function draw() {
  //Creating random blue value
  b_col = random( 140, 200);
  //Using a rectangle as the sky
  fill( 120, 145, b_col);
  rect(0,0 , windowWidth, windowHeight/2);
  //Setting background
    background(bg);

   frameRate( 4 );
    for (let i = 0; i < sonyas.length; i++) {
        sonyas[i].frame();

    }

}
