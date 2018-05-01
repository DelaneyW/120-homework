
//Creating an aray called orbs
// Setting the number of orbs to 25.
let orbs = [];
const numOfOrbs = 25;

function setup() {
    // createCanvas(windowWidth, 800);
    createCanvas(windowWidth, 800);
    background('rgb(0, 0, 0)');

    let iX = 60;
    let iY = 60;
    for (let i = 0; i < numOfOrbs; i++) {
        orbs.push(new Orb(iX, iY));
        //Using method from class examle
        //To make sure the orbs start in different places.
        // This was extremely helpful, because before I'd let a more simple
        // for loop with out the iX, and IY varriables and it was very congested.


        iX += 50;
        if (iX > width) {
            iX = 30;
            iY += 50;
        }
    }
}

function draw() {


    for (let indx = 0; indx < orbs.length; indx++) {
        // applying the methods of orb
        orbs[indx].display();
        orbs[indx].move();
        orbs[indx].orbCheck(orbs, indx);
        orbs[indx].edgeCheck();


    }
}




class Orb {
    //Setting up the class Orb
    constructor(x, y, size) {
        this.color = 'gold';
        this.size = 20;
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
    }

    display() {
        push();
        //Setting frameRate to three
        frameRate(3);
        noFill();
        //Creating an ellipse w/ the positions posX, posY
        //W/ the this.color as the stroke color
        translate(this.posX, this.posY);
        stroke(this.color);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX  - 2;
        this.posY += this.deltaY  - 2;
    }

    edgeCheck() {
        //Using if loops to check if the orbs are within the canvas
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            ;
        }
        
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;

        }
    }


    orbCheck(otherOrbs, fndSlf) {
        //
        for (let o = 0; o < otherOrbs.length; o++) {
            // if n ! = fndSlf, check for intersecting of orbs
            if (o != fndSlf) {
                let d = dist(this.posX, this.posY, otherOrbs[o].posX, otherOrbs[o].posY);
                let comR = this.rad + otherOrbs[o].rad;

                if (d <= comR) {
                    this.deltaX *= random(-5, 1);
                    this.deltaY *= this.deltaY ++;
                    this.size = this.size + 15;
                    this.color = ('white');

}
            }
            //Creating if statement saying that if size is greater than 60
            //then place a red ellipse in the lower right corner that
            //because of it intersecting w/ other orbs will grow to create
            //a pattern of circles through out the canvas
            if(this.size > 60){
              this.color = ('red');
               this.posX = windowWidth - 10;
               this.posY = windowHeight - 10 ;

            }
        }
    }
}
