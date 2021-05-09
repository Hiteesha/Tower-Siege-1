const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hexImg


function preload() {
 hexImg = loadImage("polygon.png")   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // imageMode(CENTER)
    // image(hexImg,hexagon.position.x,hexagon.position.y,40,40)
    // hexagon = Bodies.circle(200,200,40) 
    // World.add(world,hexagon)
    
   
    ground = new Ground(600,380,1200,20)
    ground2 = new Ground(480,300,200,20)
    ground3 = new Ground(900,250,200,20)

    box1 = new Box(400,270,40,40)
    box2 = new Box(440,270,40,40)
    box3 = new Box(480,270,40,40)
    box4 = new Box(520,270,40,40)
    box5 = new Box(560,270,40,40)

    box6 = new Box(420,230,40,40)
    box7 = new Box(460,230,40,40)
    box8 = new Box(500,230,40,40)
    box9 = new Box(540,230,40,40)

    box10 = new Box(440,190,40,40)
    box11 = new Box(480,190,40,40)
    box12 = new Box(520,190,40,40)

    box13 = new Box(460,150,40,40)
    box14 = new Box(500,150,40,40)

    box15 = new Box(480,110,40,40)

     box16 = new Box(820,220,40,40)
     box17 = new Box(860,220,40,40)
     box18 = new Box(900,220,40,40)
     box19 = new Box(940,220,40,40)
     box20 = new Box(980,220,40,40)

     box21 = new Box(840,180,40,40)
     box22 = new Box(880,180,40,40)
     box23 = new Box(920,180,40,40)
     box24 = new Box(960,180,40,40)

     box25 = new Box(860,140,40,40)
     box26 = new Box(900,140,40,40)
     box27 = new Box(940,140,40,40)

     box28 = new Box(880,100,40,40)
     box29 = new Box(920,100,40,40)

     box30 = new Box(900,60,40,40)

     hexagon = new Poly(180,250,40)
     slingshot = new SlingShot(hexagon.body,{x:100,y:250})
     
    
}

function draw(){
    background("lightblue");
    Engine.update(engine);

    
    hexagon.display();
    slingshot.display();

    ground.display();
    ground2.display();
    ground3.display();

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    
    box21.display();
    box22.display();
    box23.display();
    box24.display();

    box25.display();
    box26.display();
    box27.display();

    box28.display();
    box29.display();
    box30.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display(); 
    box6.display();
    box7.display();
    box8.display();
    box9.display(); 
    box10.display();
    box11.display();
    box12.display(); 
    box13.display();
    box14.display(); 
    box15.display(); 

    hexagon.display();

}

 function mouseDragged(){
     
     Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}
 


 function mouseReleased(){
     slingshot.fly();
    // Matter.Body.applyForce(hexagon.body,hexagon.body.position,{x : 1 ,y : 1 })
	
    
 }



