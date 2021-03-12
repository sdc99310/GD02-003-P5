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

  var points = font.textToPoints('W', 200, 700, 500); //create x,y locations arrays //contents, x, y, size
  console.log(points); //call the varible

  for (var i = 0; i <points.length; i++){ ////creat all the dots following the outline of the letters
    var pt = points[i];
    stroke(300); //color
    strokeWeight(9);
    point(pt.x, pt.y);
  } // set the for loof to make dot's of outline of the text
}

// function draw() { //draw mutiple times
// }









//////sources, references, work cited
//////https://youtu.be/4hA7G3gup-4 / making multiple dots following the outline of the text using the for loop
/////https://www.fontsquirrel.com/fonts/list/popular /otf font sources