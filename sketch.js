var myEngine, myWorld, box1, box2, box4, box5, box6, box7, box8, box9, ground, pig1, pig2, pig3, pig4, pig5, pig6, log1, log2, log3, log4, log5, log6, bird;
const Engine = Matter.Engine; const World = Matter.World; const Bodies = Matter.Bodies;

function setup() {
  createCanvas(windowWidth,windowHeight);
  

  myEngine = Engine.create();
  myWorld = myEngine.world;


  box1 = new Box(width/2-100,height-75);
  box2 = new Box(width/2+100,height-75);
  box3 = new Box(width/2-300,height-75);
  box4 = new Box(width/2+300,height-75);
  box5 = new Box(width/2,height-185);
  box6 = new Box(width/2-200,height-185);
  box7 = new Box(width/2+200,height-185);
  box8 = new Box(width/2-100,height-295);
  box9 = new Box(width/2+100,height-295);

  log1 = new Log(width/2,height-130,190,90);
  log2 = new Log(width/2-200,height-130,190,90);
  log3 = new Log(width/2+200,height-130,190,90);
  log4 = new Log(width/2-100,height-230,190,90);
  log5 = new Log(width/2+100,height-230,190,90);
  log6 = new Log(width/2,height-330,190,90);

  pig1 = new Pig(width/2,height-70);
  pig2 = new Pig(width/2-200,height-70);
  pig3 = new Pig(width/2+200,height-70);
  pig4 = new Pig(width/2-100,height-165);
  pig5 = new Pig(width/2+100,height-165);
  pig6 = new Pig(width/2,height-260);

  bird = new Bird("red");

  ground = new Ground(width/2,height-25,width*3,50,"limegreen");


  rectMode(CENTER);

  ellipseMode(RADIUS);


  //console.log(round(3,5));


  noStroke();
}

function draw(){
  background(0,150,255);


  Engine.update(myEngine);


  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  log6.display();

  pig1.display();
  pig2.display();
  pig3.display();
  pig4.display();
  pig5.display();
  pig6.display();

  bird.display();
}