//pre-setting 
let pg, font, tileSize
let rgba = ['rgba(255, 0, 0, 0.9', 
            'rgba(10, 155, 2, 0.9)',
            'rgba(0, 0, 255, 0.9)']

let textSize = 1000
let tiles = 95

    ////background gradient
      const Y_AXIS = 1;
      const X_AXIS = 2;
      let b1, b2, c1, c2;

//font preload
function preload(){
  font = loadFont('SEASRN__.ttf')
}

function setup() {
  createCanvas(1000, 1000);
  
  pg = createGraphics(width, height)//graphic
  pg.blendMode(SCREEN)//colormode
  blendMode(BLEND)

//gradient color set
  // c1 = color(2252, 255, 1);
  // c2 = color(205, 11, 255);

  c1 = color(205, 11, 255);
  c2 = color(176, 255, 54);


//   background: rgba(176, 255, 54, 1.0);
// background: -webkit-linear-gradient(bottom, rgba(176, 255, 54, 1.0), rgba(205, 11, 255, 1.0));
// background: -moz-linear-gradient(bottom, rgba(176, 255, 54, 1.0), rgba(205, 11, 255, 1.0));
// background: linear-gradient(to top, rgba(176, 255, 54, 1.0), rgba(205, 11, 255, 1.0));



 ///font setup
  pg.textFont(font)
  pg.textAlign(CENTER, CENTER)
  pg.translate(width / 2, height / 3)//location
  pg.textSize(textSize)
  //1
  pg.fill(rgba[0]) //rgba(255, 0, 0, 0.9
  pg.text('W',2, 2)
  //2
  pg.fill(rgba[1]) //rgba(0, 255, 0, 0.9)
  pg.text('w', 0, 0)
  //3
  pg.fill(rgba[2]) //'rgba(0, 0, 255, 0.9)'
  pg.text('W', -50, -50)
  //4
  pg.fill(rgba[2]) //'rgba(0, 0, 255, 0.9)'
  pg.text('W', 10, 10)

  tileSize = width / tiles

  //frameRate
  frameRate(30)
}

function draw(){
  setGradient(0, 0, width , height, c1, c2, Y_AXIS);

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

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

function mousePressed() {
  saveCanvas("p5-sketche-20","png")
}

///work cited
//font https://www.fontspace.com/contender-version-font-f53852
//gradient https://p5js.org/ko/examples/color-linear-gradient.html