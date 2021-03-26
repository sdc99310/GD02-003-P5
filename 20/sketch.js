//pre-setting 
let pg, font, tileSize
let rgba = ['rgba(255, 0, 0, 0.9', 
            'rgba(0, 255, 0, 0.9)',
             'rgba(0, 0, 255, 0.9)']

let textSize = 1500
let tiles = 80

//font preload
function preload(){
  font = loadFont('font.otf')
}

function setup() {
  createCanvas(1000, 1000);
  
  pg = createGraphics(width, height)//graphic
  pg.blendMode(SCREEN)//colormode

  ///font setup
  pg.textFont(font)
  pg.textAlign(CENTER, CENTER)
  pg.translate(width / 2, height / 3)//location
  pg.textSize(textSize)
  //1
  pg.fill(rgba[0])
  pg.text('W',2, 2)
  //2
  pg.fill(rgba[1])
  pg.text('w', 0, 0)
  //3
  pg.fill(rgba[2])
  pg.text('W', -2, -2)
  //4
  pg.fill(rgba[2])
  pg.text('W', 2, 2)

  tileSize = width / tiles

  //frameRate
  frameRate(30)
}

function draw(){
  background('rgba(0, 0, 0, 0.3)')

  //tile for loop
  for (let y = 0; y < tiles; y++){
    for (let x = 0; x < tiles; x++) {
      //wave motion 1,2
      let wave1 = floor(tan((frameCount + (((tiles - y) * 0.025) * (tiles - x))) * 0.0125) * 50) //going back
      let wave2 = floor(sin((frameCount + (((tiles - y) * 0.025) * x)) * 0.025) * 15)//come from the left

      //set the tilesize motion with wave
      const sx = x * tileSize + wave2 
      const sy = y * tileSize  + wave2 

      const sw = tileSize - 10//gradually move down
      const sh = tileSize - 10
      
      const dx = x * tileSize + wave1
      const dy = y * tileSize + wave1
      const dw = tileSize 
      const dh = tileSize 
      
      image(pg, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}


// function mousePressed() {
//   saveCanvas("p5-sketche-20","png")
// }

///work cited
//font https://www.fontspace.com/contender-version-font-f53852