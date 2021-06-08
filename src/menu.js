
import bananaPorridgeImage from './menu-images/banana-porridge.jpg'

const itemFactory = (title, description, price, image) => {
    let itemContainer = document.createElement('li')
    itemContainer.classList.add('itemContainer')
    let itemTitle = document.createElement('h2')
    itemTitle.classList.add('itemTitle')
    itemTitle.innerHTML = title;
    let itemDescription = document.createElement('p')
    itemDescription.classList.add('itemDescription')
    itemDescription.innerHTML = description
    let itemPrice = document.createElement('p')
    itemPrice.classList.add('itemPrice')
    itemPrice.innerHTML = price
    itemContainer.appendChild(itemTitle)
    itemContainer.appendChild(itemDescription)
    itemContainer.appendChild(itemPrice)
    let imageObject = new Image();
    imageObject.src = image;
    imageObject.classList.add('itemImage')
    itemContainer.appendChild(imageObject)
    return itemContainer
}

function menuView(container, activePage) {
    let subContainer = document.getElementById('belowTheNavbar')
    subContainer.innerHTML = ''

    let menuList = document.createElement('ul')
    menuList.style.listStyle = 'none'

    let firstItem = itemFactory('Banana Porridge',
     'Yummy and nutritious porridge made from a recipe inspired by tradional himalayan waterfall cafes. Perfect for a healthy and quick breakfast to give you that extra boost of energy while remaining light on your stomach.'
      , '$20.00', bananaPorridgeImage)
    menuList.appendChild(firstItem)

    subContainer.appendChild(menuList)
}

export {menuView}