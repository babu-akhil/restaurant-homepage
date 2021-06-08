import './style.css';
import { homepageView } from './homepage.js'
import kitchenImage from './kitchen.jpg'
import {navbarView} from './navbar.js'
import {menuView} from './menu.js'

let activePage = 'Home'

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

navbarView(container, activePage)

homepageView(belowTheNavbar, kitchenImage)
container.appendChild(belowTheNavbar)
// menuView(container, activePage)

// contactView(container, activePage)

document.querySelector('body').appendChild(container)
