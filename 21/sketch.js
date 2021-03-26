//presetting
let img
let particles = []
let ranPosX = []
let startPos = []
let numParticles = 2000
let loopDuration = 1 * 60

function preload() {
  img = loadImage('W.jpg')
}

function setup() {
  createCanvas(1000, 1000);
  background(300);

  // change the pixel motion
  noiseSeed(223)

  //set the random starting position for particles
  for (let i = 0; i < numParticles; i++) {
    startPos [i] = 
    creatVector(random(width),
    random(height))
      ranPosX[i] = random(-6, 6)
  }
  
  //set particles
  setParticles(0)
}

function draw(){
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map(t, 0, 1, 0, 5)
  
  frameRate(20)

  background(0, u)

  //move each of the particles
  particles.forEach(particles => {
    particles.move()
  })
////////////////////////////loop begining

  if (frameCount > 0 && t === 0){
    setParticles(t) //let's call 't'
  }
}
//make setParticles function 
function setParticles(t) {
  for (let i =0; i <numParticles; i++){
    let x = startPos[i].x
    let y = startPos[i].y

    let adj = floor(map(y, 0, height, 240, 300));
    let adj2 = floor(map(y, 0, height, 300, 240));

    //gradient color change
    let c = color(`hsl(${adj}, 100%, 50%)`);
    let c2 = color(`hsl(${adj2}, 100%, 50%)`);
    particles[i] = new Particle(x, y, c, c2, i, t);
  }
}


//particle class
class Particle {

  constructor (xIn, yIn, cIn, c2In, indIn, t) {
    this.posX = xIn
    this.posY = yIn
    this.c = cIn
    this.c2In = c2In
    this.theta = 0
    this.incr = 0
    this.indIn = indIn
    this.t = t
    this.i = 0
  }

  update() {
    this.incr += 0.001 //increase particle

    // get color of 'i' image pixel at particle's position
    let c = img.get(this.posX, this.posY)

    // calculate angle for movement using perlin noise
    this.theta = noise(this.posX * 0.0075, this.posY * 0.005, this.incr) * TWO_PI;

    
    
  }
}


// function mousePressed() {
//   saveCanvas("p5-sketche-21","png")
// }