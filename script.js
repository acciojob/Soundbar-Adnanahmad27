let currAudio=null;

function playSound(soundFile) {
	stopSound(); // Stop any currently playing audio
	
	currAudio = new Audio(`sounds/${soundFile}`);
	currAudio.play();
}

function stopSound() {
	if (currAudio){
		currAudio.pause();
		currAudio.currentTime = 0;
		currAudio = null;
	}
}

