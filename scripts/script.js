let menuBtn = document.querySelector(".mob-menu");
let childs = document.querySelectorAll(".nav-downloads-child");
let childContainer = document.querySelector(".child-container"),
btn = document.querySelector('.music-container i'),
musicContainer = document.querySelector('.music-container')
let currentSongName = document.getElementById('currentSongName');
let currentSongArtist = document.getElementById('currentSongArtist');


let is = true

menuBtn.addEventListener("click", () => {
  childs.forEach((e) => {
    e.classList.toggle("display");
    childContainer.classList.toggle("display");
  });
});

btn.addEventListener('click', ()=>{
  musicContainer.classList.toggle('full')
})

//song implementation

let songList = document.querySelector(".song-list");

songsData.forEach((song, i) => {
  let songContainer = `
                    <div class="song-container">
                      <div class="song-img">
                        <img id="img" src="${song.image}">
                        <div class="play-icon" data-index="${i}">
                          <i id="icon" class="fa-solid fa-play icon"></i>
                        </div>
                      </div>
                      <audio class="audio" src="${song.path}"></audio>
                      <div class="caption">
                        <h3>${song.movName}</h3>
                        <p>${song.name}</p>
                      </div>
                    </div>`;
  songList.innerHTML += songContainer;
});

// Now query after HTML is added
let playIcons = document.querySelectorAll(".play-icon");
let allAudios = document.querySelectorAll(".audio");
let ico = document.getElementsByClassName('icon'),
playSong = document.getElementById('playSong')

// Track currently playing index
let currentPlayingIndex = null;



  
playIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    let index = icon.getAttribute("data-index");
    let audio = allAudios[index];
    let iconElem = icon.querySelector('i');
      // If clicking the same song that's playing → pause it
    if (currentPlayingIndex === index && !audio.paused) {
      audio.pause();
      iconElem.classList.replace("fa-pause", "fa-play");
      currentSongName.textContent = "No song playing";
      currentSongArtist.textContent = "";
      currentPlayingIndex = null;
      return;
    }
    // Stop all other audios & reset icons
    allAudios.forEach((a, idx) => {
      a.pause();
      a.currentTime = 0;
      playIcons[idx].querySelector("i").classList.replace("fa-pause", "fa-play");
      
    });
    // Play selected audio & update icon
    audio.play();
    iconElem.classList.replace("fa-play", "fa-pause");
    currentPlayingIndex = index;
    currentSongArtist.textContent = songsData[index].name;
  });
});

playSong.addEventListener('click', () => {
  if (currentPlayingIndex === null) return; // no song selected
  let audio = allAudios[currentPlayingIndex];
  if (audio.paused) {
    audio.play();
    playSong.classList.replace('fa-play', 'fa-pause');
  } else {
    audio.pause();
    playSong.classList.replace('fa-pause', 'fa-play');
  }
});

window.addEventListener('DOMContentLoaded', songsData)
