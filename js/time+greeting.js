function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}
showTime()

function showDate() {
    const dateItem = document.querySelector('.date');
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    dateItem.textContent = date.toLocaleDateString('en-US', options);
}

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 6 && hours < 12) {
        return 'morning';
    } else if (hours >= 12 && hours < 18) {
        return 'afternoon';
    } else if (hours >= 0 && hours < 6) {
        return 'night';
    } else {
        return 'evening';
    }
}

function showGreeting() {
    const greeting = document.querySelector('.greeting');
    const timeOfDay = getTimeOfDay();
    greeting.textContent = `Good ${timeOfDay},`;
}

function setLocalStorage() {
    const name = document.querySelector('.name');
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    const name = document.querySelector('.name');
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)
