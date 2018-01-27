var canvas;
let canvasHeight = 250;
let canvasWidth = 400;
let margin = 20;
let topMargin = 30;
let projectArr = getProjects();


const testH = document.getElementById('test');

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(100, 200, 200);
  canvas.parent('canvas');
  noStroke();
  fill(100, 100, 250);

  setBarHeight(projectArr);
  setBarWidth(projectArr);

  for(var i = 0; i < projectArr.length; i++) {
    projectArr[i].xStart = (margin * (i + 1) + (projectArr[i].width * i));
    projectArr[i].yStart = (canvasHeight - projectArr[i].height);
    projectArr[i].oXStart = projectArr[i].xStart;
    projectArr[i].oYStart = projectArr[i].yStart;
    projectArr[i].oHeight = projectArr[i].height;
    projectArr[i].oWidth = projectArr[i].width;
    projectArr[i].touched = false;
    projectArr[i].active = false;
  }

  projectArr[0].active = true;
}


function draw() {
  fill(100, 100, 250);

  for (let bar of projectsArr) {
    if(bar.active) {
      fill(180, 255, 100);
      rect(bar.xStart, bar.yStart, bar.width, bar.height);
      if(testH.innerHTML = " ") {
        showProjects(bar.projects);
      }
    }
    else {
      fill(100, 100, 250);
      rect(bar.xStart, bar.yStart, bar.width, bar.height);

    }
    textAlign(CENTER);
    fill(0);
    text(bar.type, (bar.xStart + bar.width / 2), canvasHeight - 40, 0);
  }
  handleMouseover();
}

function setBarHeight(arr) {
  let maxFreq = 0;
  for(let item of arr) {
    if(item.projects.length > maxFreq) {
      maxFreq = item.projects.length;
    }
  }
  let unitHeight = (canvasHeight - topMargin) / maxFreq;

  for(let bar of arr) {
    bar.height = bar.projects.length * unitHeight;
    console.log(bar.height);
  }
}

function setBarWidth(arr) {
  let width = (canvasWidth / arr.length) - ((margin * (arr.length + 1)) / arr.length);
  for(let item of arr) {
    item.width = width;
  }
}

function handleMouseover() {
  for (let bar of projectArr) {
    if (checkBounds(bar) && bar.width < bar.oWidth + 10) {
      bar.xStart -= 1;
      bar.width += 2;
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
  for(let bar of projectArr) {
    if(checkBounds(bar)) {
      console.log(bar.type);
      testH.innerHTML = "";
      // let heading = document.createElement('h1');
      // let text = document.createTextNode(bar.type);
      // heading.appendChild(text);
      // testH.appendChild(heading);
      // testH.innerHTML += bar.title;

      showProjects(bar.projects);

      bar.active = true;
    }
    else {
      for(let bar2 of projectArr) {
        if(checkBounds(bar2)) {
          bar.active = false;
        }
      }
    }
  }
}

function showProjects(arr) {
  for(var i = 0; i < arr.length; i++) {
    let div = document.createElement('div');
    let heading = document.createElement('h1');
    let title = document.createTextNode(arr[i].name);
    let description = document.createElement('p');
    let descriptionTxt = document.createTextNode(arr[i].description);
    let img = document.createElement('img');
    img.src = arr[i].img;
    img.setAttribute('width', '100%');
    img.height = 100;


    heading.appendChild(title);
    description.appendChild(descriptionTxt);
    div.appendChild(img);
    div.appendChild(heading);
    div.appendChild(description);
    testH.appendChild(div);
  }


}

function checkBounds(obj) {
  let xEnd = obj.xStart + obj.width;
  return mouseX > obj.xStart && mouseX < xEnd && mouseY > obj.yStart && mouseY < canvasHeight;
}
