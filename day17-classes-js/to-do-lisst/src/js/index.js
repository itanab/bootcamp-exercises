const shoppingList = [
  { name: 'apples', amount: '1kg' },
  { name: 'bacon', amount: '200g' },
  { name: 'cheddar', amount: '250g' },
  { name: 'beer', amount: '6' },
  { name: 'icecream', amount: '1kg' },
];

document.addEventListener('DOMContentLoaded', () => {
  const listElm = document.querySelector('.shopping-list');

  for (const item of shoppingList) {
    const itemElm = document.createElement('div');
    itemElm.className = "shopping-list__item";
    itemElm.innerHTML = (
      `<span>${item.name}</span>
       <span>${item.amount}</span>
       <input type="checkbox" class="done">`
    );
    
    itemElm.querySelector('.done').addEventListener('click', (event) => {
      if (item.done){
        item.done = false;
      }else{
        item.done = true;
      }
    })
    
    
    
    
    
    
    
    
    
    listElm.appendChild(itemElm);
    }
});

