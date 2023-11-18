let suggestList = [
    "Forza Horizon",
    "Animal Crossing",
    "Elden Ring",
    "Hogwarts Legacy",
    "Zelda Tear of the Kingdom",
    "Alan Wake",
    "Baldurs Gate 3"
]

generateSuggestGames();

function generateSuggestGames() {
    let list = document.querySelector(".list")
    let randomList = createRandomList(5);
    for(let k = 0; k < 5; k++) {
        let div = document.createElement("div");
        div.classList.add("button")
        let a = document.createElement("a");
        a.innerHTML = randomList[k]
        div.appendChild(a);
        list.appendChild(div)
    }
}

function createRandomList(listLength) {
    let list = []
    while(list.length != listLength) {
        let number = Math.floor(Math.random() * suggestList.length)
        if(!list.includes(suggestList[number])) {
            list.push(suggestList[number])
        }
    }
    return list;
}

