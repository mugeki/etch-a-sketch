const gridContainer = document.querySelector("#grid-container");
const buttons = document.querySelectorAll(".btn");

function makeGrid(size) {
	if (gridContainer.childElementCount > 0) {
		delGrid();
	}
	gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
	for (let i = 0; i < size * size; i++) {
		const newGrid = document.createElement("div");
		newGrid.classList.add("grid");
		newGrid.setAttribute("onmouseover", "randColor(this)");
		gridContainer.appendChild(newGrid);
	}
}

function delGrid() {
	let size = gridContainer.childElementCount;
	for (let i = 0; i < size; i++) {
		gridContainer.removeChild(gridContainer.childNodes[0]);
	}
}

function randColor(element) {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	element.style.backgroundColor = `rgb(${r},${g},${b})`;
}

makeGrid(16);
