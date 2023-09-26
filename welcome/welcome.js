var navbar = document.getElementsByTagName("nav")[0];
var upnav = document.getElementById("upnav")
var shadow = document.getElementById("shadow")
var logs = document.querySelectorAll("#log")
var regs = document.querySelectorAll("#reg")
var modal = document.getElementsByTagName("dialog")[0]

window.addEventListener("scroll", (event) => {
    if(window.scrollY > navbar.offsetTop) {
        navbar.style.visibility = "hidden"
        shadow.classList.add("sticky");
        shadow.style.display = "flex"
    }

    if(window.scrollY < upnav.offsetHeight) {
        navbar.style.visibility = "visible"
        shadow.classList.remove("sticky");
        shadow.style.display = "none"
    }
})

logs.forEach(log => {
   log.addEventListener("click", (event) => {
    popup("l")
   }) 
});

regs.forEach(reg => {
    reg.addEventListener("click", (event) => {
     popup("r")
    }) 
 });

function popup(side) {
    if(side == "l") {
        modal.style.display = "grid";
        modal.showModal()
    } else {
        modal.style.display = "grid";
        modal.showModal()
    }
}

modal.addEventListener("close", (event) => {
    modal.style.display = "none"
})

document.getElementById("close").addEventListener("click", (event) => {
    modal.close()
})

var mode = "log"
function toggle() {
    if(mode == "log") {
        mode == "reg"
        modal.style.gridTemplateColumns = "65 35"
    } else {
        modal.style.gridTemplateColumns = "35 65"
    }
}