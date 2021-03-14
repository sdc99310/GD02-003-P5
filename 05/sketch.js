function setup() {
  createCanvas(1000, 1000);
  
  noFill();


  for (i=0; i<100; i=i+1) {

    rotate(PI/360); 
    ellipse(800+i, 100+i, 100+i, 50+i*10);//effecting below's codes, right one

    push(); //left
    rotate(PI/360); 
    ellipse(300+i*2, 500+i/100, 100+i, 300+i*10); 
    pop();

    push(); //middle
    rotate(PI/360); 
    ellipse(500+i+100, 500+i/10, 100+i, 300+i*10);
    pop();

  }


}


function mousePressed() {
  saveCanvas("p5-sketche-01","png")
}


///Q.can i move all the variables x,y at once? holidng all the codes using the brackets{...}?

  
//   for (i=0; i<200; i=i+2) {

//     rotate(PI / 360);
//     rect(800+i/3,50+i/50,50+i,50+i*10)

//     push();   //Start a new drawing state
//     rotate(PI / 360);
//     rect(600+i/3,50+i/50,50+i,50+i*10)
//     pop();    // Restore original state
//   }
