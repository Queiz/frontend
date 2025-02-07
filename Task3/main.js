let paintBlock = document.getElementById('paint');
let colors = [];
let colorBlocks = document.querySelectorAll('div:not(#paint)');

function chooseColor(color) {
    if (color.classList.contains('notChosen')) {
        color.style.border = '3px solid blue';
        color.classList.remove('notChosen');
        color.classList.add('chosen');
        colors.push(color.id);
    } else {
        color.style.border = '1px solid black';
        color.classList.remove('chosen');
        color.classList.add('notChosen');

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
        paintBlock.style.background = `linear-gradient(180deg, ${colors.join(', ')})`;
    }
}

// Додаємо обробник події
colorBlocks.forEach(colorBlock => {
    colorBlock.addEventListener('click', () => {
        chooseColor(colorBlock);
    });
});
