const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")
const navLogo = document.querySelector("#navbar__logo")
const link = document.querySelectorAll(".navbar__menu--link")
const body = document.querySelector('body')


const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

const removeMobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}


menu.addEventListener('click', mobileMenu)
link.forEach(link =>  {
    link.addEventListener("click", removeMobileMenu)
});