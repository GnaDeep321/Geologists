
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var H1;
var ground,Circle,box1,box2,R1;



function setup() {
	createCanvas(1440,840);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	H1 = new Hammer(200,200,100,20);
	ground = new Ground(600,height,1700,30);
	box1 = new Stone(1000,600,60,60);
	box2 = new  Iron (400 ,600, 60,30);
	circle1 = new SandBall(600,600,10);
	circle2 = new SandBall(602,600,10);
	circle3 = new SandBall(604,600,10);
	circle4 = new SandBall(606,600,10);
	circle5 = new SandBall(608,600,10);
	circle6 = new SandBall(610,600,10);
	circle7 = new SandBall(612,600,10);
	circle8 = new SandBall(614,600,10);
	circle9 = new SandBall(616,600,10);
	circle10 = new SandBall(618,600,10);
	R1 = new Rubber(1200,600,60);
  console.log(R1);
  


  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  Engine.update(engine);
  console.log(box2.body.position.x)
  H1.display();
  ground.display();
  box1.display();
  box2.display();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  circle9.display();
  circle10.display();
  R1.display();
  
  drawSprites();
 
}



