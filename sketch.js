const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1, stone2, stone3
var iron1, iron2
var rubber


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(300, 300, 5, 5)
    iron1 = new Iron (300, 300, 100, 100)
    stone1 = new Stone(600, 300, 100 ,100);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron1.display();
    stone1.display();

    
 
}