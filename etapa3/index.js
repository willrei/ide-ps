let pizzaSel = document.getElementById('pizza-selector');
pizzaSel.addEventListener('click', addPizza);
pizzaSel.addEventListener('mouseenter', pizzaEnter);
pizzaSel.addEventListener('mouseleave', pizzaLeave);

function pizzaEnter() {
    pizzaSel.style.backgroundColor = 'rgba(244, 67, 54, 0)';
    pizzaSel.style.color = 'black';
}

function pizzaLeave() {
    pizzaSel.style.backgroundColor = 'rgba(244, 67, 54, 1)';
    pizzaSel.style.color = 'white';
}

function addPizza() {
    let menu = document.getElementById('food-items');

    let item = document.createElement('div');
    item.setAttribute('class', 'food-item');

    let itemName = document.createElement('div');
    itemName.style.fontWeight = 'bold';
    itemName.textContent = 'BBQ Chicken';

    let itemPrice = document.createElement('div');
    itemPrice.setAttribute('class', 'food-price');
    itemPrice.textContent = '$26.90';

    let itemDesc = document.createElement('div');
    itemDesc.textContent = 'Hot chicken, barbecue sauce, ranch dressing, cheese';

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemDesc);
    menu.appendChild(document.createElement('hr'));
    menu.appendChild(item);
    console.log(menu);
}
