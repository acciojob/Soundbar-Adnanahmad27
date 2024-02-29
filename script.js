let currAudio=null;

function playSound(soundFile) {
	stopSound(); // Stop any currently playing audio
	
	let currentAudio = new Audio(`sounds/${soundFile}`);
	currentAudio.play();
	currAudio = currentAudio;
}

function stopSound() {
	if (currAudio){
		currAudio.pause();
		currAudio.currentTime = 0;
		currAudio = null;
	}
}

