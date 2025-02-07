let images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', () => {

        image.classList.add('rotate');

        let imageName = image.src.split('/').pop();

        setTimeout(() => {
            if (imageName === 'rubashka.jpg') {
                image.src = `${image.alt}.png`;
            } else {
                image.src = `rubashka.jpg`;
            }

            image.classList.remove('rotate');
        }, 1000);
    })
})