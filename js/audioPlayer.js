import playList from "./playList.js";

const playListContainer = document.querySelector('.play-list')

playList.forEach((el, index) => {
    el = document.createElement('li');
    el.classList.add('play-item');
    el.textContent = playList[index].title;
    playListContainer.append(el);
})

const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const current = document.querySelectorAll('.play-item');

let isPlay = false;
let playNum = 0;

const audio = new Audio();

function toggleBtn() {
    playBtn.classList.toggle('pause');
}
playBtn.addEventListener('click', toggleBtn);

function playAudio() {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    current[playNum].classList.add('item-active');
    if (!isPlay) {
       void audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
        current[playNum].classList.remove('item-active');
    }
}

playBtn.addEventListener('click', playAudio);

function playNext() {
    toggleBtn();
    if (!isPlay) {
        playNum++;
        if (playNum > 3) {
            playNum = 0;
        }
    }
    playAudio();
}

playNextBtn.addEventListener('click', playNext)

function playPrev() {
    toggleBtn();
    if (!isPlay) {
        playNum--;
        if (playNum === -1) {
            playNum = 3;
        }
    }
    playAudio();
}

playPrevBtn.addEventListener('click', playPrev)
