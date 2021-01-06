const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var myEngine,myworld;
var object;
var ground,ball;

function setup() {
  createCanvas(800,400);

  myEngine=Engine.create();
  //my world is myEngine's world
  myWorld=myEngine.world;


 var groundOptions={
   isStatic:true
 }
  ground=Bodies.rectangle(200,380,400,10,groundOptions);
  World.add(myWorld,ground);


  var ballOptions={
    restitution:1,
   
    
  }

  ball=Bodies.circle(150,100,25,ballOptions);
  World.add(myWorld,ball);

  console.log(ground);
  
  //Body.setStatic(ball,true);
}

function draw() {
  background("black");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25);
  drawSprites();
}