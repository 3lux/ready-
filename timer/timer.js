function update(){
	rawTime += 0.01
	cleanTime = cleanTimes(rawTime.toString());
	output.innerHTML = cleanTime;
}

function start(){
	output.innerHTML = "0.00";
	rawTime = 0;
	isOn = true;
	startBtn.innerHTML = "stop";
	interval = setInterval(update, 10);
	setTimeout(stop, 600000);
}

function stop(){
	clearInterval(interval);
	isOn = false;
	startBtn.innerHTML = "start";
}

function cleanTimes(time){ 
	return time;

}