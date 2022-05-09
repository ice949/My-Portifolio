const menu = document.querySelector(".bars");
const navItems = document.querySelector(".nav-items")
const close = document.querySelector(".close");
const navLinks = document.querySelectorAll(".nav-links");
// menu.addEventListener("click ", (e) => {
//     navItems.classList.add("nav-bar")
//     console.log(e.target);


// })

menu.addEventListener('click', () => {

    navItems.classList.add("nav-bar")
    console.log(navItems)
})

function closeBtn() {
    navItems.classList.remove("nav-bar");
}
close.addEventListener("click", closeBtn);
navLinks.forEach((element) => {
    element.addEventListener("click", closeBtn);
});