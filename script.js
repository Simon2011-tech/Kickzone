document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');

    // Example product data
    const products = [
        {
            name: "Air Force",
            description: "Classic white sneakers.",
            price: 30,
            image: "path_to_image/air-force.jpeg",  // Replace with actual image URL
            sizes: "36-41"
        }
    ];

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Sizes: ${product.sizes}</p>
        `;
        productsContainer.appendChild(productElement);
    });
});
