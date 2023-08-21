document.addEventListener("DOMContentLoaded", function() {
  const inStock = [
    { name: 'pizza', emoji: '🍕' },
    { name: 'cookies', emoji: '🍪' },
    { name: 'eggs', emoji: '🥚' },
    { name: 'apples', emoji: '🍎' },
    { name: 'milk', emoji: '🥛' },
    { name: 'cheese', emoji: '🧀' },
    { name: 'bread', emoji: '🍞' },
    { name: 'lettuce', emoji: '🥬' },
    { name: 'carrots', emoji: '🥕' },
    { name: 'broccoli', emoji: '🥦' },
    { name: 'potatoes', emoji: '🥔' },
    { name: 'crackers', emoji: '🍘' },
    { name: 'onions', emoji: '🧅' },
    { name: 'butter', emoji: '🧈' },
    { name: 'limes', emoji: '🍋' },
    { name: 'cucumbers', emoji: '🥒' },
  ];

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
        return itemName.includes(search) || itemName === search + 's'; // Allow plural search using includes().
      });

      if (foundItem) {
        const position = inStock.indexOf(foundItem) + 1; // Uses IndexOf() to get the position of the item in the array
        const itemName = foundItem.name;

        message = `Yes, we have ${itemName}. It's #${position} on the list!`;
        emoji = foundItem.emoji;
      } else {
        message = `Sorry, we do not have ${search}.`;
        emoji = '❌'; // Red cross emoji for not in stock
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
    const itemsMessage = inStock.map(item => `${item.emoji} ${item.name}`).join('<br>'); // Join array elements with <br> tag

    Swal.fire({
      html: `<div class="text-3xl mb-4">Items in stock:</div><div>${itemsMessage}</div>`,
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
