function toggleDiscord() {
        const el = document.getElementById("discordtag");
        el.style.display = (el.style.display === "none") ? "block" : "none";
    }
    function scaleSite() {
    const baseWidth = 1920;
    const baseHeight = 1080;

    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;

    const scale = Math.min(scaleX, scaleY);

    const container = document.querySelector(".container");

    container.style.transform = `translate(-50%, 0) scale(${scale})`;

    document.body.style.height = (container.offsetHeight * scale) + "px";
}

window.addEventListener("resize", scaleSite);
window.addEventListener("load", scaleSite);

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

var elem = document.querySelector(".pulse");
var animation = elem.animate(
  {
    opacity: [0.5, 1],
    transform: ["scale(0.5)", "scale(1)"]
  },
  {
    direction: "alternate",
    duration: 500,
    iterations: Infinity
  }
);


function play(element){
    var audio = document.getElementById(element);
    if(audio.paused){
        audio.play()
    } else {
        audio.pause();
        audio.currentTime=0;
    }
}


function checkPin() {
    const encodedPin = "NzY5MQ=="; // Base64 encoded "1234"
    const userPin = document.getElementById("pinInput").value;
    const decodedPin = atob(encodedPin); // decode base64

    if (userPin === decodedPin) {
        window.location.href = "note.html";
    } else {
        alert("you have entered the incorrect pin.");
    }
}