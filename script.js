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

// Disco palette (will be the color when "Disco!" button is clicked)
let colors = [
    '#0FC0FC', /* Spiro Disco Ball */
    '#7B1DAF', /* Grape */
    '#FF2FB9', /* Razzle Dazzle Rose */
    '#D4FF47', /* Maximum Green Yellow */
    '#1B3649', /* Space Cadet */ 
    '#53BE6F' /* Emerald */
];

let discoMode = false; // Disco mode is false by default

let defaultColor = 'black' // Default color
// Function to change the color of a square when hovered over
function changeSquareColor(event) {
    if (discoMode) {
        let randomColor = colors[Math.floor(Math.random() * colors.length)]; // Pick a random color from the palette
        event.target.style.backgroundColor = randomColor; // Change the background color to the random color
    } 
    else {
        event.target.style.backgroundColor = defaultColor; // black
    }
}

function toggleDiscoMode() {
    const discoButton = document.getElementById("discoButton");
    discoMode = !discoMode; // discoMode = true

    // disco mode button styling (it keeps the background color when toggled on)
    if (discoMode) {
        discoButton.style.backgroundColor = '#FF2FB9';
        discoButton.style.color = 'white';
    } else {
        discoButton.style.backgroundColor = ''; // Revert to original background color
        discoButton.style.color = ''; // Revert to original text color
    }
    clearColors(); // clear all colors when toggled on or off
}

document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.addEventListener('mouseover', changeSquareColor);
});

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

// Function to reset the squares color
function clearColors() {
    let squares = document.getElementsByClassName("singleSquare");
    Array.from(squares).forEach(square => {
        square.style.backgroundColor = '';
    });
}