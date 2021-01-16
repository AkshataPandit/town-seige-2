class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.4,
        'friction':0.0
        //'density':1.0
    }
    this.width = 30;
    this.height = 40;
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.image=loadImage("image/box.jpg")
    this.visibility=255;
    
    World.add(world, this.body);
  }

  
  display(){
    
  if(this.body.speed>4)  {
    push();
    this.visibility-=5;
    tint(this.visibility,255);
    image(this.image,0,0,this.width,this.height);
    pop();
    World.remove(world,this.body)
    
  }
  else{
    

    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}
};
