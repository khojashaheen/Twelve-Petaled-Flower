function setup() {
	createCanvas(windowWidth, windowHeight);
	background('black')
}
let angleInDegrees = 0,angleInDegrees_2=0;
let x=0;
let y=0;
let x_2=0;
let y_2=0;
let r=52
let g=152
let b=219


function draw() {
	var size=15
	
	stroke('rgb(53,195,176)')
	
	translate(windowWidth/2,windowHeight/2)
	
	//Right Side
	push(); // Start a new drawing state
	rotate(-PI*2/3)
	var angle= radians(angleInDegrees % 420);
	rotate(angle);
	fill(r,g,b);
	circle(x,y,size)
	pop(); // Restore original state
	
	//Left Side
	push(); // Start a new drawing state
	rotate(PI*1/3)
	var angle2= radians((angleInDegrees_2) % 420);
	rotate(angle2);
	fill(r,g,b);
	circle(x_2,y_2,size)
	pop(); // Restore original state
	
	angleInDegrees +=0.25;
	angleInDegrees_2 -=0.25;
	x= (x+1)%120
	y= (y+1)%120
	x_2= (x_2-1)%120
	y_2= (y_2-1)%120
	
	//Change colours dynamically
	r-=0.35
	g-=0.2
	b-=0.5
}