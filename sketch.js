
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var m1, m2, m3, m4, m5;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 580);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	m1 = new Mango(900, 150, 15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(190);
  
  drawSprites();
  m1.display();
 
}



