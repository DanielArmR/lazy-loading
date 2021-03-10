import { registerImage } from './lazy';

const baseUrl = `https://randomfox.ca/images/`;
const addButton = document.querySelector('#addB');
const images = document.querySelector('#images');

const randomImage = () => Math.round(Math.random() * (122 - 1)) + 1;


const addImage = () =>{
    const containerImg = document.createElement('figure');
    const imageFox = document.createElement('img');
    containerImg.className = 'p-4';
    imageFox.className = 'fox-image mx-auto rounded-lg';
    imageFox.alt = 'Fox';
    imageFox.dataset.src = `${baseUrl}${randomImage()}.jpg`;
    containerImg.append(imageFox);
    images.append(containerImg);
    registerImage(containerImg);
    appendImgs++;
    logImgs();
}

addButton.addEventListener('click', addImage);

const cleanImages = () => {
    let images = document.querySelectorAll('figure');
    let imagesArray = [...images];
    imagesArray.forEach((image) => image.remove());
    appendImgs = 0;
    loadImages = 0;
    console.clear();
}
const cleanButton = document.querySelector('#clean');
cleanButton.addEventListener('click', cleanImages);