let navButtons = document.getElementsByClassName('nav-button');
for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('mouseenter', enterNavButton);
    navButtons[i].addEventListener('mouseleave', leaveNavButton);
}

function enterNavButton() {
    this.style.backgroundColor = 'rgba(0, 0, 0, 1)';
}

function leaveNavButton() {
    this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

let headerButton = document.getElementById('header-button');
headerButton.addEventListener('mouseenter', enterHeaderButton);
headerButton.addEventListener('mouseleave', leaveHeaderButton);

function enterHeaderButton() {
    headerButton.style.backgroundColor = 'rgba(0, 0, 0, 1)';
}

function leaveHeaderButton() {
    headerButton.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
}

let formButton = document.getElementById('form-button');
formButton.addEventListener('mouseenter', enterFormButton);
formButton.addEventListener('mouseleave', leaveFormButton);

function enterFormButton() {
    formButton.style.backgroundColor = 'rgb(190, 190, 190)';
}

function leaveFormButton() {
    formButton.style.backgroundColor = 'rgb(230, 230, 230)';
}

let pizzaSel = document.getElementById('pizza-selector');
pizzaSel.addEventListener('click', addPizza);
pizzaSel.addEventListener('mouseenter', enterPizza);
pizzaSel.addEventListener('mouseleave', leavePizza);

let saladSel = document.getElementById('salad-selector');
saladSel.addEventListener('click', addSalad);
saladSel.addEventListener('mouseenter', enterSalad);
saladSel.addEventListener('mouseleave', leaveSalad);

let starterSel = document.getElementById('starter-selector');
starterSel.addEventListener('click', addStarter);
starterSel.addEventListener('mouseenter', enterStarter);
starterSel.addEventListener('mouseleave', leaveStarter);

function enterPizza() {
    if (pizzaSel.className === 'menu-type') {
        pizzaSel.className = 'menu-type-hovered';
    }
}

function leavePizza() {
    if (pizzaSel.className === 'menu-type-hovered') {
        pizzaSel.className = 'menu-type';
    }
}

function enterSalad() {
    if (saladSel.className === 'menu-type') {
        saladSel.className = 'menu-type-hovered';
    }
}

function leaveSalad() {
    if (saladSel.className === 'menu-type-hovered') {
        saladSel.className = 'menu-type';
    }
}

function enterStarter() {
    if (starterSel.className === 'menu-type') {
        starterSel.className = 'menu-type-hovered';
    }
}

function leaveStarter() {
    if (starterSel.className === 'menu-type-hovered') {
        starterSel.className = 'menu-type';
    }
}

function addPizza() {
    pizzaButtonActivated();

    let menu = document.getElementById('menu-plates');
    let oldItems = document.getElementById('food-items');
    let items = document.createElement('div');
    items.setAttribute('id', 'food-items');
    items.setAttribute('class', 'food-items');

    let file = "pizza.txt";

    fetch(file)
    .then(response => response.text())
    .then(data => {
        let prato = data.split("\n");
        let max = prato.length;

        for(let i = 0; i < max; i++) {

            let item = document.createElement('div');
            item.setAttribute('class', 'food-item');
            items.appendChild(item);

            let itemName = document.createElement('div');
            itemName.style.fontWeight = 'bold';
            itemName.textContent = prato[i];
            item.appendChild(itemName);
            i++;
            if(i == 13){
                let itemTag = document.createElement("MARK");
                itemTag.setAttribute('class', 'hot');
                itemTag.textContent = prato[i];
                itemName.appendChild(itemTag);
                i++;
            }
            else if(i == 17){
                let itemTag = document.createElement("MARK");
                itemTag.setAttribute('class', 'new');
                itemTag.textContent = prato[i];
                itemName.appendChild(itemTag);
                i++;
            }
        
            let itemPrice = document.createElement('div');
            itemPrice.setAttribute('class', 'food-price');
            itemPrice.textContent = prato[i];
            item.appendChild(itemPrice);
            i++;

            let itemDesc = document.createElement('div');
            itemDesc.textContent = prato[i];
            item.appendChild(itemDesc);        
            
            if(i < (max-1)){
                items.appendChild(document.createElement('hr'));
            }
        }
        console.log(items);
        menu.replaceChild(items, oldItems);
    })
}

function addSalad() {
    saladButtonActivated();

    let menu = document.getElementById('menu-plates');
    let oldItems = document.getElementById('food-items');
    let items = document.createElement('div');
    items.setAttribute('id', 'food-items');
    items.setAttribute('class', 'food-items');

    let file = "salad.txt";

    fetch(file)
    .then(response => response.text())
    .then(data =>{
        let prato = data.split("\n");
        let max = prato.length;

        for(let i = 0; i < max; i++){

            let item = document.createElement('div');
            item.setAttribute('class', 'food-item');
            items.appendChild(item);

            let itemName = document.createElement('div');
            itemName.style.fontWeight = 'bold';
            itemName.textContent = prato[i];
            item.appendChild(itemName);
            i++;
            if(i == 1){
                let itemTag = document.createElement("MARK");
                itemTag.setAttribute('class', 'new');
                itemTag.textContent = prato[i];
                itemName.appendChild(itemTag);
                i++;
            }

            let itemPrice = document.createElement('div');
            itemPrice.setAttribute('class', 'food-price');
            itemPrice.textContent = prato[i];
            item.appendChild(itemPrice);
            i++;

            let itemDesc = document.createElement('div');
            itemDesc.textContent = prato[i];
            item.appendChild(itemDesc);
            
            if(i < (max-1)){
                items.appendChild(document.createElement('hr'));
            }
        }
        console.log(items);
        menu.replaceChild(items, oldItems);
    })
}

function addStarter() {
    starterButtonActivated();

    let menu = document.getElementById('menu-plates');
    let oldItems = document.getElementById('food-items');
    let items = document.createElement('div');
    items.setAttribute('id', 'food-items');
    items.setAttribute('class', 'food-items');

    let file = "starter.txt";

    fetch(file)
    .then(response => response.text())
    .then(data =>{
        let prato = data.split("\n");
        let max = prato.length;

        for(let i = 0; i < max; i++){

            let item = document.createElement('div');
            item.setAttribute('class', 'food-item');
            items.appendChild(item);

            let itemName = document.createElement('div');
            itemName.style.fontWeight = 'bold';
            itemName.textContent = prato[i];
            item.appendChild(itemName);
            i++;
            if(i == 1){
                let itemTag = document.createElement("MARK");
                itemTag.setAttribute('class', 'new');
                itemTag.textContent = prato[i];
                itemName.appendChild(itemTag);
                i++;
            }

            let itemPrice = document.createElement('div');
            itemPrice.setAttribute('class', 'food-price');
            itemPrice.textContent = prato[i];
            item.appendChild(itemPrice);
            i++;

            let itemDesc = document.createElement('div');
            itemDesc.textContent = prato[i];
            item.appendChild(itemDesc);
            
            if(i < (max-1)){
                items.appendChild(document.createElement('hr'));
            }
        }
        console.log(items);
        menu.replaceChild(items, oldItems);
    })
}

function pizzaButtonActivated() {
    pizzaSel.className = 'menu-type-selected';
    saladSel.className = 'menu-type';
    starterSel.className = 'menu-type';
}

function saladButtonActivated() {
    pizzaSel.className = 'menu-type';
    saladSel.className = 'menu-type-selected';
    starterSel.className = 'menu-type';
}

function starterButtonActivated() {
    pizzaSel.className = 'menu-type';
    saladSel.className = 'menu-type';
    starterSel.className = 'menu-type-selected';
}
