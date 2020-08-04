
var hr = hour();
var minute = minute();
var second = second();

angleMode(DEGREES);
function preload(){
  
}

function setup() {
  
createCanvas(400,400);

}

function draw() {  
  
  var scAngle = map (second, 0 ,60, 0, 360);
  var mnAngle = map (minute, 0 ,60, 0, 360);
  var htAngle = map (hr, 0 ,60, 0, 360);

  stroke(255, 0, 0);
  StrokeWeight(7);
  line(0, 0, 100, 0);

  drawSprites();
}

