const container = document.getElementById('container');

function createGrid(size) {
    container.innerHTML = ''; // Clear the container

    const containerSize = Math.min(window.innerWidth, window.innerHeight) * 0.8; // 80% of the smaller dimension
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    const squareSize = containerSize / size; // Calculate the size of each square

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.appendChild(div);
    }
}

createGrid(16); // Initial grid creation

container.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('grid-square')) {
        e.target.style.backgroundColor = '#000'; // Change color on hover
    }
});

const button = document.getElementById('resize-button');

button.addEventListener('click', function () {
    let size = parseInt(prompt("Enter the number of squares per side (max 100):"));
    if (isNaN(size) || size < 1) {
        alert("Please enter a valid number.");
        return;
    }
    if (size > 100) size = 100;
    createGrid(size);
});

window.addEventListener('resize', () => {
    const size = Math.sqrt(container.childElementCount); // Recalculate the current grid size
    createGrid(size); // Adjust grid size on window resize
});
