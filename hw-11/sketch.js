  //Creating object
//temp got rid of mouse x mouse y crazy biz to test basic function
  // let fishy = new Fish( mouseX + 10, mouseX + 50, mouseX + 90, mouseX + 25, 'orange');
  let fish = new Fish(10, 50);

// Declare the setup function
function setup() {

    // create a canvas 600px wide and 400px high
    createCanvas( windowWidth, 400 );

    // color the background 'pink'
    background('rgb(94, 147, 131)' );
}

  function draw(){
    //Getting rid of stroke
    //noStoke();
    fish.show();


    // quad( 10, 10, 50, 50, 50, 10, 10, 50);
    // triangle( 50, 10, 50, 50, 90, 25);
  }
    class Fish {
  // constuctor(x,y,head_1, head_2,clr){
    constructor( x, y) {
      //x = 10, y = 50
      //head_1 = 90, head_2 = 25
      this.x = 10;
      this.y = 50;
      this.head_1 = 90;
      this.head_2 = 25;
      this.color = 'orange';

        }
    show() {
      // push();

        noStroke();
        //Creating a quad shape
        //Creating a triangle
      //Asigning shapes to Fish
      fill( this.clr );
      quad( this.x, this.x, this.y, this.y, this.y, this.x, this.x, this.y);
      //triangle( y, x, y, y, head_1, head_2);




      // pop();

    }

    follow() {
      this.x = mouseX + 10;
      this.y = mouseY + 50;
}
}
