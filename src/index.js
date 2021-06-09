import './style.css';
import { homepageView } from './homepage.js'
import kitchenImage from './kitchen.jpg'
import { navbarView } from './navbar.js'
import { menuView } from './menu.js'
import { contactView } from './contact';

function underLine(button) {

        console.log('baa')
        button.style.borderBottomStyle = 'dotted';
        button.style.borderBottomColor = '#679ccb';
        button.style.cursor = 'pointer'
}

function removeUnderLine(button) {

    console.log('boo')
    button.style.borderBottomStyle = 'none'

}

function menuUL(){
    underLine(document.getElementById('Menu'))
}

function homeUL() {
    underLine(document.getElementById('Home'))
}

function contactUL() {
    underLine(document.getElementById('Contact'))
}

function menuRemoveUL(){
    removeUnderLine(document.getElementById('Menu'))
}

function homeRemoveUL() {
    removeUnderLine(document.getElementById('Home'))
}

function contactRemoveUL() {
    removeUnderLine(document.getElementById('Contact'))
}

let pages = [{page: 'Home', ul: homeUL, removeUL: homeRemoveUL,view: homepageView , active: true}, {page: 'Menu', ul: menuUL, removeUL: menuRemoveUL, view: menuView, active: false}, {page: 'Contact', ul: contactUL, removeUL: contactRemoveUL, view: contactView, active: false}]

let container = document.createElement('div')
container.classList.add('container')

container.style.backgroundColor = '#fdebd3'
container.style.margin = 'none'
container.style.padding = 'none'
container.style.width = '800px'

let title = document.createElement('h1')
title.innerHTML = 'The Food Factori'

container.appendChild(title)

let belowTheNavbar = document.createElement('div')
belowTheNavbar.id = 'belowTheNavbar'
navbarView(container, pages)
container.appendChild(belowTheNavbar)

document.querySelector('body').appendChild(container)

homepageView()