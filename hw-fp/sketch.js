let sonyas = [];
let sonyas_2 = []
let sprite_img;
let sprite_img_2;
let bg;

function preload() {
    sprite_img_2 = loadImage("sonya_2.png");
    sprite_img = loadImage("sonya.png");
    bg = loadImage("backdrop.jpg");
}


function setup() {
    createCanvas(windowWidth,windowHeight);
    background(bg);
     sonyas[0] = new Sonya(100, 100, sprite_img, 0);
    sonyas_2[1] = new Sonya_2(1015, 100, sprite_img, 1);
}

function draw() {
    background(bg);
   frameRate( 10 );
    for (let i = 0; i < sonyas.length; i++) {
        sonyas[i].frame();
          // text( "frame rate: " + fr, 10, 20 );
    }
    // for (let index = 0; index < sonyas_2.length; index++) {
    //     sonyas_2[index].frame();
    //       // text( "frame rate: " + fr, 10, 20 );
    // }

}
