function setup() {
  createCanvas(1000, 1000);
  background(300);

}

function draw() {
  background(255)
  for (var i = 90; i < 500; i++) {
    var r = 800;
    stroke(color(random(r),random(i),random(i), 80));   
   
    line(300, r + 50, i + 90, i);
    line(800,  r+50,  700, i);
    // push();
    // line(700, r -50, i + 90, i)
    // pop();

    // line(700, r -50, r-300, i-50)

    // line(950, r -150, r-300, i-50)
  }
}

// function mousePressed() {
//   saveCanvas("p5-sketche-07","png")
// }