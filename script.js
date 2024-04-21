// Function to create the grid
function createGrid() {
    const gridSize = 16; /* 16x16 grid */
    const totalSquares = gridSize * gridSize;

    const container = document.getElementById("gridContainer");
    
    container.innerHTML = '' // Clear any existing content

    for(let i = 0; i < totalSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("singleSquare");
        container.appendChild(square);
    }

    container.addEventListener('mouseover', changeSquareColor);
}

// Event listener to create the grid when the DOM content is loaded
document.addEventListener("DOMContentLoaded", createGrid);

function changeSquareColor(event) {
    event.target.style.backgroundColor = 'blue';
}