function setup(){
  createCanvas(1000, 1000); 
  // frameRate(22)
  // createLoop({duration:15,gif:true})

  angleMode(DEGREES);
  // rectMode(CENTER);
}

function draw(){
  background(300);
  noFill();

    for (var i =0; i<200; i++){
      push()
      translate(500,430);
      rotate(sin(frameCount + i) * 50, cos(frameCount + i*100)) //rotate by frame count+i to get each square a different offset
      // 100, the squares spin between -100 and 100 degrees 
      ellipse(300, 50, 200 - i *1, 700 - i * 3, 100 - i)
      pop()
    }


    for (var i =0; i<200; i++){
      push()
      translate(450, 500);
      rotate(sin(frameCount + i) * 50) //rotate by frame count+i to get each square a different offset
      ellipse(0, 0, 200 - i *1, 700 - i * 3, 100 - i)
      pop()
  }


  for (var i =0; i<10; i++){
    push()
    translate(300,450);
    rotate(cos(frameCount - i) *50) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
   ellipse(0, 0, 200 - i *5, 600 - i * 3, 100 - i)
    pop()
  }

  for (var i =0; i<10; i++){
    push()
    translate(700,650);
    rotate(cos(frameCount - i) *50) //rotate by frame count+i to get each square a different offset
    // 100, the squares spin between -100 and 100 degrees
   ellipse(0, 0, 200 - i *5, 600 - i * 3, 100 - i)
    pop()
  }

  //   translate(100, 200);

  //   for (var i =0; i<200; i++){
  //     push()
  //     rotate(sin(frameCount + i) * 200) //rotate by frame count+i to get each square a different offset
  //     // 100, the squares spin between -100 and 100 degrees
  //    rect(0, 0, 600 - i *3, 700 - i * 3, 200 - i)
  //     pop()
  // }  
}


function mousePressed() {
  saveCanvas("p5-sketche-08","png")
}



////////sources, references, work cited
//https://www.youtube.com/watch?v=ktPnruyC6cc