
document.addEventListener('DOMContentLoaded', function() {
    var productList = document.getElementById('productList');
    var products = JSON.parse(localStorage.getItem('products')) || [];

    function renderProducts() {
        productList.innerHTML = ''; // Clear the list before re-rendering

        products.forEach(function(product, index) {
            var listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.productName}" style="max-width:100px /">
                <p>${product.productName}</p>
                <p>Price: ${product.price}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            productList.appendChild(listItem);
        });

        // Add event listeners to the delete buttons
        var deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var index = this.getAttribute('data-index');
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(products));
                renderProducts(); // Re-render the products after deletion
            });
        });
    }

    renderProducts();
});
