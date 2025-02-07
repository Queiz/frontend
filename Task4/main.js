let images = document.querySelectorAll('img');

function changeImage(image, textarea) {

    if (textarea.disabled) {
        textarea.disabled = false;
        image.style.border = '2px solid blue';
    }
    else {
        textarea.disabled = true;
        image.style.border = 'none';
    }
}

function deleteImage(textarea) {
    textarea.hidden = true;
}

images.forEach(image => {
    image.addEventListener('click', () => {
        let textArea = document.querySelector(`textarea.${image.className}`);

        if (image.alt === 'pencil'){
            changeImage(image, textArea);
        }

        else if (image.alt === 'delete'){
            deleteImage(textArea);
        }
    });
})