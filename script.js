const products = [
    { id: 201, name: "Smartphone", price: 699, category: "Electronics", stock: 50, rating: 4.6 },
    { id: 202, name: "Blender", price: 49, category: "Appliances", stock: 20, rating: 4.3 },
    { id: 203, name: "Yoga Mat", price: 25, category: "Fitness", stock: 100, rating: 4.9 },
    { id: 204, name: "Office Desk", price: 299, category: "Furniture", stock: 10, rating: 4.2 },
    { id: 205, name: "Bluetooth Speaker", price: 79, category: "Electronics", stock: 60, rating: 4.7 }
  ];
  
  const productContainer = document.getElementById('product-container');
  
  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      productCard.innerHTML = `
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">$${product.price}</p>
          <p class="product-rating">Rating: ${product.rating}</p>
          <p class="product-category">Category: ${product.category}</p>
          <button class="buy-btn">Buy Now</button>
      `;
      
      productContainer.appendChild(productCard);
  });
  