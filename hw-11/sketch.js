//Setting up shape array
let shape = [];
//setting number of numOfShapes
let numOfShapes = 15;

function setup() {
  createCanvas(800,400);
  //Using for loop to create shapes
  for (let i = 0; i < numOfShapes; i++) {
    shape.push(new Shape());
  }
}

function draw() {
  background('rgb(96, 156, 150)');
  for (var i = 0; i < shape.length; i++) {
    shape[i].frame();
  }
}
//Creating a class called shape
//declaring the methods
class Shape {
  constructor(x, y, scale) {
    this.x = 10;
    this.y = 50;
    this.moveX = random(-8, 3);
    this.moveY = random(-2, 1);
  }

  frame() {
    this.display();
    this.move();
  }

  display() {
    push();
    translate(this.posX, this.posY);
    scale(this.scale, this.scale);

    fill(random(0,150));
    stroke('rgb(231, 164, 33)');
    quad( this.x, this.x, this.y, this.y, this.y, this.x, this.x, this.y);
    triangle( this.y, this.x, this.y, this.y, this.y + this.y * 0.8, this.y/2);

    // if(this.x>= width){
    //   ellipse(20,30, 20);
    //   translate(0,0);
    // }

    pop();


  }

  move() {

    this.x += this.moveX;

    if (this.x >= width/3 || this.x <= 0) {
      this.moveX = this.moveX * -1;
    } else if (this.y >= height/2|| this.y <= 0) {
      this.moveY = this.moveY * -1;
    }
  }
}
