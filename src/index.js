/* eslint-disable @typescript-eslint/no-var-requires */

// eslint-disable-next-line no-undef
const moment = require('moment');
/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-undef
const visual = require('./js/visual');

/* eslint-enable @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars */
/* eslint-enable @typescript-eslint/no-var-requires */
const container = document.getElementById('container');
const runningTimer = document.getElementById('running-timer');
const bunStart = document.getElementById('start');
const bunStop = document.getElementById('stop');

bunStart.addEventListener('click', timer);
bunStop.addEventListener('click', stop);

let isStart = false;
const coefficientSeconds = 60;

async function timer (){

const input = document.getElementById("times");
const value = document.getElementById("value");

container.style.display = 'none';
runningTimer.style.display = 'flex';

let timeSeconds = input.value * coefficientSeconds;
let start = moment();
let end = moment().add(timeSeconds, 's');
let res;
isStart = true;

timer();


async function timer(){
    if(isStart){
    let hour = 0;
    let minute = 0;
    let second = 0;
    let time = 0;    
    start = moment();
    res = end.diff(start, 'second');
    time = res;
    if(time >= 3600 ){
        hour = Math.floor(time / 3600);
        time -= (3600*hour);
    }
    if(time >= 60){
        minute =  Math.floor(time/60);
        time -= (60 * minute); 
    }
    if(time > 0){
        second = time;
    }
    value.textContent = `${hour}:${minute}:${second}`;
    if(res > 0){
        setTimeout(timer, 100);
    }else{
        container.style.display = 'flex';
        runningTimer.style.display = 'none';
    }
  }
 }
}
async function stop(){
    isStart = false;
    container.style.display = 'flex';
    runningTimer.style.display = 'none';
}
