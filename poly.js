class Poly {
    constructor(x,y,r){
        var options={
            velocity: { x: 25, y: 25 },
            density : 5,
            friction : 0.4

        }
       
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
        this.image = loadImage("polygon.png")
        
        
    }
    display(){
        var pos = this.body.position;
        push();
        
        fill ("black");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r)

        pop();
    
    }
}
