var ground,paperBall;
var LeftSideBox, RightSideBox;
var dustbinimg, paperimg;
var BoxGround,launcher;	

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	dustbinimg = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(650,600,100,100);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	paperBall = new Paper(200,615);

	//World.add(world, packageBody);
	dustbin.addImage("dustbin", dustbinimg);
    dustbin.scale = 0.4;

	//Create a Ground
	ground = new Ground(400,675,800,20);

	LeftSideBox = new Dsides(606,616,10,100);

	RightSideBox = new Dsides(694,616,10,100);

	BoxGround = new Dsides(650,660,100,10);

	launcher = new Launcher(paperBall.body,{x: 200 , y:100});
  
}


function draw() {
  background("white");
  Engine.update(engine);

  

  ground.display();	

  paperBall.display();
  
  LeftSideBox.display();
  RightSideBox.display();
  BoxGround.display();

  launcher.display();
  
  
  drawSprites();
 
}

function mouseDragged(){
    Body.setPosition(paperBall.body , {x: mouseX , y: mouseY});   
}

function mouseReleased(){
	console.log("realeased");
    launcher.fly();
}