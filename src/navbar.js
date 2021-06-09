import { homepageView } from "./homepage"
import {menuView} from './menu'
import {contactView} from './contact'



function navbarUpdate(pages) {
    let activePage = pages.filter(e => {return e.active})
    console.log(activePage)
    pages.forEach(page => {
        if(page.active) {
            let button = document.getElementById(page.page);
            button.removeEventListener('mouseover', page.ul)
            button.removeEventListener('mouseleave', page.removeUL)
            button.style.borderBottomStyle = 'solid'
            button.style.borderBottomColor = '#274f72'
        }

        else {
            let button = document.getElementById(page.page);
            button.style.borderBottomStyle = 'none'
            button.addEventListener('mouseover', page.ul)
            button.addEventListener('mouseleave', page.removeUL)
        }
    })
}

function navbarView(container, pages) {
    let navbar = document.createElement('div')
    navbar.id = 'navbar'

    let homeButton = document.createElement('p')
    let menuButton = document.createElement('p')
    let contactButton = document.createElement('p')

    homeButton.classList.add('navbarButton')
    menuButton.classList.add('navbarButton')
    contactButton.classList.add('navbarButton')

    homeButton.id = 'Home'
    menuButton.id = 'Menu'
    contactButton.id = 'Contact'

    console.log('howide')
    homeButton.innerHTML = 'Home'
    menuButton.innerHTML = 'Menu'
    contactButton.innerHTML = 'Contact'

    navbar.appendChild(homeButton)
    navbar.appendChild(menuButton)
    navbar.appendChild(contactButton)

    container.appendChild(navbar)
    document.querySelector('body').appendChild(container)
    navbarUpdate(pages)

    let navbarArray = Array.from(document.getElementsByClassName('navbarButton'))
    navbarArray.forEach((button) => {
        button.addEventListener('click', () => {
            pages.forEach(page => {
                if(page.page==button.id) {
                    page.active = true
                }
                else {
                    page.active = false
                }
            })
            navbarUpdate(pages)
            pages.forEach(page => {
                if(page.active) {
                    page.view()
                }
            })
    })
})
}

export {navbarView}