// Navbar
const sectionNavar = document.querySelector('.section-navbar')
const mobileNavLinks = document.querySelector('.mobile-nav-links')
const openNavLinks = document.querySelector('.open-nav-links')
const closeNavLinks = document.querySelector('.close-nav-links')

openNavLinks && openNavLinks.addEventListener('click', ()=> {
    sectionNavar.style.overflow = 'visible'
    openNavLinks.style.display = 'none'
    closeNavLinks.style.display = 'block'
    mobileNavLinks.classList.add('show-mobile-nav-links')
}) 

closeNavLinks && closeNavLinks.addEventListener('click', ()=> {
    mobileNavLinks.classList.remove('show-mobile-nav-links')
    openNavLinks.style.display = 'block'
    closeNavLinks.style.display = 'none'
    sectionNavar.style.overflow = 'hidden'
})
// End