class Box{
    constructor(x,y){
        this.box = Bodies.rectangle(x,y,75,75);
        World.add(myWorld,this.box);


        this.width = 75;
        this.height = 75;
        this.color = "brown";
    }
    display(){
        var position = this.box.position;var angle = this.box.angle;

        push();
        rectMode(CENTER);
        translate(position.x,position.y);
        fill(this.color);
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
    }
}