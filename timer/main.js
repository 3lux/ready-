var startBtn = document.getElementById("startTimer");
var rawTime = 0;
var isOn = false;
var output = document.getElementById("timerDisplay");
var timeSplit;
var spaceStarts = true;
var seconds;

function update(){
	rawTime += 0.01
	cleanTime = clean(rawTime.toString());
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
	clearInterval(interval);
	isOn = false;
	startBtn.innerHTML = "start";
}

function clean(time){
	timeSplit = time.split("");
	var num = Number(timeSplit.join().replace(/,/g, ""));
	var secs = Math.round(num * 1) / 1;
	var mins = Math.floor(secs / 60);
	secs = secs - mins * 60;
	if(mins > 0){
		return mins + ":" + (Math.round(((Math.round(num * 100) / 100) % 1) * 100) / 100 + secs);
	}else{
		return Math.round(num * 100) / 100;
	}
}

startBtn.addEventListener('click', function(){
	if (isOn){
		stop();
	}else{
		start();
	}
});

/*document.body.onkeyup = function(e){
	if(e.keyCode == 32){
		if (isOn){
			stop();
			console.log('stopping');
		}else{
			start();
			console.log('starting');
		}
	}
}*/