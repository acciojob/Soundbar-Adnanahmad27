// let currAudio=null;

// function playSound(soundFile) {
// 	stopSound(); // Stop any currently playing audio
	
// 	let currentAudio = new Audio(`sounds/${soundFile}`);
// 	currentAudio.play();
// 	currAudio = currentAudio;
// }

// function stopSound() {
// 	if (currAudio){
// 		currAudio.pause();
// 		currAudio.currentTime = 0;
// 		currAudio = null;
// 	}
// }
let audioPlayer = document.getElementById('audioPlayer');

function playSound(soundFile) {
  audioPlayer.src = `sounds/${soundFile}`;
  audioPlayer.play();
}

function stopSound() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}
