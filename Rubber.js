class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		var options ={
			resititution: 0.3, 
			friction: 5,
			density: 1
		}
		this.x=x;
		this.y=y;
		this.r=r;
		//this.body= ellipse(this.x, this.y, this.r, this.r, options)
		//World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			this.body = Bodies.ellipse(this.x, this.y, this.r, options)
			World.add(world, this.body);
			pop()
			rect(rubberpos.x, rubberpos.y, this.r);
	}

}