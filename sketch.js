const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var fruity;
let engine;
let world;
var ground;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
rope=new Rope(7,{x:245,y:30})
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  var ooptt={
    density:0.001
  }
  fruity=Bodies.circle(300,300,15,ooptt);
  Matter.Composite.add(rope.body,fruity)
  linky=new Link(rope,fruity)
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  Engine.update(engine);
ellipse(fruity.position.x,fruity.position.y,15,15)

 
   
}
