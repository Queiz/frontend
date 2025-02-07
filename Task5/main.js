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

let squares = document.querySelectorAll('.square');

let colorButtons = document.querySelectorAll('button');

let currentColor = null;

function chooseColor(color) {
    let selectedColor = color.style.backgroundColor; // Отримуємо реальний колір

    if (currentColor !== selectedColor) {
        color.style.border = '4px solid black';

        if (currentColor) {
            colorButtons.forEach(btn => {
                if (btn.style.backgroundColor === currentColor) {
                    btn.style.border = 'none';
                }
            });
        }

        currentColor = selectedColor; // Зберігаємо колір
    }
}

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseColor(button);
    });
});

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (currentColor) {
            square.style.backgroundColor = currentColor; // Використовуємо правильний колір
        }
    });
});
