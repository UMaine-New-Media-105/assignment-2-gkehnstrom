function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  stroke(255, 0, 0);
  strokeWeight(3);

  beginShape();

  vertex(200, 50);
  bezierVertex(250, 0, 350, 50, 350, 150);
  bezierVertex(350, 250, 200, 350, 200, 350);
  bezierVertex(200, 350, 50, 250, 50, 150);
  bezierVertex(50, 50, 150, 0, 200, 50);
  endShape(CLOSE);
}
