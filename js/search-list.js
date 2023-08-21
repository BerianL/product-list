import inStock from './products.js';

document.addEventListener("DOMContentLoaded", function() {
  
  const inputElement = document.querySelector('.input');
  const searchButton = document.getElementById('search');
  const productListButton = document.getElementById('product-list');

  function showAlert() {
    const search = inputElement.value.trim().toLowerCase();
    let message;
    let emoji;

    if (search) {
      const foundItem = inStock.find(item => {
        const itemName = item.name.toLowerCase();
        const pluralizedItemName = pluralize(itemName);
      
        return itemName === search || pluralizedItemName === search || pluralizedItemName === pluralize(search);
      });
      

      if (foundItem) {
        const position = inStock.indexOf(foundItem) + 1; // Uses IndexOf() to get the position of the item in the array
        const itemName = foundItem.name;

        message = `Yes, we have ${itemName}. It's #${position} on the list!`;
        emoji = foundItem.emoji;
      } else {
        message = `Sorry, we do not have ${search}.`;
        emoji = '❌';
      }

      Swal.fire({
        html: `<div class="text-8xl p-4">${emoji}</div><div class="text-2xl p-4">${message}</div>`,
        confirmButtonText: 'OK',
        customClass: {
          content: 'text-left'
        }
      });
    } else {
      message = 'Please enter a product name.';
      emoji = '❓';

      Swal.fire({
        html: `<div class="text-8xl p-4">${emoji}</div><div class="text-2xl p-4">${message}</div>`,
        confirmButtonText: 'OK',
        customClass: {
          content: 'text-left'
        }
      });
    }
  }

  function showInStockList() {
    const itemsPerColumn = Math.ceil(inStock.length / 3);
  
    const columns = Array.from({ length: 3 }, (_, columnIndex) => {
      const startIndex = columnIndex * itemsPerColumn;
      const endIndex = startIndex + itemsPerColumn;
      const columnItems = inStock.slice(startIndex, endIndex);
  
      const columnHTML = columnItems.map(item => `${item.emoji} ${item.name}`).join('<br>');
      return `<div class="flex flex-col">${columnHTML}</div>`;
    }).join('');
  
    Swal.fire({
      html: `
        <div class="text-3xl mb-4">Items in stock:</div>
        <div class="grid grid-cols-3 gap-4">${columns}</div>
      `,
      confirmButtonText: 'OK',
      customClass: {
        content: 'text-left'
      }
    });
  }
  

  searchButton.addEventListener('click', showAlert);

  inputElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      showAlert();
    }
  });

  productListButton.addEventListener('click', showInStockList);
});
