
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3, ground, ball;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	
	
	bin3 = new bin_3(480,620,20,100);
	bin2 = new bin_2(550,660,130,20);
	bin1 = new bin_1(620,620,20,100);
  ground = new ground1(400,680,800,10);	
  
  ball = new paper(150,600,20);
  
Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  
  
  bin3.display();
  bin1.display();
  bin2.display();
  ground.display();
  ball.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x: 50, y: -55})
	}
}



