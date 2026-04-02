var layerCount = 5;
var starCount = 400;
var maxTime = 30;
var universe = document.getElementById("universe");
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName("body")[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = w.innerHeight || e.clientHeight || g.clientHeight;
for (var i = 0; i < starCount; ++i) {
  var ypos = Math.round(Math.random() * height);
  var star = document.createElement("div");
  var speed = 1000 * (Math.random() * maxTime + 1);
  star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
  star.style.backgroundColor = "white";

  universe.appendChild(star);
  star.animate(
    [
      {
        transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
      },
      {
        transform:
          "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
      }
    ],
    {
      delay: Math.random() * -speed,
      duration: speed,
      iterations: 1000
    }
  );
}

const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playpause');
const seekSlider = document.getElementById('seekSlider');
const volumeSlider = document.getElementById('volumeslider');

// Change icon source when toggling play/pause
playPauseBtn.addEventListener('click', () => {
    if (audio.paused || audio.ended) {
        audio.play();
        playPauseBtn.src = 'Images-music/pause.png'; // path to pause icon
    } else {
        audio.pause();
        playPauseBtn.src = 'Images-music/play.png'; // path to play icon
    }
});

// Update slider as song plays
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekSlider.value = progress;
});



// Seek when slider is moved
seekSlider.addEventListener('input', () => {
    const seekTime = (seekSlider.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Change volume
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

const loopBtn = document.getElementById('loop');
const loopStatusText = document.getElementById('loopstatus');
let isLooping = false;

loopBtn.addEventListener('click', () => {
    isLooping = !isLooping;
    audio.loop = isLooping;
    
    if (isLooping) {
        loopStatusText.textContent = 'Loop is on';
    } else {
        loopStatusText.textContent = 'Loop is off';
    }
});

