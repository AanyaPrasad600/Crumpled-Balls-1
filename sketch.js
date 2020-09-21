
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper1;
var log1, log2, log3;

function setup() {
	createCanvas(900, 400);

	engine = Engine.create();
	world = engine.world;
	
  log1 = new log(600,379,20,200);
	log2 = new log(508,340,100,20);
  log3 = new log(700,340,100,20);

  ground = new Ground(width/2, 390, 900, 10);
  
  paper1 = new paper(50,370,40);

  Engine.run(engine);
}


function draw() {

  background(0);

  Engine.update(engine);

  ground.display();
  paper1.display();
  log1.display();
  log2.display();
  log3.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
	 Body.applyForce(paper1.body,paper1.body.position,{x:64, y:-64});
  }
}

