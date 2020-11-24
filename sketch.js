const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var dustbinObj, paperObject,groundObject;	
var world;
var Body1, Body2, Body3;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	dustbinObj=new Dustbin(1200,620, 80, 80);
	Body1=new tree(1160, 620, 10, 80);
	Body2=new tree(1200, 660, 80, 10);
	Body3=new tree(1240, 620, 10, 80);
	paperObject=new PaperBall(400,450, 20, 20);
	groundObject=new Ground(width/2,670,width,20);
	//Create a Ground
	

	//var render = Render.create({
	  //element: document.body,
	  //engine: engine,
	  //options: {
	    //width: 1200,
	    //height: 700,
	    //wireframes: false
	  //}
	//});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine)
 
  Body1.display();
  Body3.display(); 
  dustbinObj.display();
  Body2.display();
  paperObject.display();
  groundObject.display();
  
  
  keyPressed(); 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}