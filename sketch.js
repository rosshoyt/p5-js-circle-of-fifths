function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 255);
	//let c = color(255, 204, 0);
	//fill(c);
	//noStroke();
	//circle(windowWidth / 2, windowHeight / 2, 100);
	let circleX = windowWidth / 2;
	let circleY = windowHeight / 2;
	let circleDiameter = (circleY > circleX) ? circleX : circleY;
	circle(circleX, circleY, circleDiameter);
}
