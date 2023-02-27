function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  addLine1();

  addLine2();

  addLine3();

  addLine4();

  addLine5();
}
function addLine1() {
  fill(50, 50, 100);
  stroke("white");
  //1 top of G
  rect(0, 0, 80);
  fill(90, 50, 100);
  rect(80, 0, 80);
  rect(160, 0, 80);
  rect(240, 0, 80);
  fill(50, 50, 100);
  rect(320, 0, 80);
}

function addLine2() {
  fill(90, 50, 100);
  rect(0, 80, 80);
  fill(50, 50, 100);
  rect(80, 80, 80);
  rect(160, 80, 80);
  rect(240, 80, 80);
  rect(320, 80, 80);
}

function addLine3() {
  fill(90, 50, 100);
  rect(0, 160, 80);
  fill(50, 50, 100);
  rect(80, 160, 80);
  fill(90, 50, 100);
  rect(160, 160, 80);
  rect(240, 160, 80);
  rect(320, 160, 80);
}

function addLine4() {
  fill(90, 50, 100);
  rect(0, 240, 80);
  fill(50, 50, 100);
  rect(80, 240, 80);
  rect(160, 240, 80);
  fill(90, 50, 100);
  rect(240, 240, 80);
  fill(50, 50, 100);
  rect(320, 240, 80);
}

function addLine5() {
  rect(0, 320, 80);
  fill(90, 50, 100);
  rect(80, 320, 80);
  rect(160, 320, 80);
  rect(240, 320, 80);
  fill(50, 50, 100);
  rect(320, 320, 80);
}
 
