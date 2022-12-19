"use strict"

let SPAN_HOURS = document.querySelector('span#hours');
let SPAN_MINUTES = document.querySelector('span#minutes');
let SPAN_SECONDS = document.querySelector('span#seconds');

//Cálculos en ms (millisegundos)
let MILLISECONDS_OF_A_SECOND = 1000;
let MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
let MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
let MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

//FUNCIONES

function start() {
    //Cálculos de tiempo
    let NOW = new Date()
    let DURATION = DATE_TARGET - NOW;
    let REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    let REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    let REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
}

updateCountdown();
//Reiniciar cada segundo
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);