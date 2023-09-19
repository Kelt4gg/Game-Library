var left = 0;
var middle = 100;
var right = 0;
var sidesWidth = 20;
var gamesQt = 1;
var gamesQ = 0;

function toggle(side) {
    var wrapper = document.getElementById("wrapper");
    if(side === "l") {
        if(left == 0) {
            left = sidesWidth;
            middle -= sidesWidth;
        } else {
            left = 0;
            middle += sidesWidth;
        }
    }
    if(side === "r") {
        if(right == 0) {
            right = sidesWidth;
            middle -= sidesWidth;
        } else {
            right = 0;
            middle += sidesWidth;
        }
    }
    wrapper.style.gridTemplateColumns = (left + "%") + (middle + "%") + (right + "%")
    console.log(wrapper.style.gridTemplateColumns)
    console.log(document.getElementById("left").style.width)

}

function add() {
    let games = document.getElementById("games-flex");
    games.style.display = "flex";
    for(let k = 0; k < gamesQt; k++) {
        let game = document.createElement("div");
        let txt = document.createElement("label");
        game.classList.add("game");
        txt.innerHTML = gamesQ++;
        console.log(gamesQ)
        game.appendChild(txt);
        games.appendChild(game);
    }
}

function selectRandomGame() {
    let games = document.getElementsByClassName("game");
    console.log(Math.round((games.length - 1) * Math.random()));
    
}