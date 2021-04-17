// variable declarations
let playbtn = document.querySelector("#playbtn");
let playtoggle = document.querySelector(".fa-play");
let shufflebtn = document.querySelector("#shufbtn");
let shuffletoggle = document.querySelector(".fa-random");
let nextsongbtn = document.querySelector("#nextbtn");
let prevsongbtn = document.querySelector("#prevbtn");
let volbtn = document.querySelector("#volbtn");
let voltoggle = document.querySelector(".fa-volume-up");
let volume_range= document.querySelector("#inp_volume");


// functions on play button
playbtn.addEventListener("click", play)
function play() {
    console.log(playtoggle);
    togplaybtn();
}

// function to toggle play and pause icon
function togplaybtn() {
    playtoggle.classList.toggle("fa-play");
    playtoggle.classList.toggle("fa-pause");
}

// function on shuffle button
shufflebtn.addEventListener("click",shufflesong);
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

    volume_range.value= 0;
    // stopped here
}

volume_range.addEventListener('click', volume_change)
function volume_change() {
    
    console.log(volume_range.value);
}