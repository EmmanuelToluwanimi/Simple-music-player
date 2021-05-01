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
let song_num = document.querySelector('#song_num');
let bartitle = document.querySelector('.bartitle');
let volume_percent = document.querySelector('.volume_percent');
let surfsong = document.querySelector('#inp_range');
let track = document.createElement('audio');

let songplaying = false;
let song_id = 0;
let songlist;
let timer;

// function to fetch songs
function fetchsongs() {
    fetch('./albumsongs.json')
        .then((res) => res.json())
        .then((data) => {
            songlist = data.songs;
            album_details(data, songlist);
        })
        .catch((err) => {
            console.log(err);
            alert("Oops, problem retrieving songs");
        })
}
fetchsongs();

// functions to display album details
function album_details(album, songlist) {
    artistname.innerHTML = album.artistname;
    
    albumimage.forEach(e => {
        e.src = album.albumimage;
    });

    song_num.innerHTML = songlist[song_id].songid;
    bartitle.innerHTML = songlist[song_id].songname;
    titlename.innerHTML = songlist[song_id].songname;

    track.src = songlist[song_id].src;
    track.autoplay = true;

}

// functions on play button
playbtn.addEventListener('click', play)
function play() {

    if (track.canPlayType) {

        if (!songplaying) {
            plays();
            setInt();
            console.log(songplaying);
        } else {
            pauses();
            setInt();
            console.log(songplaying);
        }
    } else {
        console.log("Song cannnot be played");
        alert("Song cannnot be played")
    }
    // console.log(track.currentTime);
}

// function to toggle play and pause icon
function togplaybtn() {
    playtoggle.classList.toggle("fa-play");
    playtoggle.classList.toggle("fa-pause");
}

function plays() {
    track.play();
    songplaying = true;
    playtoggle.classList.remove("fa-play");
    playtoggle.classList.add("fa-pause");
}

function pauses() {
    track.pause();
    songplaying = false;
    playtoggle.classList.add("fa-play");
    playtoggle.classList.remove("fa-pause");
}

function setInt() {
    if (songplaying) {
        clearInterval(timer);

        timer = setInterval(() => {
            updateslider();
            console.log(track.currentTime);
        }, 1000);
    } else {
        clearInterval(timer);
    }
}

// function to update song slider
function updateslider() {

    if (!isNaN(track.duration)) {
        surfsong.value = (track.currentTime / track.duration) * 100;
        // console.log(track.currentTime);
    }

    playnextsong();
}

// function to surf through songs
surfsong.onclick = function () {
    track.currentTime = (this.value / 100) * track.duration;
    // console.log(track.duration);
}

// function to play next song
function playnextsong() {
    if (track.ended) {
        song_id += 1;
        surfsong.value = 0;
        if (song_id > (songlist.length - 1)) {
            song_id = 0;
            track.src = songlist[song_id].src;
        } else {
            track.src = songlist[song_id].src;
        }
        // console.log(song_id);

        track.play();

        songplaying = true;
        playtoggle.classList.remove("fa-play");
        playtoggle.classList.add("fa-pause");
        console.log(songplaying);

        song_num.innerHTML = songlist[song_id].songid;
        bartitle.innerHTML = songlist[song_id].songname;
        titlename.innerHTML = songlist[song_id].songname;
    }
}

// function to next song
nextsongbtn.onclick = function () {
    song_id += 1;
    surfsong.value = 0;
    if (song_id > (songlist.length - 1)) {
        song_id = 0;
        track.src = songlist[song_id].src;
    } else {
        track.src = songlist[song_id].src;
    }
    // console.log(song_id);

    songplaying = true;
    track.play();
    setInt();

    playtoggle.classList.remove("fa-play");
    playtoggle.classList.add("fa-pause");
    console.log(songplaying);

    song_num.innerHTML = songlist[song_id].songid;
    bartitle.innerHTML = songlist[song_id].songname;
    titlename.innerHTML = songlist[song_id].songname;
}

// function to previous song
prevsongbtn.onclick = function () {
    song_id -= 1;
    surfsong.value = 0;
    if (song_id < 0) {
        song_id = (songlist.length - 1);
        track.src = songlist[song_id].src;
    } else {
        track.src = songlist[song_id].src;
    }
    // console.log(song_id);

    songplaying = true;
    track.play();
    setInt();

    playtoggle.classList.remove("fa-play");
    playtoggle.classList.add("fa-pause");
    console.log(songplaying);

    song_num.innerHTML = songlist[song_id].songid;
    bartitle.innerHTML = songlist[song_id].songname;
    titlename.innerHTML = songlist[song_id].songname;
}

// function to change volume
volume_range.addEventListener('input', volume_change)
function volume_change() {
    track.volume = this.value / 100;
    if (track.volume == 0) {
        voltoggle.classList.remove("fa-volume-up");
        voltoggle.classList.add('fa-volume-mute');
    } else {
        voltoggle.classList.add("fa-volume-up");
        voltoggle.classList.remove('fa-volume-mute');
    }
    volume_percent.innerHTML = this.value;
    // console.log(track.volume);
}

// function to mute and unmute volume
volbtn.addEventListener('click', volumebtn)
function volumebtn() {

    if (track.muted != true) {
        track.muted = true;
    } else {
        track.muted = false;
    }

    mutevol();
    // console.log(track.muted);
}

function mutevol() {
    voltoggle.classList.toggle('fa-volume-mute');
    voltoggle.classList.toggle('fa-volume-up');
}

// let reptbtn = document.querySelector('#reptbtn');
// reptbtn.onclick = function () {
//     track.pause();
// }

// function on shuffle button
shufflebtn.addEventListener("click", shufflesong);
function shufflesong() {
    shuffletog();
}

// finction to toggle shuffle on and off icon
function shuffletog() {
    shuffletoggle.classList.toggle("text-muted")
}
