let rgba

function setup() {
  createCanvas(1000, 1000);
  // background(300);
}

function setup(){
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  // rectMode(CENTER);
}

function draw(){
  background(300);
  noFill();
  stroke('rgba(6, 6, 6, 1)');

  //left to right

  for (var i =0; i<20; i++){
    push()
    translate(10, 200);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
    rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }//1

  for (var i =0; i<100; i++){
    push()
    translate(100, 450);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
  rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }//2

  for (var i =0; i<100; i++){
    push()
    translate(200, 700);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
  rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }//3

  for (var i =0; i<100; i++){
    push()
    translate(300, 900);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
  rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }//4

  for (var i =0; i<100; i++){
    push()
    translate(400, 550);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
  rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }//5
  for (var i =0; i<100; i++){
    push()
    translate(500, 800);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
  rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }//4

  for (var i =0; i<100; i++){
    push()
    translate(600, 700);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
  rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }//3

  for (var i =0; i<100; i++){
    push()
    translate(700, 450);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
  rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }//2

  for (var i =0; i<20; i++){
    push()
    translate(790, 200);
    rotate(cos(frameCount + i) * 360) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
    rect(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
    pop()
  }//1
  
}



function mousePressed() {
  saveCanvas("p5-sketche-10","png")
}


//