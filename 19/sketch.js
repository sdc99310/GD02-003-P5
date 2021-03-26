let font, tiles, tileSize
let loopDuration = 2 * 10

function preload(){
  font = loadFont('font.otf')
}

function setup(){
  createCanvas(1080, 1080)
  noStroke()

  points =  font.textToPoints('W', width/7, height/1, 1500, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  })

  tiles = 20
  tileSize = width/tiles
}

function draw(){

  colorMode(BLEND)
  let currentFrame = frameCount % loopDuration
  let t = currentFrame /  loopDuration
  let u = map((t), 0, 1, 0, PI)

  background(300)
  // background('rgba(172, 255, 117, 0.8)')

  points.forEach(point => {
    push()
    translate(point.x, point.y)

    stroke('rgba(252, 164, 2, 0.8)') 
    // fill('rgba(255, 202, 45, 0.8)') 
    line(10 * cos(u), 50 * sin(u), 100 - 900 * sin(u), 40)


    fill('rgba(0, 0, 255, 0.8)')


    // fill('#4D03FF') 
    ellipse(0 * sin(u), 0 * sin(u), 40 + 180 * sin(u), 20)

    fill('rgba(251, 255, 100, 0.8)') 
    // fill('rgba(255, 202, 45, 0.8)') 
    ellipse(10 * sin(u), 10 * sin(u), 40 + 190 * sin(u), 30)

    
    pop()

  })

}


// function mousePressed() {
//   saveCanvas("p5-sketche-19","png")
// }


///work cited
//font https://www.fontspace.com/category/opentype
// reference https://p5js.org/reference/#/p5.Font/textToPoints
//////https://p5js.org/ko/examples/typography-words.html /text
//////https://youtu.be/4hA7G3gup-4 
