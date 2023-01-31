let count_home = 0;
let count_guest = 0;
let homeScore = document.getElementById("home-el");
let guestScore = document.getElementById("guest-el");


function one() {
    count_home+=1;
homeScore.textContent = count_home;

}

function two(){
    count_home+=2;
    homeScore.textContent = count_home;
}

function three(){
    count_home+=3;
    homeScore.textContent = count_home;
}

function oneg(){
    count_guest +=1;
    guestScore.textContent = count_guest;
}
function twog(){
    count_guest +=2;
    guestScore.textContent = count_guest;
}

function threeg(){
    count_guest +=3;
    guestScore.textContent = count_guest;
}