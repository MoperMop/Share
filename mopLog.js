class Log{
    constructor(x,y,height,angle){
        this.log = Bodies.rectangle(x,y,20,height);
        World.add(myWorld,this.log);
        Matter.Body.setAngle(this.log,PI/180*angle);


        this.width = 20;
        this.height = height;
        this.color = "brown";
    }
    display(){
        var position = this.log.position;var angle = this.log.angle;

        push();
        rectMode(CENTER);
        translate(position.x,position.y);
        fill(this.color);
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
    }
}