async function loadProducts(category = "All") {
  const response = await fetch("products.json");
  const products = await response.json();

  const container = document.getElementById("products");
  container.innerHTML = "";

  const searchText = document
    .getElementById("search")
    .value
    .toLowerCase();

  products
    .filter(product => {
      const matchCategory =
        category === "All" || product.category === category;

      const matchSearch =
        product.name.toLowerCase().includes(searchText);

      return matchCategory && matchSearch;
    })
    .forEach(product => {
      container.innerHTML += `
        <div class="card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <button onclick="alert('Order feature coming in next step')">
            Order Now
          </button>
        </div>
      `;
    });
}

loadProducts();

document.getElementById("search").addEventListener("input", () => {
  loadProducts();
});

document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    loadProducts(button.textContent);
  });
});
