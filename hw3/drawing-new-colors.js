function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSB);
  noStroke();
}

var diameter = 10;

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(0, 100, 100);
  } else if (key == 'G') {
    fill(100, 70, 100);
  } else if (key == 'B') {
    fill(210, 100, 100);
  } else if (key == 'T') {
    fill(180, 100, 100);
  } else if (key == 'Y') {
    fill(60, 100, 100);
  } else if (key == 'P') {
    fill(310, 100, 100);
  }
}
