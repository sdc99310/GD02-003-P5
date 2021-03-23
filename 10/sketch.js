function setup() {
  createCanvas(1000, 1000);
  background(300);
}

function setup(){
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  // rectMode(CENTER);
}

function draw(){
  background(300);
  noFill();
  stroke(0);

  for (var i =0; i<20; i++){
    push()
    translate(300, 500);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
    rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }

  for (var i =0; i<100; i++){
    push()
    translate(650, 500);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
  rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }
}



// function mousePressed() {
//   saveCanvas("p5-sketche-10","png")
// }


//