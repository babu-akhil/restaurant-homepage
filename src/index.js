import './style.css';
import kitchenImage from './kitchen.jpg'


let container = document.createElement('div')
container.classList.add('container')

container.style.backgroundColor = '#fdebd3'
container.style.margin = 'none'
container.style.padding = 'none'
container.style.width = '800px'

let title = document.createElement('h1')
title.innerHTML = 'The Food Factori'

container.appendChild(title)

let statement = document.createElement('p')
statement.id = 'statement'
statement.innerHTML = 'To serve exquisite and authentic Factorian Cuisine representing our cultures and legendary culinary gastronomy with typical dishes with a creative and talented touch, delivering a distinctly unique dining experience to fulfill our guest expectations.'
container.appendChild(statement)

let statementAuthor = document.createElement('p')
statementAuthor.id =  'statementAuthor'
statementAuthor.innerHTML = ' - Manikandan Kumaraswami, Founder and CEO'
container.appendChild(statementAuthor)

let image = new Image()
image.src = kitchenImage
image.style.width = '100%'
image.style.marginTop = '50px'
image.style.marginBottom = '200px'
container.appendChild(image)

document.querySelector('body').appendChild(container)
