//pre-setting 
let pg, font, tileSize
let rgba = ['rgba(255, 0, 0, 0.9', 
            'rgba(0, 255, 0, 0.9)',
             'rgba(0, 0, 255, 0.9)']

let textSize = 900
let tiles = 80

//font preload
function preload(){
  font = loadFont('font.otf')
}

function setup() {
  createCanvas(1000, 1000);
  background(300);

  pg = createGraphics(width, height)
  pg.blendMode(SCREEN)

  ///font setup
  pg.textFont(font)
  pg.textAlign(CENTER, CENTER)
  pg.translate(width / 2, height / 2)
  pg.textSize(textSize)
  //1
  pg.fill(rgba[0])
  pg.text('F',2, 2)
  //2
  pg.fill(rgba[1])
  pg.text('F', 0, 0)
  //3
  pg.fill(rgba[2])
  pg.text('F', -2, -2)
  //4
  pg.fill(rgba[2])
  pg.text('F', 2, 2)

  tileSize = width / tiles

  //frameRate
  frameRate(30)

}





// function mousePressed() {
//   saveCanvas("p5-sketche-20","png")
// }

///work cited
//font https://www.fontspace.com/contender-version-font-f53852