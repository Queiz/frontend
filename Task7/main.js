let name = document.getElementById('nameInput');

let comment = document.getElementById('comment');

let button = document.querySelector('button');

let h1 = document.querySelector('h1')

function addComment() {
    if (name.value !== "" && comment.value !== "") {
        let container = document.createElement('div');
        container.classList.add('container');

        let username = document.createElement('span')
        username.textContent = name.value;

        let currentDate = document.createElement('span')

        let date = new Date();

        currentDate.textContent = date.toLocaleString('uk-UA', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        });

        let userComment = document.createElement('div');
        userComment.textContent = comment.value;

        container.appendChild(username);
        container.appendChild(currentDate);

        let br = document.createElement('br');

        h1.parentNode.insertBefore(container, h1);
        h1.parentNode.insertBefore(userComment, h1);
        h1.parentNode.insertBefore(br, h1);
    }

    else {
        alert('Заповніть обидва рядки!')
    }
}

button.onclick = addComment;