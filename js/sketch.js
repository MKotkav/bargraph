var canvas;
let canvasHeight = 300;
let canvasWidth = 600;
let arr = [];
let arrB = [];
let touched = false;
const testH = document.getElementById('test');

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(100, 200, 200);
  noStroke();
  fill(100, 100, 250);

  let rectH = canvasHeight - 50;
  let rectW = canvasWidth / 12;
  let margin = 30;
  let graphNum = 5;
  for (var i = 0; i < graphNum; i++) {
    let height = rectH - random(150);
    let xStart = (margin * (i + 1) + (rectW * i));
    let yStart = canvasHeight - height;
    //    rect(xStart, yStart, rectW, height);
    let obj = {
      xStart: xStart,
      xEnd: xStart + rectW,
      yStart: yStart,
      yEnd: canvasHeight,
      height: height,
      width: rectW
    };
    let obj2 = {
      xStart: xStart,
      xEnd: xStart + rectW,
      yStart: yStart,
      yEnd: canvasHeight,
      height: height,
      width: rectW
    };
    arr.push(obj);
    arrB.push(obj2);
  }
}


function draw() {
  fill(100, 100, 250);

for(var i = 0; i < arrB.length; i++) {
  rect(arrB[i].xStart, arrB[i].yStart, arrB[i].width, arrB[i].height);
}
  //
  // rect(arrB[0].xStart, arrB[0].yStart, arrB[0].width, arrB[0].height);
  // rect(arrB[1].xStart, arrB[1].yStart, arrB[1].width, arrB[1].height);
  // rect(arrB[2].xStart, arrB[2].yStart, arrB[2].width, arrB[2].height);
  // rect(arrB[3].xStart, arrB[3].yStart, arrB[3].width, arrB[3].height);
  // rect(arrB[4].xStart, arrB[4].yStart, arrB[4].width, arrB[4].height);

  handleMouseover();
}

function handleMouseover() {
  let obj = arrB[0];
  let obj2 = arr[0];
  if (checkBounds(obj) && obj.width < obj2.width + 10) {
    obj.xStart -= 1;
    obj.width += 1;
    obj.yStart -= 2;
    obj.height += 2;
    touched = true;
  } else {
    if (!checkBounds(obj)) {
      obj.xStart = obj2.xStart;
      obj.width = obj2.width;
      obj.yStart = obj2.yStart;
      obj.height = obj2.height;
      if (touched) {
        fill(100, 200, 200);
        rect(obj.xStart-15, obj.yStart-25, obj.width + 15, obj.height + 25);
        touched = false;
      }
    }
  }
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
