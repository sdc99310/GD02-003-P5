function setup() {
  createCanvas(1000, 1000);

  noFill();
  
  for (i=0; i<200; i=i+2) {

    rotate(PI / 360);
    rect(800+i/3,50+i/50,50+i,50+i*10)

    push();   //Start a new drawing state
    rotate(PI / 360);
    rect(600+i/3,50+i/50,50+i,50+i*10)
    pop();    // Restore original state
  }
}


// function draw() {
//   background(0);
// } 









// function mousePressed() {
//   saveCanvas("p5-sketche-01","jpg")
// }