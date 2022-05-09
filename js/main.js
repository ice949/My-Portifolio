const menu = document.querySelector(".bars");
const navItems = document.querySelector(".nav-items")
const closeB = document.querySelector(".closeBtn");
const navLinks = document.querySelectorAll(".nav-links");


menu.addEventListener('click', () => {

    navItems.classList.toggle("nav-bar")
    closeB.style.display = "flex"
    menu.style.display = "none"
})

function closeBtn() {
    navItems.classList.remove("nav-bar");
    menu.style.display = "block"

}

navLinks.forEach((element) => {
    element.addEventListener("click", closeBtn);
});