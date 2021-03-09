/* Intersection Observer */
const isIntersecting = (entry) => entry.isIntersecting; //Devuelve tru si está dentro de la pantalla

const loadImgs = (entry) => {
    const container = entry.target; //FIGURE
    const img = container.firstChild;
    const url = img.dataset.src;
    img.src = url;
    loadImages++;
    logImgs();
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImgs)
});

export const registerImage = (image) => {
    observer.observe(image);
}