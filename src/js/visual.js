const input = document.getElementById('times'); 
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');

buttonPlus.addEventListener('click', plusOneMinute);
buttonMinus.addEventListener('click', minusOneMinute);


let interval;
addingEvents();

function addingEvents(){
  buttonPlus.addEventListener('mousedown', startIntervalPlus);
  buttonPlus.addEventListener('mouseup', stopIntervalPlus);
  buttonPlus.addEventListener('mouseleave', stopIntervalPlus);
  buttonMinus.addEventListener('mousedown', startIntervalMinus);
  buttonMinus.addEventListener('mouseup', stopIntervalMinus);
  buttonMinus.addEventListener('mouseleave', stopIntervalMinus);
}
async function startIntervalPlus(){
    interval = setInterval(plusOneMinute, 100);
}
async function startIntervalMinus(){
    interval = setInterval(minusOneMinute, 100);
}
async function stopIntervalPlus(){
    clearInterval(interval);
}
async function stopIntervalMinus(){
    clearInterval(interval);
}
async function plusOneMinute(){
input.stepUp();
}
async function minusOneMinute(){
input.stepDown();
}