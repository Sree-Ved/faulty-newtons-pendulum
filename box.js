class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
      }
      display(){
       var pos = this.body.position
        push();
        translate(mouseX,mouseY);
        rectMode(CENTER)
        fill("red");
        stroke("red")
        strokeWeight(4)
        rect(mouseX,mouseY,this.width,this.height);
        pop();
      }
}