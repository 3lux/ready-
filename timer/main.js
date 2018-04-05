var startBtn = document.getElementById("startTimer");
var rawTime = 0;
var isOn = false;
var output = document.getElementById("timerDisplay");
var timeSplit;
var spaceStarts = true;
var seconds;


startBtn.addEventListener("click", function(){
	if (isOn){
		stop();
	}else{
		start();
	}
});

document.body.onkeyup = function(e){
	if(e.keyCode == 32){
		if (spaceStarts == true){
			start();
			spaceStarts = false;
		}else{
			stop();
			spaceStarts = true;
		}
	}
}

while (isOn){
	update();
}