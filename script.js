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

    // Add a mouseover event listener to the container that triggers changeSquareColor function
    container.addEventListener('mouseover', changeSquareColor);
}

// Event listener to create the grid when the DOM content is loaded
document.addEventListener("DOMContentLoaded", createGrid);

// Function to change the color of a square when hovered over
function changeSquareColor(event) {
    event.target.style.backgroundColor = 'blue'; // Change the background color of the target (gridContainer) element
}