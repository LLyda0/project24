
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,ground,partR,partL,partB;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject=new Paper(200,450,40);
	ground=new Ground(width/2,690,width,20)
	partR=new DustBin(1100,600,10,100);
	partL=new DustBin(900,600,10,100);
	partB=new DustBin(1000,650,200,10);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  ground.display();

  partR.display();
  partL.display();
  partB.display();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y:-85});
	}
}



