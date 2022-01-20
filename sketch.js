
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

var radius = 20;

function preload() {

}

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_opitions = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density:1.2
	}
	var opitions = {
		isStatic: true
	}

	ball = Bodies.circle(260, 100, radius/2, ball_opitions);
	World.add(world, ball);

	ground = Bodies.rectangle(650,390,1300,20, opitions);
	World.add(world, ground);

	left = Bodies.rectangle(800,350,20,100, opitions);
	World.add(world, left);

	right = Bodies.rectangle(1000,350,20,100, opitions);
	World.add(world, right);
	

	Engine.run(engine);
	rectMode(CENTER);
	
}


function draw() {
	background("purple");
	ellipse(ball.position.x, ball.position.y, radius, radius);
	rect(ground.position.x, ground.position.y, 1300, 20);
	rect(left.position.x, left.position.y, 20, 100);
	rect(right.position.x, right.position.y, 20, 100);
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:15,y:-15});
	}
	  
}



