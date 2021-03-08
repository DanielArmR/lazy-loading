/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
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
    let number = randomImage();
    imageFox.src = `${baseUrl}${number}.jpg`;
    containerImg.append(imageFox);
    images.append(containerImg);
}
addButton.addEventListener('click', addImage);
