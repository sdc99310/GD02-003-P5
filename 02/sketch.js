function setup() {
  var c = createCanvas(1000, 1000);
  background(300);

  noStroke(255);

  fill(0);
  triangle(160,300,580,300,580,800); //x1,y1,x2,y2,x3,y3 // x,y-coordinate each of the first to third points

  fill(0);
  triangle(330,200,830,200,830,800);

  fill(300);
  triangle(150,200,485,200,485,600)

  fill(300);
  triangle(400,200,730,200,730,600) //,-100

  fill(0);
  rect (30,300, 150, 3)
  rect (580,200, 250, 3);
  rect (190,300, 400, 1);
  rect (590,300, 3, 600);
  rect (840,0, 9, 600); //x,y,w,h
  rect (160,800, 800,20);
  rect (160,200, 1, 900);

  fill(300);
  rect (482,350, 3, 400);
  rect (727,290, 3, 400);
  
}

function mousePressed() {
  saveCanvas("p5-sketche-01","jpg")
}












//////sources, references, work cited