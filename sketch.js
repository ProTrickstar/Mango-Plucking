
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boy_image,tree,tree_image,mango1,mango2,mango3,mango4,mango5;

function preload(){
//boy_image = loadImage("boy.png");

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground = new ground(400,200,800,20);
	
	boy = createSprite(400,200,20,20);
	boy.addImage("boy",boy_image);

	mango1 = new Mango(300,200,20,20);
	mango2 = new Mango(300,100,20,20);
	mango3 = new Mango(250,150,20,20);
	mango4 = new Mango(260,170,20,20);
	mango5 = new Mango(240,155,20,20);

	tree = new Tree(300,200,20,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("0");
  
  boy.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


  drawSprites();
 
}



