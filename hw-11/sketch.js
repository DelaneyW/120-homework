

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
    //Creating a quad shape
    //quad( 10, 10, 40,40, 10, 40, 10, 40);
    //Creating a triangle

    quad( 10, 10, 50, 50, 50, 10, 10, 50);
    triangle( 50, 10, 50, 50, 90, 25);
  }

  class Fish {
    constuctor(x,y,head,clr){
      this.x = x;
      this.y = y;
      this.head = head
      this.color = clr;
      

    }


  }
