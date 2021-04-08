class Iron{
	constructor(x,y,w, h)
	{
		var options ={
			resititution: 0.8, 
			friction: 3,
			density: 30
		}
        this.body=Bodies.rectangle(x, y, w, h )
        this.x=x;
		this.y=y;
        this.height = h;
        this.width = w;

		World.add(world, this.body);

    }
    display(){
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            pop()
            rect(ironpos.x, ironpos.y, this.width, this.height);
	}

}