class Box extends BaseClass {
    constructor(x, y, width, height){
      var options = {

        restitution :0.4,
        friction :0.0,
        //isStatic:true
      }
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");

      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
  
    display(){
      console.log(this.body.speed);
      if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
      }
    }

  score() {
    if(this.visibility<0 && this.visibility >-105){
      score++;
    }

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    }
  };
  