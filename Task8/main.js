let books = document.querySelectorAll('div');

let currentBook;

function bookClick(book) {
    if (currentBook !== book.id){
        book.style.backgroundColor = 'lightgreen';

        if (currentBook) {
            document.getElementById(currentBook).style.backgroundColor = 'white';
        }

        currentBook = book.id;
    }
}

books.forEach(book => {
    book.addEventListener('click', () =>{
        bookClick(book);
    });
})