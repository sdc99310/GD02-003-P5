function setup() {
  createCanvas(1000, 1000);
  background(300);


  for (i=0; i<500; i=i+10) {
    noStroke();


    fill(-300+i+100);//middle
    ellipse (500,450+i, 100+i,100+i);
  

    fill(400-i+30);//creat gradient white to black
    ellipse (200,150+i,250,250);


    fill(400-i+30);
    ellipse (800,150+i,250,250);

  }

}





// function mousePressed() {
//   saveCanvas("p5-sketche-01","jpg")
// }