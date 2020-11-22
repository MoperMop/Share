class Bird{
    constructor(color){
        var bouncy = {'restitution': 0.4};


        this.bird = Bodies.circle(mouseX,mouseY,25,bouncy);
        World.add(myWorld,this.bird);


        this.radius = 25;
        this.color = color;
    }
    display(){
        var position = this.bird.position;var angle = this.bird.angle;
        

        position.x = mouseX;
        position.y = mouseY;
        

        push();
        ellipseMode(RADIUS);
        translate(position.x,position.y);
        fill(this.color);
        rotate(angle);
        circle(0,0,this.radius);
        pop();
    }
}