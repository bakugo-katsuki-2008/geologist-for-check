class Stone{
	constructor(x,y,w, h)
	{
		var options ={
			resititution: 0.9, 
			friction: 0.9,
			density: 12
		}
		this.x=x;
		this.y=y;
        this.height = h;
        this.width = w;
		this.body=Bodies.rectangle(x, y, w, h )
		World.add(world, this.body);

    }
    display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            pop()
            rect(stonepos.x, stonepos.y, this.width, this.height);
	}

}