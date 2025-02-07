let table = document.querySelector('table');
let textArea = document.querySelector('textarea');

function createTable() {
    // Очищаємо попередню таблицю
    table.innerHTML = '';

    // Отримуємо текст і розділяємо на символи
    let symbols = textArea.value.split('');

    let row = document.createElement('tr'); // Починаємо новий рядок

    symbols.forEach(symbol => {
        if (symbol === '1') {
            // Створюємо чорну клітинку
            let col = document.createElement('td');
            col.style.backgroundColor = 'black';
            row.appendChild(col);
        }

        else if (symbol === '0') {
            // Створюємо білу клітинку
            let col = document.createElement('td');
            row.appendChild(col);
        }

        else if (symbol === '\n') {
            // Додаємо рядок до таблиці і починаємо новий
            table.appendChild(row);
            row = document.createElement('tr');
        }
    });

    // Додаємо останній рядок, якщо він не порожній
    if (row.children.length > 0) {
        table.appendChild(row);
    }
}

// Додаємо слухач події
textArea.addEventListener('input', createTable);
