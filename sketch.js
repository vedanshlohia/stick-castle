const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(175,300,200,150);
    box2 = new Box(300,100,50,250);
    box3 = new Box(50,100,50,250);
    box4 = new Box(175,200,100,75);
    box5 = new Box(175,190,25,50);
    ground = new Ground(200,400,400,10);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
   
}