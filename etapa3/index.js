let pizzaSel = document.getElementById('pizza-selector');
pizzaSel.addEventListener('click', addPizza);


let saladSel = document.getElementById('salad-selector');
saladSel.addEventListener('click', addSalad);

let starterSel = document.getElementById('starter-selector');
starterSel.addEventListener('click', addStarter);



function addPizza() {
    pizzaButtonActivated();

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

function addStarter(){
    starterButtonActivated();
}

function addSalad(){
    saladButtonActivated();

}



function pizzaButtonActivated(){
    document.getElementById('pizza-selector').classList.add('menu-type-selected');
    document.getElementById('pizza-selector').classList.remove('menu-type');
    document.getElementById('salad-selector').classList.add('menu-type');
    document.getElementById('salad-selector').classList.remove('botao-selec');
    document.getElementById('starter-selector').classList.add('menu-type');
    document.getElementById('starter-selector').classList.remove('botao-selec');
}
function saladButtonActivated(){
    document.getElementById('pizza-selector').classList.add('menu-type');
    document.getElementById('pizza-selector').classList.remove('menu-type-selected');
    document.getElementById('salad-selector').classList.add('menu-type-selected');
    document.getElementById('salad-selector').classList.remove('menu-type');
    document.getElementById('starter-selector').classList.add('menu-type');
    document.getElementById('starter-selector').classList.remove('menu-type-selected');
}
function starterButtonActivated(){
    document.getElementById('pizza-selector').classList.add('menu-type');
    document.getElementById('pizza-selector').classList.remove('menu-type-selected');
    document.getElementById('salad-selector').classList.add('menu-type');
    document.getElementById('salad-selector').classList.remove('menu-type-selected');
    document.getElementById('starter-selector').classList.add('menu-type-selected');
    document.getElementById('starter-selector').classList.remove('menu-type');
}