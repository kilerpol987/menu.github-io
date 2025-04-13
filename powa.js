let totalItems = 0;
let totalPrice = 0;

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listeners to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the price of the item from the data attribute
        const menuItem = button.parentElement; // Get the parent menu item
        const price = parseFloat(menuItem.getAttribute('data-price')); // Get the price

        // Update total items and total price
        totalItems += 1;
        totalPrice += price;

        // Update the cart summary display
        document.getElementById('cart-count').innerText = totalItems;
        document.getElementById('total-items').innerText = totalItems;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2); // Format to 2 decimal places
    });
});