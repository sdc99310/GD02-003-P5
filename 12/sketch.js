let letterW;

function preload(){
    letterW = loadImage('letterW.png')
}//load the image

function setup() {
  noStroke();
  createCanvas(1000, 1000);
  background (random (100,300), random (100,255), random (100,255), random (255)); 

}


function draw(){
  frameRate(3);
  

  image(letterW,0,0);


  colorMode(HSB, 250);
  for (let i = 0; i <250; i++) {
    for (let j = 0; j < 200; j++) {
    fill(i, j, 300);
      point(i, j);
    }
  }
    
  
  
    unitSize = 35;
    for (i=0; i<height; i=i+unitSize){
      for (j=0; j<width; j=j+unitSize){
        pixelColor = get(j, i);//array of pixels, like a grid(read the color value)
  
        fill(pixelColor);
        randomSize = random(10,50)
        ellipse(j,i,randomSize, randomSize);
      }
  
    }
}

// function mousePressed() {
//   saveCanvas("p5-sketche-12","png")
// }