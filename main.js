const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

if (hours <= 9) {
    hoursEl.innerText = '0' + hours;
} else {
    hoursEl.innerText = hours;
}

if (minutes <= 9) {
    minutesEl.innerText = '0' + minutes;
} else {
    minutesEl.innerText = minutes;
}

if (seconds <= 9) {
    secondsEl.innerText = '0' + seconds;
} else {
    secondsEl.innerText = seconds;
}

setInterval(() => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    if (hours > 12) {
        hours = hours - 12;
        hoursEl.innerText = hours;
    }

    if (hours <= 9) {
        hoursEl.innerText = '0' + hours;
    }

    if (minutes <= 9) {
        minutesEl.innerText = '0' + minutes;
    } else {
        minutesEl.innerText = minutes;
    }

    if (seconds <= 9) {
        secondsEl.innerText = '0' + seconds;
    } else {
        secondsEl.innerText = seconds;
    }
}, 1000);
