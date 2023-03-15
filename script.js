const menu = document.getElementsByClassName('menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    menu.classList.toggle('active')
})