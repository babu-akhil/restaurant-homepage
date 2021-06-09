
import bananaPorridgeImage from './menu-images/banana-porridge.jpg'
import chickenImage from './menu-images/chicken.jpg'
import khichdiImage from './menu-images/khichdi.jpg'
import { navbarView } from './navbar'


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

function menuView() {
    let subContainer = document.getElementById('belowTheNavbar')
    subContainer.innerHTML = ''

    let menuList = document.createElement('ul')
    menuList.style.listStyle = 'none'

    let firstItem = itemFactory('Banana Porridge',
     'Yummy and nutritious porridge made from a recipe inspired by tradional himalayan waterfall cafes. Perfect for a healthy and quick breakfast to give you that extra boost of energy while remaining light on your stomach.'
      , '$20.00', bananaPorridgeImage)
    menuList.appendChild(firstItem)

    let secondItem = itemFactory('Chicken and Beans', "A classic lunch recipe with slow roasted chicken and sauteed beans cooked in our special chef's sauce. Served with a helping of mashed potatoes.",
    '$30.00', chickenImage)
    menuList.appendChild(secondItem)

    let thirdItem = itemFactory('Factori Special Khichdi', 'A dish inspired from a favourite of our beloved factorians, slow cooked dal and rice mix flavoured with the subtle yet savoury spices of the subcontinent.',
    '$20.00', khichdiImage)
    menuList.appendChild(thirdItem)
    subContainer.appendChild(menuList)
}

export {menuView}