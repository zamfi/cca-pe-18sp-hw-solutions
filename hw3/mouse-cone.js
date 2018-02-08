function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 10; x < width; x += 10) {
    line(mouseX, mouseY, x, height - 10);
  }
}
