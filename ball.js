class Ball {
    constructor(x,y,radius){
        var options={
            density: 1,
            frictionAir:0.00199
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        heroImage = loadImage("images/Superhero-01.png");
        BackImage = loadImage("images/GamingBackground.png");
        monsterImage = loadImage("images/Monster-01.png");

       
        World.add(world,this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      

      push();
      image(BackImage,1,1,1400,800);
      image(monsterImage,1100,300,300,300);
      image(heroImage,pos.x-140,pos.y-100,250,200);
      translate(pos.x,pos.y)

      rotate(angle)
      //ellipseMode(RADIUS);
     // ellipse(0,0,this.radius,this.radius);
      pop();
    }
}