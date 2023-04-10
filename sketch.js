function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(3);

	circle(380, 350, 250);
	circle(460, 350, 50);
	circle(300, 350, 50);
	circle(460, 350, 41);
	circle(300, 350, 41);
}

function draw() {

	background(0);
	posX = mouseX;
	posY = mouseY;
	noFill();
	stroke(255);
	strokeWeight(2);
	circle(posX, posY, height/3);
	circle(posX - height/2/4, posY - height/50, height/12);
	circle(posX + height/2/4, posY - height/50, height/12);

	circle(posX - height/2/4, posY - height/50, height/14);
	circle(posX + height/2/4, posY - height/50, height/14);


	circle(posX - height/2/4, posY - height/50, height/30);
	circle(posX + height/2/4, posY - height/50, height/30);
}