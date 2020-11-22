class Ground{
    constructor(x,y,width,height,color){
        var staticOption = {isStatic: true};
        this.ground = Bodies.rectangle(x,y,width,height,staticOption);
        World.add(myWorld,this.ground);


        this.width = width;
        this.height = height;
        this.color = color;
    }
    display(){
        var position = this.ground.position


        rectMode(CENTER);
        fill(this.color);
        rect(position.x,position.y,this.width,this.height);
    }
}