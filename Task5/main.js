const gridContainer = document.getElementById('grid-container');
const rows = 8;  // Кількість рядків
const cols = 8;  // Кількість колонок

// Функція для створення сітки
function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');  // Створення div
        square.classList.add('square');
        gridContainer.appendChild(square);
    }
}

createGrid(rows, cols);

let squares = document.querySelectorAll('.square')

let colorButtons = document.querySelectorAll('button')

let currentColor;

function chooseColor(color) {
    if (currentColor !== color.id){
        color.style.border = '4px solid black';

        if (currentColor) {
            document.getElementById(currentColor).style.border = 'none';
        }

        currentColor = color.id;
    }
}

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseColor(button);
    });
})

squares.forEach(square => {
    square.addEventListener('click', () => {
        square.style.backgroundColor = currentColor;
    })
})