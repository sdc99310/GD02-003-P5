function setup() {
  createCanvas(1000, 1000);
  background(300);
  

  ////////right part

  fill(300);
  stroke(0);
  strokeWeight(5);
  
ellipse(353,676,140,140);////right circle

  fill(0);
  noStroke(0);

translate(width / 0, height / 0);
shearX(PI / 7.0); //shear the shape from the X
rect(-100, 250, 150, 500, 0,0,100,0); // (x,y,w,h,tl,tr,br,bl)

 ////////left part


}











// function mousePressed() {
//   saveCanvas("p5-sketche-01","jpg")
// }