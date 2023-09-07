document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var imageUpload = document.getElementById('imageUpload');
    var price = document.getElementById('price').value;
    var productName = document.getElementById('productName').value;

    var reader = new FileReader();

    reader.onload = function(event) {
        var imageUrl = event.target.result;

        var product = {
            imageUrl: imageUrl,
            price: price,
            productName: productName
        };

        var products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        alert('Product added successfully!');
    };

    reader.readAsDataURL(imageUpload.files[0]);
});
