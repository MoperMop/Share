class Pig{
    constructor(x,y){
        this.pig = Bodies.rectangle(x,y,50,45);
        World.add(myWorld,this.pig);


        this.width = 50;
        this.height = 45;
        this.color = "lightgreen";
    }
    display(){
        var position = this.pig.position;var angle = this.pig.angle;

        push();
        rectMode(CENTER);
        translate(position.x,position.y);
        fill(this.color);
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
    }
}