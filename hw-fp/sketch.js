

let sonyas = [];
let sonya_img;
let bg = '3b17cc9';
let img;

function preload(){
  sonya_img = loadImage('sonya.png')
  img = loadImage('backdrop.jpg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
    sonyas[0] = new Sonya(100, 150, sonya_img, 0);
    sonyas[1] = new Sonya(1015, 100, sonya_img, 1);
     // image(sonya_img, 0, 0, );
}
  function draw() {
      background(img);
      for(let i = 0; i < sonyas.length; i++) {
        sonyas[i].frame();

      }


  }
