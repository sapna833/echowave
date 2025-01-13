console.log("Welcome to Echo-Wave");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Beshram-Rang ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Heriye-Heriye", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Pyar hota Kai Baar hai [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Hey-subaaram [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Malang -NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Perfect", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Tu hai toh mujhe or ky chahiye", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tere Hwale", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Phir na aaisi raat ayegi", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Ram-Siya-Ram", filePath: "songs/10.mp3", coverPath: "covers/10.png" },
    // { songName: "Ram-Siya-Ram", filePath: "songs/10.mp3", coverPath: "covers/10.png" },
    { songName: "Maan-Meri Jaan", filePath: "songs/11.mp3", coverPath: "covers/11.png" },
    { songName: "Sanam-Mere-Sanam", filePath: "songs/12.mp3", coverPath: "covers/12.png" },
    { songName: "Lover", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "kastru $ kubsurat", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "With You", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" },
    { songName: "Smjho- Na", filePath: "songs/16.mp3", coverPath: "covers/16.jpg" },
    { songName: "Na mujhko pta", filePath: "songs/17.mp3", coverPath: "covers/17.jpg" },
    { songName: "Hass-Hass", filePath: "songs/18.mp3", coverPath: "covers/18.jpg" },
    { songName: "Summer-High", filePath: "songs/19.mp3", coverPath: "covers/19.jpg" },
    { songName: "assa-khoda", filePath: "songs/20.mp3", coverPath: "covers/20.jpg" },
    { songName: "co2", filePath: "songs/21.mp3", coverPath: "covers/21.jpg" },

    { songName: "i found u", filePath: "songs/22.mp3", coverPath: "covers/22.jpg" },
    { songName: "I think they call this love ", filePath: "songs/23.mp3", coverPath: "covers/23.jpg" },









    // { songName: "Sanam-Mere-Sanam", filePath: "songs/12.mp3", coverPath: "covers/12.png" },






]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
    // Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 30) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})