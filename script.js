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
let bartitle = document.querySelector('.bartitle')
let track = document.createElement('audio');

let songplaying = false;
let song_id = 0;
let songlist;

// function to fetch songs
function fetchsongs() {
    fetch('./albumsongs.json')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            album_details(data);
            songlist = data.songs;
            console.log(songlist.length);
        })
        .catch((err) => {
            console.log(err);
            alert("Oops, problem retrieving songs")
        })
}
fetchsongs();

// functions to display album details
function album_details(album) {
    console.log(album);
    artistname.innerHTML = album.artistname;
    albumimage.forEach(e => {
        e.src = album.albumimage;
    });
}

// functions on play button
playbtn.addEventListener('click', play)
function play() {
    // console.log(songlist[0]);
    track.src = songlist[song_id].src;

    if (track.canPlayType) {
        // console.log("true");
        song_num.innerHTML = songlist[song_id].songid;
        bartitle.innerHTML = songlist[song_id].songname;
        titlename.innerHTML = songlist[song_id].songname;
        if (songplaying == false) {
            console.log(songplaying);
            plays();
        } else {
            console.log(songplaying);
            pauses();
        }
    } else {
        console.log("Song cannnot be played");
        alert("Song cannnot be played")
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

// function to next song
nextsongbtn.onclick = function () {
    song_id += 1;
    if (song_id > (songlist.length - 1)) {
        song_id = 0;
        track.src = songlist[song_id].src;
    } else {
        track.src = songlist[song_id].src;
    }
    console.log(song_id);
    track.play();
    song_num.innerHTML = songlist[song_id].songid;
    bartitle.innerHTML = songlist[song_id].songname;
    titlename.innerHTML = songlist[song_id].songname;
}

// function to previous song
prevsongbtn.onclick = function () {
    song_id -= 1;
    if (song_id < 0) {
        song_id = (songlist.length - 1);
        track.src = songlist[song_id].src;
    } else {
        track.src = songlist[song_id].src;
    }
    console.log(song_id);
    track.play();
    song_num.innerHTML = songlist[song_id].songid;
    bartitle.innerHTML = songlist[song_id].songname;
    titlename.innerHTML = songlist[song_id].songname;
}

// function to change volume
volume_range.addEventListener('input', volume_change)
function volume_change() {
    track.volume = this.value / 100;
    console.log(track.volume);
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












// function on shuffle button
shufflebtn.addEventListener("click", shufflesong);
function shufflesong() {
    shuffletog();
}

// finction to toggle shuffle on and off icon
function shuffletog() {
    shuffletoggle.classList.toggle("text-muted")
}



