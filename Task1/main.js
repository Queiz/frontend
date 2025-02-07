let table = document.querySelector('table');

let FirstName = document.getElementById('FirstName');
let LastName = document.getElementById('LastName');

let AddButton = document.querySelector('input[type=button]');

let number = 2;

function addNameToTable(){
    number++;

    if (FirstName.value !== "" && LastName.value !== ""){
        // Створюємо новий рядок
        let tr = document.createElement('tr');
        tr.textContent = number.toString();

        // Створюємо стовпець для імені
        let firstNameTd = document.createElement('td');
        firstNameTd.textContent = FirstName.value;

        // Створюємо стовпець для прізвища
        let lastNameTd = document.createElement('td');
        lastNameTd.textContent = LastName.value;

        // Додаємо стовпці в рядок, а рядок до таблиці
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        table.appendChild(tr);
    }
    else alert('Заповніть обидва рядки');
}

AddButton.addEventListener('click', addNameToTable);