function setup() {
  createCanvas(1000, 1000);
  background(300);

  angleMode(DEGREES);
  //  rectMode(CENTER);

}

translate(width/2, heigh/2);

function draw(){
  background(300);
  noFill();
  stroke(0);
translate(-100,-400);
  for (var i =0; i<10; i++){
    push()
    rotate(sin(frameCount - i) *50) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
    rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i, 360)
    pop()
  }

}
// function mousePressed() {
//   saveCanvas("p5-sketche-07","png")
// }