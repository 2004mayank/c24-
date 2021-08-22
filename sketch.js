const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground;




function preload() {
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,300,1200,600 );
  tower = new Tower(170, 350, 160, 310);
  cb1= new cannonball(350,20,50)

}

function draw() {
  background(189);
  Engine.update(engine);

  ground.display();
  
  tower.display();
  cb1.display();
 
}
