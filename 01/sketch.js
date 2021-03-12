var font; //creat font

function preload(){ //loading page
  font =  loadFont('font.otf'); //load the font file
}


function setup() { //draw once
  createCanvas(1000, 1000); //width & hight in pixels
  background(0); // color 0(black) to 100(white)
  textFont(font); // call textfont
  textSize(500); //size px
  fill(300); //text color //? when the color value is 100, it's grey. guess background color effected?
  text('W', 200, 700); //contents of text, x, y location

  var points = font.textToPoints('W', 200, 700); //create x,y locations arrays
  console.log(points); //call the varible

  // for (var i = 0; i <points.length; i++){
  //   var pt = points[i];
  //   storke(0,255,0);
  //   strokeWeight(4);
  //   point(pt.x, pt.y);
  // }
}

// function draw() { //draw mutiple times
// }










/////otf font sources
/////https://www.fontsquirrel.com/fonts/list/popular