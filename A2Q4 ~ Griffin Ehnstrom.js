function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  fill(173, 216, 230);
  rect(0, 0, 200, 600);
  fill("white");
  rect(200, 0, 200, 600);
  fill(173, 216, 230);
  rect(400, 0, 200, 600);
  fill(190, 0, 0);
  triangle(0, 0, 0, 400, 600, 200);
}
