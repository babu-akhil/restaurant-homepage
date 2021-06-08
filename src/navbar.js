import { homepageView } from "./homepage"
import {menuView} from './menu'

function navbarView(container, activePage) {
    let navbar = document.createElement('div')
navbar.id = 'navbar'

let homeButton = document.createElement('p')
let menuButton = document.createElement('p')
let contactButton = document.createElement('p')

homeButton.classList.add('navbarButton')
menuButton.classList.add('navbarButton')
contactButton.classList.add('navbarButton')

homeButton.innerHTML = 'Home'
menuButton.innerHTML = 'Menu'
contactButton.innerHTML = 'Contact'

let navbarArray = [homeButton,menuButton,contactButton]

navbarArray.forEach((button) => {
    button.style.cursor = 'pointer'
    if (button.innerHTML == activePage) {
        button.style.paddingBottom = '0px';
        button.style.borderBottomStyle = 'solid';
        button.style.borderBottomColor = '#264e70';
    }

    else {
        button.addEventListener('mouseover', ()=> {
            button.style.borderBottomStyle = 'dotted';
            button.style.borderBottomColor = '#679ccb';
            button.style.cursor = 'pointer'
        })
        button.addEventListener('mouseleave', ()=> {
            button.style.borderBottomStyle = 'none';
        })
    }

    button.addEventListener('click', () => {
        activePage = button.innerHTML
        if (activePage=='Home') {homepageView()}
        if (activePage=='Menu') {menuView()}
        if (activePage=='Contact') {contactView()}
    })
})


navbar.appendChild(homeButton)
navbar.appendChild(menuButton)
navbar.appendChild(contactButton)

container.appendChild(navbar)
}

export {navbarView}