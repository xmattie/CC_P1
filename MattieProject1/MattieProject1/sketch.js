var k = -100; // The variables needed for the key presses
var l = -100;
var m = -100;
var o = -100;
var a = -100;
var b = -100;
var c = -100;
var d = -100;
var e = -100;
var f = -100;

function setup() {
  createCanvas(960, 540);
}

function draw() {
  background(0);
  
  if(mouseIsPressed === true){ // Creates a bunch of circles when the mouse is pressed
    for(h = 0; h < 30; h++) {
      drawCircles();
    }
  }
  
  var n = noise(mouseX, mouseY) * 100 - 40; // Produces 'natural' rhythm of random numbers
    translate(n, n); // Shakes the screen

  for (j = 55; j < height - 29; j = j + 50) { // Creates a grid of triangles
    for (i = 25; i < width - 29; i = i + 30) {
      drawTriangle(i, j);
    }
  }
  drawHLine(k); // Places all the lines with the randomized variables
  drawHLine(l);
  drawHLine(m);
  drawHLine(m + 30);
  drawHLine(o);
  drawVLine(a);
  drawVLine(b);
  drawVLine(c);
  drawVLine(d);
  drawVLine(e);
  drawVLine(f);
}

function drawTriangle(x, y) { // Creates a triangle
  var r = random(0, 255.1); // Randomizes the color
  var g = random(0, 255.1);
  var b = random(0, 255.1);
  var x1 = x + 10; // Maintains triangle proportions
  var x2 = x + 20;
  var y1 = y - 20;
  stroke(r, g, b); // Triangle makeup
  noFill();
  beginShape(TRIANGLES);
  vertex(x, y);
  vertex(x1, y1);
  vertex(x2, y);
  endShape();
}

function drawCircles() { // Generates cyan circles
  noStroke();
  fill(0, 255, 255);
  v = random(0, width);
  w = random(0, height);
  ellipse(v, w, 50, 50);
}

function keyTyped() { // Sets the location of the lines when keys are typed
  if (key === 's') {
  k = random(1, height / 5)
  e = random(width / 2, width / 1.7)
  } else if (key === 'o') {
    l = random(height / 5, height / 3)
    } else if (key === 'r') {
      m = random(height / 3, height / 1.5)
      } else if (key === 'y') {
        o = random(height / 1.5, height)
        } else if (key === 'p') {
          a = random(1, width / 6)
          } else if(key === 'l') {
            b = random(width / 6, width / 4)
            } else if (key === 'e') {
              c = random(width / 4, width / 3)
              f = random(width / 1.7, width)
              } else if (key === 'a') {
                d = random(width / 3, width / 2)
                }
}

function drawHLine(y) { // Draws a red line with a variable spot on the y axis
  stroke(255, 0, 0);
  line(0, y, width, y);
}

function drawVLine(x) { // Draws a yellow line with a variable spot on the x axis
  stroke(255, 255, 0);
  line(x, 0, x, height);
}