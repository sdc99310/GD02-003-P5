//pre-setting for font/ graphic
let graphic
let font
let canvas

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

//load the font
function preload(){
  font = loadFont('font.otf')
}

//loopduration (animation)
const loopDuration = 3 * 60

function setup() {
  createCanvas(1000, 1000);
  background(255);

  c1 = color(176, 255, 54);
  c2 = color(205, 11, 255);

 
  

  graphic = createGraphics(width, height)
//text setup
  graphic.textFont(font)
  graphic.textAlign(CENTER, CENTER) //x,y
  graphic.blendMode(SCREEN)
  blendMode(BLEND)


  //01 big text 01
  graphic.textSize(2000)
  graphic.fill('rgba(100, 116, 224, 0.5)')
  // graphic.fill('rgba(3, 104, 205, 0.5)')
  // graphic.fill('rgba(255, 0, 0, 0.9)') //hue saturation lightness
  graphic.text('W',width/2,height/3)// x, y location
  //02
  graphic.textSize(2000)
  graphic.fill('rgba(255, 164, 45, 0.9)') //
  // graphic.fill('rgba(1, 255, 0, 0.9)') //
  graphic.text('W',width/1.95,height/2.55)// x, y location change


  //01 big text 02
  graphic.textSize(2000)
  graphic.fill('rgba(3, 104, 205, 1)')
  // graphic.fill('rgba(255, 0, 0, 0.9)') //hue saturation lightness
  graphic.text('W',width/1,height/3)// x, y location
  //02
  graphic.textSize(2000)
  graphic.fill('rgba(255, 164, 45, 0.9)') //
  // graphic.fill('rgba(1, 255, 0, 0.9)') //
  graphic.text('W',width/3.5,height/2.55)// x, y location change


  //03 green w1
  graphic.textSize(1500)
  graphic.fill('rgba(177, 253, 123, 1)') //
  // graphic.fill('rgba(0, 0, 255, 0.9)') //
  graphic.text('W',width/2,height/1.6)// x, y location change

  //04 green w2
  graphic.textSize(1500)
  graphic.stroke('rgba(177, 253, 123, 1)') //
  // graphic.fill('rgba(0, 0, 255, 0.9)') //
  graphic.text('W',width/2,height/8)// x, y location change

}

function draw() {

  setGradient(width / 2, 0, width / 2, height, c2, c1, Y_AXIS);

  //set the framerate , speed?
  let currentFrame =  frameCount % loopDuration
  let v = currentFrame / loopDuration 
  let u = map (v, 0, 1, 0, 2*PI)

  // background('rgba(0, 255, 0, 0.9)');

  ///creat tiles
  const tiles = 100
  const tileSize = width/ tiles

  //looping each of the tiles
  for (let x = 0; x < tiles; x++){
    for (let y = 0; y < tiles; y++){

      const distortionX = cos (u + x *300)*30
      const distortionY = sin (u + y *0.5)*20

      //applying the grid into the graphic
      const sx = x * tileSize + distortionX
      const sy = y * tileSize + distortionY
      const sw = tileSize + distortionX
      const sh = tileSize + distortionY

      // appliyig the grid to end point on the canvas
      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize

      //grid image from graphic into canvas

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)

    }
  }

  
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // 위에서 아래 방향 그래디언트
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }

  }
}





// function mousePressed() {
//   saveCanvas("p5-sketche-18","png")
// }

//work cited
//reference https://www.youtube.com/watch?v=SKDhkB8g1So

