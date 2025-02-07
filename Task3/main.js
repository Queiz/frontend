let paintBlock = document.getElementById('paint');
let colors = [];
let colorBlocks = document.querySelectorAll('div:not(#paint)');

function chooseColor(color) {
    // Якщо блок не вибраний
    if (color.className === 'notChosen') {
        color.style.border = '3px solid blue'; // Позначаємо вибір
        color.className = 'chosen';
        colors.push(color.id); // Додаємо колір до масиву
    } else {
        // Якщо блок уже вибраний
        color.style.border = '1px solid black';
        color.className = 'notChosen';
        let index = colors.indexOf(color.id);
        if (index !== -1) {
            colors.splice(index, 1);
        }
    }


    if (colors.length === 0) {
        paintBlock.style.backgroundColor = 'white';
    } else if (colors.length === 1) {
        paintBlock.style.background = '';
        paintBlock.style.backgroundColor = colors[0];
    } else {
        paintBlock.style.background = `linear-gradient(180deg, ${colors.join(', ')})`; // Градієнт
    }
}

// Додаємо обробник події
colorBlocks.forEach(colorBlock => {
    colorBlock.addEventListener('click', () => {
        chooseColor(colorBlock);
    });
});
