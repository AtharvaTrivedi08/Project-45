class Missile {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      }
    this.w = width;
    this.h = height;
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.image = loadImage("assets/missile");
    this.animation = [this.image];
    };
    
    display(){
      if(keyIsDown(SPACE)){
        image(this.animation[index], 0, 0, 10, 10, options);
      }
      imageMode(CENTER);
      this.speed += 0.05;
    }
  } 
