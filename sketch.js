const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, wall1,wall2;
var bridge, link;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Base(width/2,height - 10,width,20,"black");
  wall1 = new Base((width/2)-465,height -170,30,300,"green");
  wall2 = new Base((width/2)+450,height -170,30,300,"green");

  bridge = new Bridge(10,{x:(width/2)-465,y:height -170});
  link = new Link(bridge,wall2);

  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();

  bridge.show();

}
