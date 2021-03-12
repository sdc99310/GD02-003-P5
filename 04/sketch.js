function setup() {
  createCanvas(1000, 1000);
  background(300);
  
fill(0);
noStroke(0);

shearX(PI / 7.0); //shear the shape from the X, effected other shapes shear.
rect(-100, 250, 150, 500, 0,0,100,0); // (x,y,w,h,tl,tr,br,bl)
rect(250, 250, 150, 500, 0,0,100,0);

shearX(PI / -4.0); //shear the shape from the X, left part lines
rect(730, 540, 30, 210, 0,0,100,0);
rect(715, 540, 10, 210, 0,0,100,0);
rect(700, 540, 5, 210, 0,0,100,0);
rect(680, 540, 1, 210, 0,0,100,0);

shearX(PI / -1.0); //right part lines
rect(1080, 250, 30, 500, 0,0,100,0);
rect(1065, 250, 10, 500, 0,0,100,0);
rect(1050, 250, 5, 500, 0,0,100,0);
rect(1030, 250, 1, 500, 0,0,100,0);
noStroke(0);
for (var i = 0; i <20; i++){ 
  rect(random(1030,800), 250, random(1,3), 500);
} ///right part lines random for loop

}











// function mousePressed() {
//   saveCanvas("p5-sketche-04","png")
// }