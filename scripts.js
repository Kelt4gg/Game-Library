var navbar = document.getElementsByTagName("nav")[0]
var shadow = document.getElementById("shadow")

window.addEventListener("scroll", function() {
    if(window.scrollY > navbar.offsetTop) {
        navbar.style.visibility = "hidden"
        shadow.style.display = "flex";
        shadow.classList.add("sticky")
    } else {
        navbar.style.visibility = "visible"
        shadow.style.display = "none";
        shadow.classList.remove("sticky")
    }
})