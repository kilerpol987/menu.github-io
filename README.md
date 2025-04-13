<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Food Brand</title>
    <link rel="stylesheet" href="style.css">
    <link rel="js" href="powa.js">
</head>
<body>
    <header>
        <h1>Your Food Brand</h1>
        <nav>
            <ul>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#cart">Cart (<span id="cart-count">0</span>)</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="hero">
            <h2>Delicious Meals Delivered to Your Doorstep</h2>
            <a href="#menu" class="cta-button">Order Now</a>
        </section>
        
        <section id="menu">
            <h2><center> Food Menu </center></h2>
            <div class="menu-item" data-price="10.00">
                <img src="burg.png" alt="Food Item 1" width="700" height="300">
                <h3>Burger</h3>
                <p>Description of Food Item 1.</p>
                <p>Price: $10.00</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="menu-item" data-price="12.00">
                <img src="wx.jpg" alt="Food Item 2" width="700" height="300">
                <h3>Pizza</h3>
                <p>Description of Food Item 2.</p>
                <p>Price: $12.00</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="menu-item" data-price="8.00">
                <img src="qw.jpg" alt="Food Item 3" width="700" height="300"6>
                <h3>Siomai Rice</h3>
                <p>Description of Food Item 3.</p>
                <p>Price: $8.00</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <!-- Add more menu items as needed -->
        </section>

        <section id="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: <span id="total-items">0</span></p>
            <p>Total Price: $<span id="total-price">0.00</span></p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023 Your Food Brand. All rights reserved.</p>
    </footer>

    <script src="powa.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #ff6347; /* Tomato color */
    color: white;
    padding: 20px;
    text-align: center;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

#hero {
    text-align: center;
    padding: 50px 20px;
    background-color: #f8f8f8;
}

.cta-button {
    background-color: #ff6347; /* Tomato color */
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
}

#menu {
    padding: 20px;
}

.menu-item {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin: 15px 0;
    text-align: center;
}

.menu-item img {
    max-width: 100%;
    height: auto;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: white;
}

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
