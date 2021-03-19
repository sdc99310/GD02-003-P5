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


  translate(-200, 100);
  for (var i =0; i<100; i++){
    push()
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
    ellipse(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
}
}



// function mousePressed() {
//   saveCanvas("p5-sketche-09","png")
// }


//