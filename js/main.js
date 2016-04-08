var elem = document;
var hour = elem.querySelector('.hour');
var minute = elem.querySelector('.minute');
var second = elem.querySelector('.second');
var millisecond = elem.querySelector('.millisecond');
var btnStart = elem.querySelector('.btn-success');
var btnClear = elem.querySelector('.btn-danger');
var timer = 0;
var ms = 0;
var sec = 0;
var min = 0;
var hou = 0;

function bodyTimer() {
	ms ++;
	millisecond.innerHTML = ms;
	if (ms == 99) {
		ms = 0;
		sec ++;
		if ( sec < 10) {
			second.innerHTML = '0' + sec;
		}else {
			second.innerHTML = sec;
		}
		if (sec == 60) {
			sec = 0;
			second.innerHTML = '0' + sec;
			min ++;
			if ( min < 10) {
				minute.innerHTML = '0' + min;
			}else{
				minute.innerHTML = min;
			}
			if (min == 60) {
			min = 0;
			second.innerHTML = '0' + min;
			hou ++;
			if ( hou < 10) {
				hour.innerHTML = '0' + hou;
			}else{
				hour.innerHTML = hou;
			}
		}
	   }
	}
}

function startTimer() {
	timer = setInterval(bodyTimer, 10);
	btnStart.removeEventListener('click', startTimer);
    btnStart.className = 'btn btn-warning btn-lg';
    btnStart.innerHTML = 'Pause';
    btnStart.addEventListener('click', pauseTimer);
}

function pauseTimer() {
	clearTimeout(timer);
	btnStart.removeEventListener('click', pauseTimer);
	btnStart.className = 'btn btn-primary btn-lg';
    btnStart.innerHTML = 'Continue';
    btnStart.addEventListener('click', startTimer);
}

function clearTimer() {
	clearTimeout(timer);
	millisecond.innerHTML = '00';
	second.innerHTML = '00';
	minute.innerHTML = '00';
	hour.innerHTML = '00';
	ms = 0;
    sec = 0;
    min = 0;
    hou = 0;
    btnStart.className = 'btn btn-success btn-lg';
    btnStart.innerHTML = 'Start';
    btnStart.addEventListener('click', startTimer);
}

btnStart.addEventListener('click', startTimer);
btnClear.addEventListener('click', clearTimer);







