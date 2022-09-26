const timeOfDay = getTimeOfDay();
const body = document.querySelector('body');

async function getLinkToImage() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&query=nature&client_id=0Bi_GHHxxaYO99PdmmsjPdcKrstUaT6L7A_IepOwsf8`;
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    img.src = data.urls.regular;
    img.onload = () => {
        body.style.backgroundImage = "url('"+img.src+"')";
    };
}
void getLinkToImage();

const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', getLinkToImage)

const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', getLinkToImage)
