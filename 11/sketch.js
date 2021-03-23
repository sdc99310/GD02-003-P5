let letterW;

function preload(){
    letterW = loadImage('letterW.png')
}//load the image

function setup() {
  noStroke();
  createCanvas(1000, 1000);
  background (random (200), random (255), random (255), random (255)); 

  

  

}


function draw(){
  
//   for (let i = 0; i <500; i ++) { 
//     fill (random (255), random (255), random (255), random (255)); 
// }

  image(letterW,0,-50);

  colorMode(RGB, 250);
  for (let i = 0; i < 200; i++) {
    for (let j = 0; j < 200; j++) {
    fill(i, j, 0);
      point(i, j);
    }
  }
    
  
  
    unitSize = 45;
    for (i=0; i<height; i=i+unitSize){
      for (j=0; j<width; j=j+unitSize){
        pixelColor = get(j, i);//array of pixels, like a grid(read the color value)
        stroke(pixelColor);
        fill(pixelColor);
        randomSize = random(0,47)
        rect(j,i,randomSize, randomSize);
      }
  
    }
}

function mousePressed() {
  saveCanvas("p5-sketche-11","png")
}
