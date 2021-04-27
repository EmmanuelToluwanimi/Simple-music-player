// variable declarations
let playbtn = document.querySelector("#playbtn");
let playtoggle = document.querySelector(".fa-play");
let shufflebtn = document.querySelector("#shufbtn");
let shuffletoggle = document.querySelector(".fa-random");
let nextsongbtn = document.querySelector("#nextbtn");
let prevsongbtn = document.querySelector("#prevbtn");
let volbtn = document.querySelector("#volbtn");
let voltoggle = document.querySelector(".fa-volume-up");
let volume_range = document.querySelector("#inp_volume");
let artistname = document.querySelector('#artist-name');
let titlename = document.querySelector('#title-name');
let albumimage = document.querySelectorAll('.albumimg');
let track = document.createElement('audio');

let songplaying = false;
let songlist;

// function to fetch songs
function fetchsongs() {
    fetch('./albumsongs.json')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            album_details(data);
            songlist = data.songs;
        })
}
fetchsongs();

// functions to display album details
function album_details(album) {
    console.log(album);
    artistname.innerHTML = album.artistname;
    titlename.innerHTML = album.songs[0].songname;
    albumimage.forEach(e => {
        e.src = album.albumimage;
    });
}

// functions on play button
playbtn.addEventListener('click', play)
function play() {
    // console.log(songlist[0]);
    track.src = songlist[0].src;
    
    if (track.canPlayType) {
        // console.log("true");
        if (songplaying == false) {
            console.log(songplaying);
            plays();
        } else {
            console.log(songplaying);
            pauses();
        }
    }else{
        console.log("Song cannnot be played");
    }
    togplaybtn();
}

function plays() {
    songplaying = true;
    track.play();
}
function pauses() {
    songplaying = false;
    track.pause();
}

// function to toggle play and pause icon
function togplaybtn() {
    playtoggle.classList.toggle("fa-play");
    playtoggle.classList.toggle("fa-pause");
}

// function on shuffle button
shufflebtn.addEventListener("click", shufflesong);
function shufflesong() {
    shuffletog();
}

// finction to toggle shaffle on and off icon
function shuffletog() {
    shuffletoggle.classList.toggle("text-muted")
}

// function to mute and unmute volume
volbtn.addEventListener('click', volumebtn)
function volumebtn() {
    mutevol();

}

function mutevol() {
    voltoggle.classList.toggle('fa-volume-mute');
    voltoggle.classList.toggle('fa-volume-up');

    volume_range.value = 0;

}

// function to change volume
volume_range.addEventListener('input', volume_change)
function volume_change() {
    console.log(this.value);
}




