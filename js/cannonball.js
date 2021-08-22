class cannonball{
    constructor(x, y, width) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
             isStatic:false
        }
        
    this.image = loadImage("assets/cannonball.png");
    this.body = Bodies.rectangle(x, y, this.width/2, this.width/2, options);
        
        this.width = width;
       
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display() {
      
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,  this.width/2, this.width/2);
       
    }
}