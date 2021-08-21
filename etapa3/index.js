let pizzaSel = document.getElementById('pizza-selector');
pizzaSel.addEventListener('click', addPizza);

let saladSel = document.getElementById('salad-selector');
saladSel.addEventListener('click', addSalad);

let starterSel = document.getElementById('starter-selector');
starterSel.addEventListener('click', addStarter);

function addPizza() {
    pizzaButtonActivated();

    let menu = document.getElementById('food-items');

    while(menu.firstChild){
        menu.removeChild(menu.lastChild);
    }

    var file = "pizza.txt";

    fetch(file)
    .then(response => response.text())
    .then(data =>{
        var prato = data.split("\n");
        var max = prato.length;

        for(var i = 0; i <  max; i++){

            let item = document.createElement('div');
            item.setAttribute('class', 'food-item');
            menu.appendChild(item);

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
                menu.appendChild(document.createElement('hr'));
            }
        }
    })
}

function addSalad(){
    saladButtonActivated();

    let menu = document.getElementById('food-items');   

    while(menu.firstChild){
        menu.removeChild(menu.lastChild);
    }

    var file = "salad.txt";

    fetch(file)
    .then(response => response.text())
    .then(data =>{
        var prato = data.split("\n");
        var max = prato.length;

        for(var i = 0; i <  max; i++){

            let item = document.createElement('div');
            item.setAttribute('class', 'food-item');
            menu.appendChild(item);

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
                menu.appendChild(document.createElement('hr'));
            }
        }
    })
}

function addStarter(){
    starterButtonActivated();

    let menu = document.getElementById('food-items');

    while(menu.firstChild){
        menu.removeChild(menu.lastChild);
    }

    var file = "starter.txt";

    fetch(file)
    .then(response => response.text())
    .then(data =>{
        var prato = data.split("\n");
        var max = prato.length;

        for(var i = 0; i <  max; i++){

            let item = document.createElement('div');
            item.setAttribute('class', 'food-item');
            menu.appendChild(item);

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
                menu.appendChild(document.createElement('hr'));
            }
        }
    })
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