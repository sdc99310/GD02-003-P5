/////pre-setting
let pg
let font
let rgba = ['rgba(255, 0, 0, 0.9)', 
            'rgba(0, 255, 0, 0.9)', 
            'rgba(0, 0, 255, 0.9)'] //set RGBA color
let textSize = 1000
let posOffset = 10
let sizeOffset = 50
let tiles = 100
let tileSize
let loopDuration = 3*60

function preload(){
  font = loadFont('LeagueSpartan-Bold.otf')
} //load the font

function setup() {
  createCanvas(1000, 1000);
    // background('rgba(0, 251, 226, 1)')
////text setup
  pg = createGraphics(width, height)//Creates and returns a new p5.Renderer object.
  pg.textFont(font)
  pg.textAlign(CENTER, CENTER)
  pg.blendMode(SCREEN)
  pg.translate(width/2, height/2)
  pg.textSize(700)

  //text color
  pg.fill(rgba[0])
  pg.text('W', -8, -4)

  pg.fill(rgba[1])
  pg.text('W', 0, 0)

  pg.fill(rgba[2])
  pg.text('W', 8, 4)

///tilesize setup
  tileSize =  height / tiles
///frame rate setup
  frameRate(30)
}

function draw(){
    // background('rgba(6, 6, 243, 1)')
  // background('rgba(3, 251, 226, 1)')
  

  let currentFrame =  frameCount % loopDuration 
  //letter wiggly motion 
  let v = currentFrame / loopDuration
  let u = map(v, 0, 1, 0.5, PI)

  // wave value
  for (let y = 0; y<tiles; y++){

    for( let x = 0; x<tiles; x++){
      const waveX = sin(currentFrame * 0.02* (x*y)* 0.01)*100
      const waveY = cos(currentFrame * 0.02* (x*y)* 0.01)*100

      const sx =  x * tileSize + waveX * sin(u)
      const sy =  y * tileSize + waveY * sin(u)

      const sw = tileSize
      const sh = tileSize

      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize

      image(pg, dx, dy, dw, dh, sx, sy, sw, sh)
      

    }
  }
}





function mousePressed() {
  saveCanvas("p5-sketche-14","png")
}



////////work cited
//font-  https://www.fontsquirrel.com/fonts/list/popular
//code reference- https://editor.p5js.org/p5user1/sketches/KGT8KMUlb
//blendmode-   https://p5js.org/reference/#/p5/blendMode
//rgba color- https://p5js.org/reference/#/p5/color
//creatgraphics- https://p5js.org/reference/#/p5/createGraphics