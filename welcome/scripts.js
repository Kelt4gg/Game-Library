var log = document.getElementById("log")
var reg = document.getElementById("reg")

log.addEventListener("click", () => toggleModal("log"))

reg.addEventListener("click", () => toggleModal("reg"))

var modal = document.getElementsByTagName("dialog")[0];
var left = document.getElementById("left");
var right = document.getElementById("right");

var sideNow = "";
function toggleModal(side) {
    modal.showModal();
    modal.style.display = "flex";
    if(side == "log") {
        sideNow = "left"
    } else {
        sideNow = "right"
    }
    toggleSide();
}

function toggleSide() {
    if(sideNow == "left") {
        left.classList.replace("back", "front")
        right.classList.replace("front", "back")
        
    } else {
        right.classList.replace("back", "front")
        left.classList.replace("front", "back")
    }
}


modal.addEventListener("close", () => {
    modal.style.display = "none";
})

var closer = document.getElementById("close");
closer.addEventListener("click" , () => {
    modal.close();
})
    

function toggle() {
    sideNow = sideNow == "left" ? "right" : "left";
    toggleSide();
}

var pass = document.getElementById("pass");
function reveal() {
    pass.type = pass.type == "password" ? "text" : "password";
    
}
