// in this project it wanted to have two stick figures to play football with each other and the ball would move up and down depending
// on how loud you were to yell. I had a hard time trying to code that so I switched to project a bit and now there is just
// one lonley stick man throwing or cathing the ball depending on where you move the mouse.

var x = 90;
var y = 180;
var r = 25;


function setup() {
  createCanvas(400, 400);
}
// stick man
function draw() {
  background(220);

function draw() {
  translate(100, 50);
  line(0, 25, 0, 60);
if(frameCount%2 == 0)
  ellipse(0, 15, 20, 20);
  push();
  translate(0, 30);
  rotate(radians(60));
  line(0, 0, 30, 0);
  rotate(radians(60));
  line(0, 0, 30, 0);
  pop();
//football
if (Football == 20,20) // if the football is in the middle of the screen it will be able to move around from the mouse click.
  ellipse(mouseX, 16, 33, 33);
  ellipse(mouseX+60, 50, 66, 66);
  ellipse(mouseX-60, 84, 66, 66); )// mouse movment

  translate(0, 60);
  rotate(radians(70));
  line(0, 0, 40, 0);
  rotate(radians(40));
  line(0, 0, 40, 0);
  push();
  noStroke();
  fill(172, 115, 57);
  arc(x, y, r * 3.1, r * 1.4, 0, PI, OPEN);
  arc(x, y, r * 3.1, r * 1.4, PI, 2 * PI, OPEN);

  strokeWeight(2.5);
  stroke(255);
  for (var i = 0; i < 4; i++) {
    line(75 + (i * 8), 173, 75 + (i * 8), 184);
  }

  line(53, 179, 127, 179);

  strokeWeight(8);
  line(60, 170, 60, 190);

  pop();
}
