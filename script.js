//your JS code here. If required.
/**/

let currentAudio;

function playSound(soundId) {
  stopAudio(); // Stop any currently playing audio
  
  const audio = document.getElementById(soundId);
  audio.play();
  currentAudio = audio;
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

