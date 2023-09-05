// alert("nfvjf");
var canvasEl = document.getElementById("Canvas");
const arrowLength = 50;
const screenPadding = 90;
const canvasW = window.innerWidth - screenPadding;
var arrowStartX = 898;
var arrowEndX = 848;
const arrowStartY = 70;
canvasEl.setAttribute("width", canvasW);
canvasEl.setAttribute("height", window.innerHeight - screenPadding);
var context = canvasEl.getContext("2d");

// draw circle

const drawCircle = (x, y, radius, color) => {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 4;
  context.stroke();
};

//arrow line

const drawLine = (x1, y1, x2, y2) => {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
};

const drawHead = (headStartX, headStartY, arrowEndX, arrowEndY) => {
  const dx = headStartX - arrowEndX;
  const dy = headStartY - arrowEndY;

  context.beginPath();
  context.moveTo(headStartX + dy, headStartY - dx);
  context.lineTo(headStartX - dy, headStartY + dx);
  context.lineTo(arrowEndX, arrowEndY);
  context.closePath();
  context.fillStyle = "black";
  context.fill();
};

// Draws arrow

const drawArrow = (x1, y1, x2, y2) => {
  const color = "black";
  context.lineWidth = 6;
  context.strokeStyle = color;

  const shaftSizeInPercentage = 0.7;
  const dx = x1 - x2;
  const dy = y1 - y2;
  const headStartX = x1 - dx * shaftSizeInPercentage;
  const headStartY = y1 - dy * shaftSizeInPercentage;

  drawLine(x1, y1, headStartX, headStartY);

  drawHead(headStartX, headStartY, x2, y2);
};

const circleRadius = 50;

//call function for shapes
drawArrow(arrowStartX, arrowStartY, arrowEndX, arrowStartY);
drawCircle(screenPadding + circleRadius, arrowStartY, circleRadius, "green");

///hit

const hit = document.getElementById("hit");
const reset = document.getElementById("reset");
hit.addEventListener("click", () => {
  if (arrowStartX === 348) {
    drawCircle(screenPadding + circleRadius, arrowStartY, circleRadius, "red");
    arrowStartX = arrowStartX - 110;
    arrowEndX = arrowEndX - 110;

    drawArrow(arrowStartX, arrowStartY, arrowEndX, arrowStartY);
    context.clearRect(arrowStartX, 70, 120, arrowStartY);
    context.clearRect(arrowStartX, 0, 120, arrowStartY);
    console.log(arrowStartX, arrowEndX, arrowStartY);
  } else if (arrowStartX >= 348) {
    arrowStartX = arrowStartX - 110;
    arrowEndX = arrowEndX - 110;

    drawArrow(arrowStartX, arrowStartY, arrowEndX, arrowStartY);
    context.clearRect(arrowStartX, 70, 120, arrowStartY);
    context.clearRect(arrowStartX, 0, 120, arrowStartY);
  }
});

///restart
reset.addEventListener("click", () => {
  context.clearRect(arrowStartX - 110, 70, 120, arrowStartY);
  context.clearRect(arrowStartX - 110, 0, 120, arrowStartY);
  arrowStartX = 898;
  arrowEndX = 848;
  drawCircle(screenPadding + circleRadius, arrowStartY, circleRadius, "green");
  drawArrow(arrowStartX, arrowStartY, arrowEndX, arrowStartY);
});
