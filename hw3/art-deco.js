background(255);

noFill();
rectMode(CENTER);

var rStep = 6;

for (var x = width/10; x < width; x += width/5) {
  for (var r = rStep; r < rStep*5; r += rStep) {
    rect(x, height/2, 2*r, 2*r);
  }
}
