const products = [
  {
    name: "Smart Watch",
    price: "₹999",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Bluetooth Earbuds",
    price: "₹799",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Sports Shoes",
    price: "₹1299",
    image: "https://via.placeholder.com/200"
  }
];

const container = document.getElementById("products");

products.forEach(product => {
  container.innerHTML += `
    <div style="background:#fff;padding:15px;border-radius:10px;text-align:center;">
      <img src="${product.image}" width="100%">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button style="padding:10px 20px;background:#2874f0;color:#fff;border:none;border-radius:5px;">
        Order Now
      </button>
    </div>
  `;
});
