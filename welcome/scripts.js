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


var slideNow = 1;
var dots = document.querySelectorAll(".dots");
let counter = 1;
dots.forEach(dot => {
    dot.href = "#slide" + counter
    counter++;
    dot.addEventListener("click", () => {
        window.clearInterval(timer);
        timer = setInterval(passSlide, 3000);
        setSlide(dot.href[dot.href.length - 1])
    })
});

function setSlide(slideNumber) {
    window.location.href = "#slide" + slideNumber;
    for(var k = 0; k < dots.length; k++) {
        if(k+1 == slideNumber) {
             dots[k].classList.add("actived")
        } else {
            dots[k].classList.remove("actived")
        }
    }
}

console.log(dots)

var timer = setInterval(passSlide, 3000);

function passSlide() {
    slideNow++; 
    if(slideNow > dots.length) {
        slideNow = 1;
    }
    setSlide(slideNow)
}

