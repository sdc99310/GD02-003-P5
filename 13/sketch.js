function setup() {
  createCanvas(1000, 1000);
  background(300);
  // angleMode(DEGREES);

  // for (var i = 90; i < 500; i++) {
  //   var r = 800;
  //   stroke(color(random(r),random(i),random(i), 80));  

  //     // line(800, i+ 50, 590, i);//block
  //   line(300, r+ 50, i + 90, i);

  //   // push();
  //   // translate(width / 9, height / 9); 
  //   // rotate(PI / 360.0);
  //   // line(700, r -50, i + 90, i);
  //   // pop();

  //   push();
  //   translate(350, 15); 
  //   line(300, r+ 50, i + 90, i);
  //   pop();

   

  //   // line(700, r -50, r-300, i-50)

  //   // line(950, r -150, r-300, i-50)
  // }
}



function draw() {

  for (var i = 30; i < 500; i++) {
    var r = 800;
    stroke(color(random(r),random(i),random(i), 80));  
      // line(800, i+ 50, 590, i);//block
    // line(650, r+ 50, i + 90, i);

    push();
    translate(width / 9, height / 9); 
    rotate(PI / 360.0);
    line(550, r -50, i + 90, i);
    pop();

    push();
    translate(355, 15); 
    line(300, r+ 50, i + 90, i);
    pop();

    push();
    translate(100, 100); 
    line(300, r+ 50, i + 90, i);
    pop();
   
    push();
    translate(-145, 195); 
    rotate(PI / 360.0);
    line(550, r -50, i + 90, i);
    pop();
    

   

    // line(700, r -50, r-300, i-50)

    // line(950, r -150, r-300, i-50)
  
}
}

  
function mousePressed() {
  saveCanvas("p5-sketche-13","png")
}