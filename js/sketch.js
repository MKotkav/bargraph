var canvas;
let canvasHeight = 300;
let canvasWidth = 600;
let arr = []
const testH = document.getElementById('test');

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(100, 200, 200);
  noStroke();
  fill(100, 100, 250);

  let rectH = canvasHeight - 50;
  let rectW = canvasWidth / 6;
  let margin = rectW / 10;
  let graphNum = 5;
  for(var i = 0; i < graphNum; i++ ) {
    let height = rectH - random(150);
    let xStart = (margin * (i + 1 ) + (rectW * i));
    let yStart = canvasHeight - height;
    rect(xStart, yStart, rectW, height);
    let obj = {
      xStart : xStart,
      xEnd : xStart + rectW,
      yStart : yStart,
      yEnd : canvasHeight
    };
    arr.push(obj);
  }
}

function draw() {

}

function mousePressed() {
  if (checkBounds(arr[0])) {
    console.log('ding');
    testH.innerHTML += 'ding ';
  }
  if (checkBounds(arr[1])) {
    console.log('dong');
    testH.innerHTML += ' dong';
  }
  if (checkBounds(arr[2])) {
    console.log('the witch');
    testH.innerHTML += ' the witch';
  }
  if (checkBounds(arr[3])) {
    console.log('is');
    testH.innerHTML += ' is';
  }
  if (checkBounds(arr[4])) {
    console.log('dead');
    testH.innerHTML += ' dead';
  }
}

function checkBounds(obj) {
  return mouseX > obj.xStart && mouseX < obj.xEnd && mouseY > obj.yStart && mouseY < obj.yEnd;
}
