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

// Function to resize the grid when the button is clicked
function resizeGrid() {
    // Asks for the user input (gridSize: numberOfSquares x numberOfSquares)
    const numberOfSquares = prompt("Enter the number of squares per side for the new grid (maximum: 100): ");

    // Check if the input is valid
    if (numberOfSquares > 0 && numberOfSquares <= 100 && numberOfSquares !== null && numberOfSquares !== '') {
        // Calculate the total number of squares
        const totalNumberOfSquares = numberOfSquares * numberOfSquares;
        // Calculate the size of each square to fit within the same width (800px)
        const squareSize = 800 / numberOfSquares;

        const container = document.getElementById("gridContainer");
        // Clears the existing grid
        container.innerHTML = '';

        // Generate the new grid
        for(let i = 0; i < totalNumberOfSquares; i++) {
            let square = document.createElement("div");
            square.classList.add("singleSquare");
            // Changes the square width and height based on the previous calculated number
            square.style.width = `${squareSize}px`
            square.style.height = `${squareSize}px`
            // Appends the squares with recalculated sizes to the grid
            container.appendChild(square);
        }
        
    } else {
        // Error message if the input is invalid
        alert("Please enter a valid number.");
    }
}

function clearColors() {
    const container = document.getElementById("gridContainer");
    container.innerHTML = ""
}