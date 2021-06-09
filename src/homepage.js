import kitchenImage from './kitchen.jpg'

function homepageView() {
    let container = document.getElementById('belowTheNavbar')
    container.innerHTML = ''
    let homepageContainer = document.createElement('div')
    homepageContainer.id = 'homepage'
    let statement = document.createElement('p')
    statement.id = 'statement'
    statement.innerHTML = 'To serve exquisite and authentic Factorian Cuisine representing our cultures and legendary culinary gastronomy with typical dishes with a creative and talented touch, delivering a distinctly unique dining experience to fulfill our guest expectations.'
    homepageContainer.appendChild(statement)

    let statementAuthor = document.createElement('p')
    statementAuthor.id =  'statementAuthor'
    statementAuthor.innerHTML = ' - Manikandan Kumaraswami, Founder and CEO'
    homepageContainer.appendChild(statementAuthor)

    let image = new Image()
    image.src = kitchenImage
    image.style.width = '100%'
    image.style.marginTop = '50px'
    image.style.marginBottom = '200px'
    homepageContainer.appendChild(image)
    container.appendChild(homepageContainer)
}

export { homepageView }
