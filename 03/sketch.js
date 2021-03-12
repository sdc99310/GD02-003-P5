function setup() {
  createCanvas(1000, 1000);
  background(300);

}

function draw(){
  // if(mousePressed){
  //   background(300);
  // }
  stroke(0);
  fill(300);
  rect(mouseX, mouseY, 150, 10);
}











function keyPressed() {
  saveCanvas("p5-sketche-01","png")
}