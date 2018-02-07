background(0);

fill(255);
noStroke();

for (var x = 20; x < width-10; x += 20) {
  for (var y = 20; y < height-10; y += 20) {
    ellipse(x, y, 14, 14);
  }
}
