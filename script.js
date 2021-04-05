// variable declarations
let playbtn = document.querySelector("#playbtn");
let playtoggle = document.querySelector(".fa-play");
let shufflebtn = document.querySelector("#shufbtn");
let shuffletoggle = document.querySelector(".fa-random");


// functions on play button
playbtn.addEventListener("click", play)
function play() {
    console.log(playtoggle);
    togplaybtn();
}

// function to toggle paly and pause icon
function togplaybtn() {
    playtoggle.classList.toggle("fa-play");
    playtoggle.classList.toggle("fa-pause");
}

// function on shuffle button
shufflebtn.addEventListener("click",shufflesong);
function shufflesong() {
    shuffletog();
}

function shuffletog() {
    shuffletoggle.classList.toggle("text-muted")
}
