const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var object;

function setup()
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  var objects_options = {
    isStatic : true 
  }
  object = Bodies.rectangle(200,100,50,50)
  World.add(world,object);

  console.log(object);
}

function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}