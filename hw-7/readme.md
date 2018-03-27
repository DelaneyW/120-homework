Delaney Wascherol,




# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing


///Creating object ball with parameters

 . let ball = {};

 .ball.width = 40;//Setting width at 40

 .ball.x = 10;//position variables

 .ball.y = 10;

 .ball.delta_x = 1;//confine ball variables

 .ball.delta_y = 1;

 .ball.scale_x = 1;//Scale variables
 .ball.scale_y = 1;

function setup() {

  createCanvas(windowWidth, 400);

  //Creating and setting background to white


    background(255);
}



function draw() {


 // This links the values of x and y to the delta vars

    ball.x += ball.delta_x * ball.scale_x;


    ball.y += ball.delta_y * ball.scale_y;

//Using if function to determine that if the ball's possition is > = to width or if the position is <= 0 then the delta is multiplied by -1.


//This is how the ball stays in frame


    if (ball.x >= width || ball.x <= 0) {

        ball.delta_x = -1 * ball.delta_x;

//Same process just with y variables
// Keeps ball from leaving canvas vertically


    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }


  //Setting fill and creating ball with

  variables from above.

    fill(255);

    ellipse(ball.x, ball.y, ball.width,

    ball.width);

}
//This changes the path of the ball when mouse is pressed

function mousePressed() {

    ball.scale_x = map(mouseX, 0, width, 0.5, 10);

    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}


## How did you alter the sketch?

I set up two if functions inside the mousePressed functon to determine the color variation of the cicle based on the location of the circle when mouse is pressed.
