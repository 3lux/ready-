var startBtn = document.getElementById("startTimer");
var rawTime = 0;
var isOn = false;
var output = document.getElementById("timerDisplay");
var timeSplit;
var spaceStarts = true;
var seconds;

function update(){
	rawTime += 0.01
	cleanTime = clean(rawTime.toString(), 1);
	//console.log(cleanTime);
	output.innerHTML = cleanTime;
}

function start(){
	output.innerHTML = "0.00";
	rawTime = 0;
	isOn = true;
	startBtn.innerHTML = "stop";
	interval = setInterval(update, 10);
}

while (isOn){
	update();
}

function stop(){
	final = Math.round(rawTime * 100) / 100;
	var result;
	var mins = Math.floor(final / 60);
	var secs = final - Math.floor(final / 60) * 60;
	var lastpart = (((Math.round(final) * 100) / 100) % 1) + secs;
	if(final > 60){
		result = mins + ":" + Math.round(lastpart * 100) / 100;
	}else if(final >= 10){
		result = "0.00";
	}else{
		result = final;
	}
	output.innerHTML = result;
	clearInterval(interval);
	isOn = false;
	startBtn.innerHTML = "start";
}

function clean(time, points){
	timeSplit = time.split("");
	var num = Number(timeSplit.join().replace(/,/g, ""));
	var secs = Math.floor(num);
	var mins = Math.floor(secs / 60);
	secs = secs - mins * 60;
	if(points == 1){
		if(mins > 0){
			//var lastpart = ((Math.round(num * 100) / 100) % 1) + secs;
			return mins + ":" + secs;//Math.round(lastpart * 100) / 100;
		}else if(mins == 10){
			stop();
		}else{
			return Math.floor(num);
		}
	}else if(points == 2){
		if(mins > 0){
			var lastpart = ((Math.round(num * 100) / 100) % 1) + secs;
			return mins + ":" + Math.round(lastpart * 100) / 100;
		}else if(mins == 10){
			stop();
		}else{
			return Math.round(num * 100) / 100;
		}
	}
}

startBtn.addEventListener('click', function(){
	if (isOn){
		stop();
	}else{
		start();
	}
});

document.body.onkeyup = function(e){
	if(e.keyCode == 32){
		if (isOn){
			stop();
		}else{
			start();
		}
	}
}