const sliders = document.querySelectorAll('input[name="volume"');
const sounds = document.getElementById('sounds');


const handleAudioChange = (ev) => {
  if (ev.isTrusted) {
    const volume = parseFloat(ev.target.value);
    const soundName = ev.target.dataset.sound;
    const audio = sounds.getElementById(`${soundName}`);
    const image = document.getElementById(`${soundName}-ctl`).getElementsByTagName('img')[0];

    if (audio) {
      if (volume === 0) {
        audio.pause();
        audio.currentTime = 0
      } else {
        audio.volume = volume;
        audio.play();
      }
    }

    if (image) {
      image.style.opacity = 0.5 + volume/2;
    }
  }
}


sliders.forEach(slider => slider.addEventListener('change', handleAudioChange));
