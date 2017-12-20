var canvas;
let canvasHeight = 300;
let canvasWidth = 600;
let bars = [];
let len = 5;


const testH = document.getElementById('test');

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(100, 200, 200);
  canvas.parent('canvas');
  noStroke();
  fill(100, 100, 250);

  let margin = 40;
  let rectH = canvasHeight - 50;
  let rectW = (canvasWidth / len) - ((margin*(len+1))/len);
  let graphNum = 5;
  for (var i = 0; i < graphNum; i++) {
    let height = rectH - random(150);
    let xStart = (margin * (i + 1) + (rectW * i));
    let yStart = canvasHeight - height;

    let bar = {
      xStart: xStart,
      xEnd: xStart + rectW,
      yStart: yStart,
      yEnd: canvasHeight,
      height: height,
      width: rectW,
      oXStart: xStart,
      oXEnd: xStart + rectW,
      oYStart: yStart,
      oYEnd: canvasHeight,
      oHeight: height,
      oWidth: rectW,
      touched: false,
      title: ""
    };
    bars.push(bar);
  }
  bars[0].title = " ding ";
  bars[1].title = " dong ";
  bars[2].title = " the witch ";
  bars[3].title = " is ";
  bars[4].title = " dead ";
}


function draw() {
  fill(100, 100, 250);

  for (let bar of bars) {
    fill(100, 100, 250);
    rect(bar.xStart, bar.yStart, bar.width, bar.height);
    textAlign(CENTER);

    fill(0);
    text(bar.title, (bar.xStart + bar.width / 2), canvasHeight - 40, 0);
  }


  handleMouseover();


}

function handleMouseover() {
  for (let bar of bars) {
    if (checkBounds(bar) && bar.width < bar.oWidth + 10) {
      bar.xStart -= 1;
      bar.width += 1;
      bar.yStart -= 4;
      bar.height += 4;
      bar.touched = true;
    }
    else {
      if (!checkBounds(bar)) {
        bar.xStart = bar.oXStart;
        bar.width = bar.oWidth;
        bar.yStart = bar.oYStart;
        bar.height = bar.oHeight;

        if (bar.touched) {
          fill(100, 200, 200);
          rect(bar.xStart - 15, bar.yStart - 50, bar.width + 30, bar.height + 50);
          bar.touched = false;
        }
      }
    }
  }
}


function mousePressed() {
  for(let bar of bars) {
    if(checkBounds(bar)) {
      console.log(bar.title);
      testH.innerHTML += bar.title;
    }
  }
}

function checkBounds(obj) {
  return mouseX > obj.xStart && mouseX < obj.xEnd && mouseY > obj.yStart && mouseY < obj.yEnd;
}
