function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var angle = 0; angle < TWO_PI; angle += 0.1) {
    line(mouseX, mouseY,
      width / 2 * (1 + 0.9 * sin(angle)),
      height / 2 * (1 + 0.9 * cos(angle)));
  }
}
