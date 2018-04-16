// create a variable for the fish object
let fish = [20, 50, 80, 200];

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 400);

    // create a new fish object of class type Fish

    for(let indx = 0; indx < 4; indx++){
    fish[indx] = new Fish(10, 50, 50, 'orange');
}
// }

function draw() {
       // color the background aqua
      background('rgb(94, 147, 145)' );

      for (let indx = 0; indx < 4; indx++) {
            fish[indx].move();
            fish[indx].display();

    // fish.display();
    // fish.move();
    // fish.edgeCheck();

  //  fish.display();
}

class Fish {
    constructor(x, y, size, color) {
        this.color = color;
        this.size = size;
        this.x = x;
        this.y = y;
        this.pos = mouseX

    }

    display() {
        push();
        // remove the balls outer stroke
        noStroke();
        // set the balls fill color
        fill(this.color);
        // set the position of the ball
        translate(mouseX, mouseY);


        quad( this.x, this.x, this.y, this.y, this.y, this.x, this.x, this.y);
        triangle( this.y, this.x, this.y, this.y, this.y + this.y * 0.8, this.y/2);
        pop();


    }
}
}
}
//   //Creating object
// //temp got rid of mouse x mouse y crazy biz to test basic function
//   // let fishy = new Fish( mouseX + 10, mouseX + 50, mouseX + 90, mouseX + 25, 'orange');
//   let fish = new Fish(10, 50);
//
// // Declare the setup function
// function setup() {
//
//     // create a canvas 600px wide and 400px high
//     createCanvas( windowWidth, 400 );
//
//     // color the background 'pink'
//     background('rgb(94, 147, 131)' );
// }
//
//   function draw(){
//     //Getting rid of stroke
//     //noStoke();
//     fish.show();
//
//
//     // quad( 10, 10, 50, 50, 50, 10, 10, 50);
//     // triangle( 50, 10, 50, 50, 90, 25);
//   }
//     class Fish {
//   // constuctor(x,y,head_1, head_2,clr){
//     constructor( x, y) {
//       //x = 10, y = 50
//       //head_1 = 90, head_2 = 25
//       this.x = 10;
//       this.y = 50;
//       this.head_1 = 90;
//       this.head_2 = 25;
//       this.color = 'orange';
//
//         }
//     show() {
//       // push();
//
//         noStroke();
//         //Creating a quad shape
//         //Creating a triangle
//       //Asigning shapes to Fish
//       fill( this.clr );
//       quad( this.x, this.x, this.y, this.y, this.y, this.x, this.x, this.y);
//       //triangle( y, x, y, y, head_1, head_2);
//
//
//
//
//       // pop();
//
//     }
//
//     follow() {
//       this.x = mouseX + 10;
//       this.y = mouseY + 50;
// }
// }
