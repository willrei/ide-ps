/* ------------------- header and form buttons listeners -------------------- */

let navButtons = document.getElementsByClassName('nav-button');
for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('mouseenter', enterButton);
    navButtons[i].addEventListener('mouseleave', leaveButton);
}

let headerButton = document.getElementById('header-button');
headerButton.addEventListener('mouseenter', enterButton);
headerButton.addEventListener('mouseleave', leaveButton);

let formButton = document.getElementById('form-button');
formButton.addEventListener('mouseenter', enterButton);
formButton.addEventListener('mouseleave', leaveButton);

function enterButton() {
    switch (this.className) {
        case 'nav-button': 
        case 'header-button':
            this.style.backgroundColor = 'rgba(0, 0, 0, 1)'; break;
        case 'form-button':
            this.style.backgroundColor = 'rgb(190, 190, 190)';
    }
}

function leaveButton() {
    switch (this.className) {
        case 'nav-button':
            this.style.backgroundColor = 'rgba(0, 0, 0, 0)'; break;
        case 'header-button':
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.55)'; break;
        case 'form-button':
            this.style.backgroundColor = 'rgb(230, 230, 230)';
    }
}

/* ------------------------- menu buttons listeners ------------------------- */

let pizzaSel = document.getElementById('pizza-selector');
pizzaSel.addEventListener('click', pizzaButtonActivated);
pizzaSel.addEventListener('mouseenter', enterSelector);
pizzaSel.addEventListener('mouseleave', leaveSelector);

let saladSel = document.getElementById('salad-selector');
saladSel.addEventListener('click', saladButtonActivated);
saladSel.addEventListener('mouseenter', enterSelector);
saladSel.addEventListener('mouseleave', leaveSelector);

let starterSel = document.getElementById('starter-selector');
starterSel.addEventListener('click', starterButtonActivated);
starterSel.addEventListener('mouseenter', enterSelector);
starterSel.addEventListener('mouseleave', leaveSelector);

function enterSelector() {
    if (this.className === 'menu-type')
        this.className = 'menu-type-hovered';
}

function leaveSelector() {
    if (this.className === 'menu-type-hovered')
        this.className = 'menu-type';
}

function pizzaButtonActivated() {
    pizzaSel.className = 'menu-type-selected';
    saladSel.className = 'menu-type';
    starterSel.className = 'menu-type';
    menu.replaceChild(menus[0], document.getElementById('food-items'));
}

function saladButtonActivated() {
    pizzaSel.className = 'menu-type';
    saladSel.className = 'menu-type-selected';
    starterSel.className = 'menu-type';
    menu.replaceChild(menus[1], document.getElementById('food-items'));
}

function starterButtonActivated() {
    pizzaSel.className = 'menu-type';
    saladSel.className = 'menu-type';
    starterSel.className = 'menu-type-selected';
    menu.replaceChild(menus[2], document.getElementById('food-items'));
}

/* -------------------------- menu objects creation ------------------------- */

let menu = document.getElementById('menu-plates');
let menus = [];

let files = ['pizza.txt', 'salad.txt', 'starter.txt'];

for (let file = 0; file < files.length; file++) {
    let items = document.createElement('div');
    items.setAttribute('id', 'food-items');
    items.setAttribute('class', 'food-items');

    fetch(files[file])
    .then(response => response.text())
    .then(data => {
        let pratos = data.split('\r\n');
        let max = pratos.length;

        for (let i = 0; i < max; i += 4) {
            let item = document.createElement('div');
            item.setAttribute('class', 'food-item');
            items.appendChild(item);

            let itemName = document.createElement('div');
            itemName.style.fontWeight = 'bold';
            itemName.textContent = pratos[i];
            item.appendChild(itemName);

            if (pratos[i + 1] != 'none') {
                let itemTag = document.createElement("mark");
                switch (pratos[i + 1]) {
                    case 'hot': itemTag.textContent = 'Hot!'; break;
                    case 'new': itemTag.textContent = 'New'; break;
                    case 'popular': itemTag.textContent = 'Popular'; break;
                    case 'seasonal': itemTag.textContent = 'Seasonal'; break;
                }
                itemTag.setAttribute('class', pratos[i + 1]);
                itemName.appendChild(itemTag);
            }
            
            let itemPrice = document.createElement('div');
            itemPrice.setAttribute('class', 'food-price');
            itemPrice.textContent = pratos[i + 2];
            item.appendChild(itemPrice);

            let itemDesc = document.createElement('div');
            itemDesc.textContent = pratos[i + 3];
            item.appendChild(itemDesc);        
            
            if ((i + 3) < (max - 1)){
                items.appendChild(document.createElement('hr'));
            }
        }
    });
    menus.push(items);
}
