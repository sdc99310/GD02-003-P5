var font; //creat font

function preload(){ //loading page
  font =  loadFont('font.otf'); //load the font file
}


function setup() { //draw once
  createCanvas(1000, 1000); //width & hight in pixels
  background(0); // color 0(black) to 100(white)
  // textFont(font); // call textfont
  // textSize(500); //size px
  // fill(); //text color //? when the color value is 100, it's grey. guess background color effected?
  // text('W', 200, 700); //contents of text, x, y location

  //doesn't need to draw the text anymore!


  var points = font.textToPoints('W', 140, 740, 500); //create x,y locations arrays //contents, x, y, size
  console.log(points); //call the varible

  for (var i = 0; i <points.length; i++){ ////creat all the dots following the outline of the letters
    var pt = points[i];
    stroke(30); //color
    strokeWeight(9);
    point(pt.x, pt.y);
  } // set the for loof to make dot's of outline of the text


  var points = font.textToPoints('W', 160, 720, 500); //create x,y locations arrays //contents, x, y, size
  console.log(points); //call the varible

  for (var i = 0; i <points.length; i++){ ////creat all the dots following the outline of the letters
    var pt = points[i];
    stroke(50); //color
    strokeWeight(9);
    point(pt.x, pt.y);
  } // set the for loof to make dot's of outline of the text


  var points = font.textToPoints('W', 180, 700, 500); 
  console.log(points)

  for (var i = 0; i <points.length; i++){
    var pt = points[i];
    stroke(100); 
    strokeWeight(9);
    point(pt.x, pt.y);
  }


var points = font.textToPoints('W', 200, 680, 500); 
  console.log(points)

  for (var i = 0; i <points.length; i++){ 
    var pt = points[i];
    stroke(150);
    strokeWeight(9);
    point(pt.x, pt.y);
  } 


 var points = font.textToPoints('W', 220, 660, 500); 
  console.log(points)

  for (var i = 0; i <points.length; i++){ 
    var pt = points[i];
    stroke(200);
    strokeWeight(9);
    point(pt.x, pt.y);
  } 

  var points = font.textToPoints('W', 240, 640, 500); 
  console.log(points)

  for (var i = 0; i <points.length; i++){ 
    var pt = points[i];
    stroke(250);
    strokeWeight(9);
    point(pt.x, pt.y);
  } 

}

function draw() {
}









//////sources, references, work cited
//////https://p5js.org/ko/examples/typography-words.html /text
//////https://youtu.be/4hA7G3gup-4 / making multiple dots following the outline of the text using the for loop
//////https://www.fontsquirrel.com/fonts/list/popular /otf font sources