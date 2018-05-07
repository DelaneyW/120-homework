
  class Sonya {
    constructor(x, y, img, orientation){
        this.pos = {
            x: 80,
            y: 130

        };

        this.orientation = orientation;

        // A reference to a pre-loaded image in memory
        this.image = sprite_img;
        // The speed at which to work through subrectangles
        this.speed = 5;
        // The size of our subrectangles

      // corresponds to sprite size
        this.m_speed = 5;
        this.size = {
            w: 180,
            h: 400
        };
        // The number of the sprite image we are on
        this.sprite_num = 0;
        // The top-left corner of each sub-rectangle
        this.subRect = [
            [0, 0],//1
            [200, 0],//2
            [400, 0],//3
            [600, 0],//4
            [800, 0],//5
            [1000, 0],//6
            [1200, 0],//7
            [1400, 0],//8
            [1600, 0],//9
            [1800, 0],//10
            [2000, 0],//11
            [2200, 0],//12
            [2400, 0],//13
            [2600, 0],//14
            [2800, 0]
        ];
      }

       frame() {
           this.display();
           this.animate();
       }

       display() {
           push();

           translate(this.pos.x, this.pos.y);

           if (this.orientation === 0) {
               scale(1,1);
           } else if (this.orientation === 1) {
               scale(-1,1);
           }

           image(
               // reference to image in memory
               this.image,
               // if(this.m_speed = 5) {
               //   this.image = sprite_img;
               //
               // }
               // placement of image on canvas
               // (handled by translate())
               0, 0,
               // The display size of the image
               this.size.w/2, this.size.h/2,
               // The top left corner of the sub rectangle
               this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],
               // the size of the subrectangle
               this.size.w, this.size.h


           );


           pop();
       }

       animate() {
           // update the sprite num
           // This adjusts the subrectangle positions
           // if(this.pos.x < windowWidth) {
           this.sprite_num ++;
           this.sprite_num %= 15;

              // if(this.m_speed = 5){
              //   ellipse(50,90,200);
              // }

             if ( this.pos.x > width || this.pos.x < 0 ) {
               this.m_speed = this.m_speed * -1;
               this.image = sprite_img_2;                      }
                this.pos.x = this.pos.x + this.m_speed;
                 }


             // this.pos.x ++;
            // else{
             // this.image = sprite_img_2;



           }
           // if(this.pos.x = windowWidth + 10){
           //   this.pos.x = this.pos.x * -1;
           //
           // }
           // if(mouseIsPressed == true){
           //   i = i ++;
           //
           // }
