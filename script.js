let currentAudio=null;

function playSound(soundFile) {
	stopSound(); // Stop any currently playing audio
	
	currentAudio = new Audio(`sounds/${soundFile}`);
	currentAudio.play();
}

function stopSound() {
	if (currentAudio){
		currentAudio.pause();
		currentAudio.currentTime = 0;
		currentAudio = null;
	}
}

