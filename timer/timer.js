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
}

function stop(){
	clearInterval(interval);
	isOn = false;
	startBtn.innerHTML = "start";
}

function cleanTimes(time){ 
	timeSplit = time.split("")
	basicSplt = timeSplit[0] + timeSplit[1] + timeSplit[2] + timeSplit[3];
	var num = parseInt(timeSplit[0] + timeSplit[1] + timeSplit[2]);
	if (timeSplit[1] == "."){
		return basicSplt;
	}else if (parseInt(timeSplit[0] + timeSplit[1]) > 59 && timeSplit[2] == "."){
		return (num - (num % 60))/60 + ":" + num % 60 + "." + timeSplit[3] + timeSplit[4];
	}else if (parseInt(timeSplit[1] + timeSplit[2]) > 59 && timeSplit[3] == "."){
		return (num - (num % 60))/60 + ":" + num % 60 + "." + timeSplit[3] + timeSplit[4];
	}else if (parseInt(timeSplit[2] + timeSplit[3]) > 59 && timeSplit[4] == "."){
		return (num - (num % 60))/60 + ":" + num % 60 + "." + timeSplit[3] + timeSplit[4];
	}else if (timeSplit[2] == "."){
		return basicSplt + timeSplit[4];
	}
}