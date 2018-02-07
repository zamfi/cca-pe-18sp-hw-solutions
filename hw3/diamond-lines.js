background(255);

for (var y = 0; y < height/2; y += 10) {
  line(width/2 - y, y, width/2 + y, y);
}
for (var y = height/2; y <= height; y += 10) {
  line(y - width/2, y, 3/2 * width - y, y);
}
