var left = 0;
var middle = 100;
var right = 0;
var sidesWidth = 20;
var gamesQt = 1;
var gamesQ = 0;

var gamesProp = [];


new MultiSelectTag('plataforms');
new MultiSelectTag('categories');
new MultiSelectTag('plataformsf');
new MultiSelectTag('categoriesf');

gamesProp.push({
    name: "Grand theft Auto",
    plataform: "PC",
    categorie: ["Mundo Aberto", "Ação"],
    launchYear: "2015",
    nota: "9",
    image: null
})

gamesProp.push({
    name: "Minecraft",
    plataform: "PC",
    categorie: ["Mundo Aberto", "Aventura"],
    launchYear: "18/11/2011",
    nota: "9",
    image: null
})

gamesProp.push({
    name: "League of legends",
    plataform: "PC",
    categorie: ["MOBA"],
    launchYear: "2010",
    nota: "0",
    image: null
})

gamesProp.push({
    name: "Dark Souls 3",
    plataform: "PC",
    categorie: ["RPG", "Multijogador"],
    launchYear: "11/04/2016",
    nota: "10",
    image: null
})

gamesProp.push({
    name: "God of War",
    plataform: "Playstation",
    categorie: ["RPG", "Ação", "Um Jogador"],
    launchYear: "14/01/2022",
    nota: "8",
    image: null
})

gamesProp.push({
    name: "Halo 3",
    plataform: "Xbox",
    categorie: ["Ação", "Multijogador"],
    launchYear: "13/07/2020",
    nota: "8",
    image: null
})

gamesProp.push({
    name: "Animal Crossing",
    plataform: "Nintendo",
    categorie: ["Simulação", "Multijogador"],
    launchYear: "20/03/2020",
    nota: "9",
    image: null
})

loadGames();




function loadGames() {
    

    let games = document.getElementById("games-flex");
    let juegos = document.querySelectorAll(".game");
    juegos.forEach(jogo => {
        jogo.remove();
    })
    games.style.display = "flex";

    document.querySelector(".mid").children[0].children[1].innerHTML = "Jogos na conta: " + gamesProp.length;
    
    for(let k = 0; k < gamesProp.length; k++) {
        let game = document.createElement("div");
        let txt = document.createElement("label");
        game.classList.add("game");
        txt.innerHTML = gamesProp[k].name;
        game.appendChild(txt);
        games.appendChild(game);
    }

    juegos = document.querySelectorAll(".game");
    juegos.forEach(jogo => {
        jogo.addEventListener("click", () => {
            openmodal(infomodal)
            infomodal.children[0].innerHTML = jogo.children[0].innerHTML
            
        }) 
    })
}

function toggle(side) {
    var wrapper = document.getElementById("wrapper");
    let side_items;

    if(side === "l") {
        side_items = document.querySelector("#left").children;
        if(left == 0) {
            left = sidesWidth;
            middle -= sidesWidth;


            for(let k = 0; k < side_items.length; k++) {
                side_items[k].style.visibility = "visible"
            }
        } else {
            left = 0;
            middle += sidesWidth;
        }
    }
    if(side === "r") {
        side_items = document.querySelector("#right")
        if(right == 0) {
            right = sidesWidth;
            middle -= sidesWidth;
        } else {
            right = 0;
            middle += sidesWidth;
        }
    }
    wrapper.style.gridTemplateColumns = (left + "%") + (middle + "%") + (right + "%")

}
var addgame_modal = document.querySelector(".add-game");
var addbutton = document.querySelector("#add");
addbutton.addEventListener("click", () => {
    openmodal(addgame_modal)
})
var addform = document.querySelector(".add-form");

var infomodal = document.querySelector(".info-game");

function openmodal(modal) {
    
    modal.showModal();
    modal.style.display = "block";

    modal.addEventListener("close", () => {
        modal.style.display = "none";
        addform.reset();
    })
    
}

function add() {
    let name = document.querySelector("#game_name").value;
    let plataform = document.querySelector("#plataforms").value;
    let categorie = document.querySelector("#categories").value;
    let launch = document.querySelector("#game_launch_date").value;
    let nota = document.querySelector("#game_nota").value;
    let image = document.querySelector("#game_image").value;
    gamesProp.push({
        name: name,
        plataform: plataform,
        categorie: categorie,
        launchYear: launch,
        nota: nota,
        image: image
    })
    loadGames();
    addgame_modal.close();
}



var closer = document.getElementById("close");
closer.addEventListener("click" , () => {
    addgame_modal.close();
})

function selectRandomGame() {

    let result = Math.floor(Math.random() * gamesProp.length);

    openmodal(infomodal)
    infomodal.children[0].innerHTML = gamesProp[result].name
    
}

let opa = 0;
function toggleThemes() {
    
    let themeSelection = document.querySelector(".theme_selection")
    if(opa == 0) {
        themeSelection.style.visibility = "visible";
        themeSelection.style.opacity = 1;
        opa = 1;
    } else {
        opa = 0
        themeSelection.style.opacity = 0
        themeSelection.style.visibility = "hidden"
        
    }
    
}
/*
    part0 == nav
    part1 == footer
    part2 == left
    part3 == right
    part4 == back
*/ 
let parts = []
for(let k = 0; k <= 4; k++) {
    parts.push(document.querySelector(".part"+k))
} 

function turnDefault() {
    parts[0].style.backgroundColor = "#0c0e0d"
    parts[1].style.backgroundColor = "#0c0e0d"
    parts[2].style.backgroundColor = "#0c0e0d"
    parts[3].style.backgroundColor = "#0c0e0d"
    parts[4].style.background  = "linear-gradient(212deg, rgba(140,171,161,1) 0%, rgba(109,122,128,1) 5%, rgba(15,42,63,1) 25%, rgba(8,20,30,1) 97%)";
}
function turnBeach() {
    console.log(parts[0])
    parts[0].style.backgroundColor = "#f3cfa4";
    parts[1].style.backgroundColor = "#f3cfa4";
    parts[2].style.backgroundColor = "#b97f5f";
    parts[3].style.backgroundColor = "#b97f5f";
    parts[4].style.background = "linear-gradient(233deg, rgba(243,207,164,1) 1%, rgba(128,184,162,1) 17%, rgba(48,159,155,1) 46%, rgba(16,108,114,1) 80%)";

}

function turnOld() {
    
}
