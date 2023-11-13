var log = document.getElementById("log")
var reg = document.getElementById("reg")

log.addEventListener("click", () => toggleModal("log"))

reg.addEventListener("click", () => toggleModal("reg"))

var modal = document.getElementsByTagName("dialog")[0];
var login = document.getElementById("login");
var register = document.getElementById("register");

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

modal.addEventListener("close", () => {
    modal.style.display = "none";
})

var closer = document.getElementById("close");
closer.addEventListener("click" , () => {
    modal.close();
})
    

function toggle() {
    sideNow = sideNow == "left" ? "right" : "left";
    console.log(sideNow)
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

var footer = document.querySelector(".footer");
var hoverfobic = document.querySelector(".hoverfobic")
var hoverlover = document.querySelector(".hoverlover")
footer.addEventListener("mouseover", () => {    
    hoverfobic.style.opacity = "0";
    hoverlover.style.opacity = "1";
});

footer.addEventListener("mouseleave", () => {    
    hoverfobic.style.opacity = "1";
    hoverlover.style.opacity = "0";
});
