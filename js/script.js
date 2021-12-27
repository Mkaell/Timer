const date = new Date();
const currentYear = date.getFullYear();
const currentMounth = date.getMonth();
const deadline = `${currentYear + 1}-01-01`;

function changeBackground(currentMounth, selector){
    const wrapper = document.querySelector(selector);
    if(currentMounth > 1 && currentMounth < 5){
        wrapper.style.background = "url('./img/spring.jpg') center center/cover no-repeat";
        document.location.reload();
    } else if(currentMounth > 4 && currentMounth < 8){
        wrapper.style.background = "url('./img/summer.jpg') center center/cover no-repeat";
        document.location.reload();
    } else if(currentMounth > 7 && currentMounth < 11){
        wrapper.style.background = "url('./img/autumn.jpg') center center/cover no-repeat";
        document.location.reload();
    } else {
        wrapper.style.background = "url('./img/winter.jpg') center center/cover no-repeat";
        document.location.reload();
    }
}

changeBackground(currentMounth, '.countdown');


function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours =  Math.floor((t / (1000 * 60 *60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
    
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.days < 0 && t.hours < 0 && t.minutes < 0 && t.seconds < 0){
            days.innerHTML = '00';
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';                                 
        }

    }

}

setClock('.timer', deadline);

