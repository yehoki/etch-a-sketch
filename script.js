let container = document.querySelector(".container");
let eraser = 0;
let gridNumber = 16;
let grid = 0;
let rainbow = 0;

function makeGrid() {
  document.querySelector(
    "#change-grid"
  ).textContent = `${gridNumber}x${gridNumber}`;

  if (grid === 1) {
    removeContainerChildren();
  }
  for (let i = 0; i < gridNumber; i++) {
    let squareBox = document.createElement("div");
    squareBox.setAttribute("class", "big-square");
    for (let j = 0; j < gridNumber; j++) {
      let anotherSquareBox = document.createElement("div");
      anotherSquareBox.setAttribute("class", "square");
      squareBox.appendChild(anotherSquareBox);
    }
    container.appendChild(squareBox);
  }
  makeEventListeners();
  grid = 1;
}

makeGrid();

// eventlistener for hover and change colour callback function inside

function makeEventListeners() {
  let squares = [...document.querySelectorAll(".square")];
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      //square.style.cssText = 'background: black';
      if (eraser === 0 && rainbow === 0) {
        square.style.background = "black";
      } else if (eraser === 0 && rainbow === 1) {
        square.style.background = getRainbow();
      } else if (eraser === 1) {
        square.style.background = "white";
      }
    });
  });
}

// Eraser enable/disable button
let eraseButton = document.querySelector("#eraser");
eraseButton.addEventListener("click", () => {
  eraser = (eraser + 1) % 2;
});

// Grid layout change
let btn = document.querySelector("#change-grid");
btn.addEventListener("click", () => {
  let newGridNumber = parseInt(
    prompt("Please enter a new grid number <= 100:")
  );
  if (
    typeof newGridNumber === "number" &&
    newGridNumber <= 100 &&
    newGridNumber > 0
  ) {
    gridNumber = newGridNumber;
    makeGrid();
  } else {
    alert("Please try again");
  }
});

function removeContainerChildren() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Makes rainbow colours

let getRainbow = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green}, ${blue})`;
};

let rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
    rainbow = (rainbow + 1) % 2;
})