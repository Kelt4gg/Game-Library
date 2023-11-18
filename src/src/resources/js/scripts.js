let dialogs = document.querySelectorAll("dialog");

dialogs.forEach(dialog => {
    dialog.addEventListener("close", () => {
        dialog.style.display = "none";
    })

    dialog.children[0].addEventListener("click", () => {
        dialog.close()
    })
})

function openenter(side) {
    let enterdialog = document.querySelector(".enter-dialog");
    enterdialog.showModal()
    enterdialog.style.display = "flex"
    if(side == "log") {
        sideNow = "left"
    } else {
        sideNow = "right"
    }
    toggleSide();
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
        let slideNumber = dot.href[dot.href.length - 1]
        setSlide(slideNumber)
        slideNow = slideNumber;
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

var timer = setInterval(passSlide, 3000);

function passSlide() {
    slideNow++; 
    if(slideNow > dots.length) {
        slideNow = 1;
    }
    setSlide(slideNow)
}


var modal = document.getElementsByTagName("dialog")[0];
var login = document.getElementById("login");
var register = document.getElementById("register");

var sideNow = "";
function openenter(side) {
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
        login.style.display = "flex";
        login.style.opacity = 1;
        register.style.display = "none";
        register.style.opacity = 0;
        
    } else {
        register.style.display = "flex";
        register.style.opacity = 1;
        login.style.display = "none";
        login.style.opacity = 0;
    }
    console.log(sideNow)
}

function toggle() {
    sideNow = sideNow == "left" ? "right" : "left";
    console.log(sideNow)
    toggleSide();
}