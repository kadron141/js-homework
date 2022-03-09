const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const clock = document.getElementById('clock-placeholder');

let currentTime = 0;
let intervalRunner;

const addZero = (time) => {
    return time <= 9 ? `0${time}` : time;
}

const formatTime = (timeInSeconds) => {
    const minutes = parseInt(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${addZero(minutes)} : ${addZero(seconds)}`;
}

startButton.addEventListener('click', () => {
    intervalRunner = setInterval(() => {
        currentTime++;
        clock.innerHTML = formatTime(currentTime);
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalRunner);
});